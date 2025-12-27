import { NextRequest, NextResponse } from 'next/server';

interface CustomerInfo {
    name: string;
    email: string;
    contact: string;
}

interface RequestBody {
    amount: number;
    programTag?: string;
    customer?: CustomerInfo;
    notes?: {
        firstName?: string;
        lastName?: string;
    };
}

export async function POST(request: NextRequest) {
    try {
        const { amount, programTag, customer, notes: additionalNotes }: RequestBody = await request.json();

        // Validate amount
        if (!amount || typeof amount !== 'number' || amount < 1) {
            return NextResponse.json(
                { error: 'Invalid amount. Please enter a valid donation amount.' },
                { status: 400 }
            );
        }

        const keyId = process.env.RAZORPAY_KEY_ID;
        const keySecret = process.env.RAZORPAY_KEY_SECRET;

        if (!keyId || !keySecret) {
            console.error('Razorpay credentials not configured');
            return NextResponse.json(
                { error: 'Payment service not configured. Please contact support.' },
                { status: 500 }
            );
        }

        // Create payment link via Razorpay API
        // Amount must be in paise (smallest currency unit)
        const amountInPaise = Math.round(amount * 100);

        // Build notes object with customer info for backend tracking
        const paymentNotes: Record<string, string> = {
            program: programTag || 'General',
            source: 'mahagathe.com',
        };

        // Add customer info to notes for easy backend lookup
        if (additionalNotes?.firstName) {
            paymentNotes.donor_first_name = additionalNotes.firstName;
        }
        if (additionalNotes?.lastName) {
            paymentNotes.donor_last_name = additionalNotes.lastName;
        }
        if (customer?.email) {
            paymentNotes.donor_email = customer.email;
        }
        if (customer?.contact) {
            paymentNotes.donor_phone = customer.contact;
        }

        const response = await fetch('https://api.razorpay.com/v1/payment_links', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`,
            },
            body: JSON.stringify({
                amount: amountInPaise,
                currency: 'INR',
                description: programTag
                    ? `Donation to Mahagathe Foundation - ${programTag}`
                    : 'Donation to Mahagathe Foundation',
                reminder_enable: false,
                notes: paymentNotes,
                // Include customer info in payment link
                ...(customer && {
                    customer: {
                        name: customer.name,
                        email: customer.email,
                        contact: customer.contact,
                    },
                }),
                callback_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://mahagathe.com'}/`,
                callback_method: 'get',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Razorpay API error:', errorData);
            return NextResponse.json(
                { error: 'Failed to create payment link. Please try again.' },
                { status: 500 }
            );
        }

        const data = await response.json();

        return NextResponse.json({
            short_url: data.short_url,
            id: data.id,
        });
    } catch (error) {
        console.error('Payment link creation error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
