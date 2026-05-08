export const siteConfig = {
  name: "Mahagathe Foundation",
  tagline: "Care in Action",
  url: "https://mahagathe.com",
  description:
    "Care in action—supporting health, food, and learning with dignity. Your gift powers practical help—medical aid, meals, and education kits for families in need.",
  mission: {
    headline:
      "Care in action—supporting health, food, and learning with dignity.",
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
      description:
        "Caring for the elderly, sick, and destitute is an integral part Sanatana Dharma. We provide old age homes with food, infrastructure, medicines, healthcare, and dignity through selfless service.",
    },
    {
      name: "Bhandāra",
      subtitle: "Food Support",
      description:
        "Providing nourishing meals to schoolchildren, villagers, and those in need, ensuring well-being, dignity, and harmony through Annadāna, the highest service.",
    },
    {
      name: "Samriddhi",
      subtitle: "Emergency & Livelihood Aid",
      description:
        "Samriddhi uplifts the underprivileged through emergency relief, livelihood support, annadāna, winter aid, and environmental efforts—restoring dignity, harmony, and balance in the spirit of Dharma.",
    },
    {
      name: "Adhyāya",
      subtitle: "Learning Support",
      description:
        "Uplifts underprivileged children through education by funding teachers, providing resources, and nurturing wisdom—ensuring knowledge prospers and transforms lives.",
    },
  ],
  about: {
    text: "Mahagathe is dedicated to providing practical support to families in need across health, nutrition, and education. Through our programs, we work to ensure dignity and access to essential services, empowering communities to thrive.",
  },
  campaign: {
    title: "Gau Seva: Protect & Feed Rescued Cows",
    description:
      "This campaign aims to provide food, shelter, and necessary medical care for rescued cows at Dakshineshwar Dham. Your contribution ensures they live with dignity and peace.",
    image: "/program-bhandara.png",
    raised: 103793,
    goal: 125000,
    funders: 36,
    daysLeft: 12,
    startDate: "01/12/2025",
    endDate: "15/12/2025",
    cause: "Animals",
    status: "active", // 'active' | 'ended'
  },
  nav: {
    left: [
      { label: "Campaign", href: "#campaign" },
      { label: "About us", href: "#about" },
    ],
    right: [
      { label: "Our Programs", href: "#programs" },
      { label: "Join us", href: "#contact" },
    ],
  },
} as const;
