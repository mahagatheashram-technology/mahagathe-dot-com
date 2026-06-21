export const siteConfig = {
  name: "Mahagathe Foundation",
  tagline: "Care in Action",
  url: "https://ayuri.org",
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
      name: "Bhandāra",
      slug: "bhandara",
      subtitle: "Food & Nutrition",
      image: "/program-bhandara.png",
      description:
        "Rooted in the tradition of Annadāna, Bhandāra works to prevent malnutrition by providing nourishing meals to those who need them most—ensuring no one goes hungry and every plate is served with dignity.",
    },
    {
      name: "Prāyus",
      slug: "prayus",
      subtitle: "Healthcare",
      image: "/placeholder-activity-1.jpg",
      description:
        "Prāyus delivers holistic healthcare through the time-honoured systems of Siddha, Ayurveda, and yoga—nurturing body and mind and making natural, accessible care a reality for every community.",
    },
    {
      name: "Samṛti",
      slug: "samriti",
      subtitle: "Social Upliftment & Relief",
      image: "/placeholder-activity-2.jpg",
      description:
        "Samṛti empowers communities through livelihood support, animal welfare, and everyday assistance—and stands ready to provide swift relief during major crises and natural disasters.",
    },
    {
      name: "Sampanna",
      slug: "sampanna",
      subtitle: "Women's Empowerment",
      image: "/placeholder-activity-3.jpg",
      description:
        "Sampanna is devoted entirely to women's development—building skills, health, self-reliance, and self-dignity—so that every woman, including those left without support, can stand strong and independent.",
    },
    {
      name: "Advika",
      slug: "advika",
      subtitle: "Education & Learning",
      image: "/program-adhyaya.png",
      description:
        "Advika opens the doors of learning across every level—from teaching basic literacy to providing advanced study kits—nurturing knowledge that transforms lives and uplifts futures.",
    },
    {
      name: "Saṃveṣṭi",
      slug: "samvesti",
      subtitle: "Sustainable Environment",
      image: "/placeholder-activity-4.jpg",
      description:
        "Saṃveṣṭi cares for the earth through tree planting, the revival of sacred groves, soil protection, and water replenishment—restoring balance and harmony with nature.",
    },
    {
      name: "Aspadam",
      slug: "aspadam",
      subtitle: "Shelter & Care",
      image: "/program-ayuri.png",
      description:
        "Aspadam offers safe shelter to orphans, the abandoned, and the homeless—prioritising children and the elderly, and welcoming all who are physically unable to support themselves, with care and belonging.",
    },
    {
      name: "Āśleṣa",
      slug: "ashlesha",
      subtitle: "Psycho-Spiritual Support",
      image: "/placeholder-activity-5.jpg",
      description:
        "Āśleṣa provides emotional and mental support through counselling and rehabilitation—healing inner wounds and restoring strength, peace, and resilience through compassionate guidance.",
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
