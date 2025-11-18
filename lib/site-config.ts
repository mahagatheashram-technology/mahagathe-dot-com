export const siteConfig = {
  name: "Mahagathe",
  tagline: "Care in Action",
  url: "https://mahagathe.com",
  description:
    "Care in action—supporting health, food, and learning with dignity. Your gift powers practical help—medical aid, meals, and education kits for families in need.",
  mission: {
    headline: "Care in action—supporting health, food, and learning with dignity.",
    subhead:
      "Your gift powers practical help—medical aid, meals, and education kits for families in need.",
  },
  donationUrl: "https://mahagathe.org/donation-programs/",
  contact: {
    email: "contact@mahagathe.org",
    whatsapp: "+91 63640 66004",
    whatsappUrl: "https://wa.me/916364066004",
  },
  social: {
    youtube: "https://www.youtube.com/@Mahagathe",
    instagram: "https://www.instagram.com/mahagathe/",
    facebook: "https://m.facebook.com/voiceofmahagathe/",
    x: "https://x.com/mahagathe",
  },
  programs: [
    {
      name: "Āyuri",
      subtitle: "Healthcare Assistance",
      description: "Helps cover essential treatments and medicines.",
    },
    {
      name: "Bhandāra",
      subtitle: "Food Support",
      description: "Ration kits and community meals.",
    },
    {
      name: "Samriddhi",
      subtitle: "Emergency & Livelihood Aid",
      description: "Bridge support for crises and recovery.",
    },
    {
      name: "Adhyāya",
      subtitle: "Learning Support",
      description: "Education kits, workshops, and guidance.",
    },
  ],
  about: {
    text: "Mahagathe is dedicated to providing practical support to families in need across health, nutrition, and education. Through our programs, we work to ensure dignity and access to essential services, empowering communities to thrive.",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Activities", href: "#activities" },
    { label: "Donate", href: "#donate" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

