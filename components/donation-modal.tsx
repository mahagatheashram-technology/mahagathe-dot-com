"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Loader2, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const PRESET_AMOUNTS = [100, 500, 1000, 5000];

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaignTitle?: string;
  programTag?: string;
}

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export function DonationModal({
  isOpen,
  onClose,
  campaignTitle,
  programTag,
}: DonationModalProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handlePresetSelect = (amount: number) => {
    setSelectedAmount(amount);
    setIsCustom(false);
    setCustomAmount("");
    setError(null);
  };

  const handleCustomAmountChange = (value: string) => {
    // Allow only numbers
    const numericValue = value.replace(/[^0-9]/g, "");
    setCustomAmount(numericValue);
    setIsCustom(true);
    setSelectedAmount(null);
    setError(null);
  };

  const handleCustomerInfoChange = (
    field: keyof CustomerInfo,
    value: string
  ) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const getFinalAmount = useCallback((): number => {
    if (isCustom && customAmount) {
      return parseInt(customAmount, 10);
    }
    return selectedAmount || 0;
  }, [isCustom, customAmount, selectedAmount]);

  const validateForm = (): string | null => {
    const amount = getFinalAmount();

    if (!amount || amount < 1) {
      return "Please select or enter a valid donation amount.";
    }
    if (amount < 10) {
      return "Minimum donation amount is ₹10.";
    }
    if (!customerInfo.firstName.trim()) {
      return "Please enter your first name.";
    }
    if (!customerInfo.lastName.trim()) {
      return "Please enter your last name.";
    }
    if (!customerInfo.email.trim()) {
      return "Please enter your email address.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      return "Please enter a valid email address.";
    }
    if (!customerInfo.phone.trim()) {
      return "Please enter your phone number.";
    }
    if (!/^\d{10}$/.test(customerInfo.phone.replace(/\D/g, ""))) {
      return "Please enter a valid 10-digit phone number.";
    }
    return null;
  };

  const handleProceed = async () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const amount = getFinalAmount();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/payment-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          programTag,
          customer: {
            name: `${customerInfo.firstName.trim()} ${customerInfo.lastName.trim()}`,
            email: customerInfo.email.trim(),
            contact: `+91${customerInfo.phone.replace(/\D/g, "")}`,
          },
          notes: {
            firstName: customerInfo.firstName.trim(),
            lastName: customerInfo.lastName.trim(),
          },
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create payment link");
      }

      // Redirect to Razorpay payment page
      window.location.href = data.short_url;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-[var(--brand-rose-500)] to-[var(--brand-maroon-900)] px-6 py-5 text-white">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-full">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold">
                Support Our Cause
              </h2>
              {campaignTitle && (
                <p className="text-sm text-white/80 mt-0.5">{campaignTitle}</p>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Preset Amounts */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-[var(--neutral-600)] mb-3">
              Select an amount
            </label>
            <div className="grid grid-cols-4 gap-3">
              {PRESET_AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handlePresetSelect(amount)}
                  className={cn(
                    "py-3 px-2 rounded-xl font-bold text-center transition-all border-2",
                    selectedAmount === amount && !isCustom
                      ? "border-[var(--brand-rose-500)] bg-[var(--brand-rose-500)]/10 text-[var(--brand-maroon-900)]"
                      : "border-[var(--neutral-200)] hover:border-[var(--brand-rose-300)] text-[var(--neutral-700)]"
                  )}
                >
                  ₹{amount.toLocaleString("en-IN")}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 h-px bg-[var(--neutral-200)]" />
            <span className="text-sm text-[var(--neutral-500)]">
              or enter amount
            </span>
            <div className="flex-1 h-px bg-[var(--neutral-200)]" />
          </div>

          {/* Custom Amount */}
          <div className="mb-6">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-[var(--neutral-500)]">
                ₹
              </span>
              <input
                type="text"
                inputMode="numeric"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={(e) => handleCustomAmountChange(e.target.value)}
                className={cn(
                  "w-full pl-10 pr-4 py-3 text-lg font-medium rounded-xl border-2 transition-all outline-none",
                  isCustom && customAmount
                    ? "border-[var(--brand-rose-500)] bg-[var(--brand-rose-500)]/5"
                    : "border-[var(--neutral-200)] focus:border-[var(--brand-rose-400)]"
                )}
              />
            </div>
          </div>

          {/* Customer Info Section */}
          <div className="mb-6 p-4 bg-[var(--neutral-50)] rounded-xl">
            <label className="block text-sm font-medium text-[var(--neutral-600)] mb-3">
              Your Information
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="First Name *"
                  value={customerInfo.firstName}
                  onChange={(e) =>
                    handleCustomerInfoChange("firstName", e.target.value)
                  }
                  className="w-full px-4 py-3 rounded-lg border-2 border-[var(--neutral-200)] focus:border-[var(--brand-rose-400)] outline-none transition-all text-sm"
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  value={customerInfo.lastName}
                  onChange={(e) =>
                    handleCustomerInfoChange("lastName", e.target.value)
                  }
                  className="w-full px-4 py-3 rounded-lg border-2 border-[var(--neutral-200)] focus:border-[var(--brand-rose-400)] outline-none transition-all text-sm"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address *"
                value={customerInfo.email}
                onChange={(e) =>
                  handleCustomerInfoChange("email", e.target.value)
                }
                className="w-full px-4 py-3 rounded-lg border-2 border-[var(--neutral-200)] focus:border-[var(--brand-rose-400)] outline-none transition-all text-sm"
              />
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-[var(--neutral-500)]">
                  +91
                </span>
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="Phone Number *"
                  value={customerInfo.phone}
                  onChange={(e) =>
                    handleCustomerInfoChange(
                      "phone",
                      e.target.value.replace(/\D/g, "").slice(0, 10)
                    )
                  }
                  className="w-full pl-14 pr-4 py-3 rounded-lg border-2 border-[var(--neutral-200)] focus:border-[var(--brand-rose-400)] outline-none transition-all text-sm"
                />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Proceed Button */}
          <button
            onClick={handleProceed}
            disabled={isLoading}
            className={cn(
              "w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2",
              isLoading
                ? "bg-[var(--neutral-200)] text-[var(--neutral-500)] cursor-not-allowed"
                : "bg-[#d64545] text-white hover:bg-[#b93a3a] shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            )}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating Payment Link...
              </>
            ) : (
              <>Proceed to Pay ₹{getFinalAmount().toLocaleString("en-IN")}</>
            )}
          </button>

          {/* Security Note */}
          <p className="mt-4 text-center text-xs text-[var(--neutral-500)]">
            Secured by Razorpay. Your payment information is safe.
          </p>
        </div>
      </div>
    </div>
  );
}
