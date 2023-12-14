import { PiHeadset } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";

export const footerLinks = [
  {
    title: "Orders",
    links: [
      { title: "Delivery", url: "/" },
      { title: "Installments", url: "/" },
      { title: "Leasing", url: "/" },
      { title: "Insurance", url: "/" },
      { title: "TaxFree", url: "/" },
      { title: "Assembly", url: "/" },
      { title: "Returns and complaints", url: "/" },
      { title: "Frequently Asked Questions", url: "/" },
    ],
  },
  {
    title: "Promotions and Inspirations",
    links: [
      { title: "Sale", url: "/" },
      { title: "Hot Shots", url: "/" },
      { title: "un.Box", url: "/" },
      { title: "Promotions", url: "/" },
      { title: "Gift cards", url: "/" },
      { title: "Guides", url: "/" },
      { title: "News", url: "/" },
    ],
  },
  {
    title: "Innotech",
    links: [
      { title: "About us", url: "/" },
      { title: "Terms and conditions", url: "/" },
      { title: "Privacy policy", url: "/" },
      { title: "Cookie policy", url: "/" },
      { title: "Newsletter terms", url: "/" },
      { title: "Press office", url: "/" },
      { title: "Public orders", url: "/" },
      { title: "Business purchases", url: "/" },
      { title: "Marketing cooperation", url: "/" },
      { title: "Geex", url: "/" },
      { title: "Forum", url: "/" },
      { title: "Career", url: "/" },
      { title: "Contact", url: "/" },
      { title: "Completed projects", url: "/" },
    ],
  },
  {
    title: "Contact",
    phone: "22 222 22 22",
    workingHours: {
      weekdays: "Mon - Fri | 8:00 AM - 9:00 PM",
      weekends: "Sat - Sun | 8:00 AM - 7:00 PM",
    },
    email: "innotech@innotech.pl",
    whatsapp: "WhatsApp",
    innotechSalons: "Innotech Salons",
  },
];

export const companys = [
  "https://assets.x-kom.pl/public-spa/xkom/37a657a8ea71c244.png",
  "https://assets.x-kom.pl/public-spa/xkom/49043d12b5e7dd3b.png",
  "https://assets.x-kom.pl/public-spa/xkom/c26b80bc206f1117.png",
  "https://assets.x-kom.pl/public-spa/xkom/2a258eafdbb74b43.png",
  "https://assets.x-kom.pl/public-spa/xkom/855a87adc47118d4.png",
  "https://assets.x-kom.pl/public-spa/xkom/a4e6e128e457c7d8.png",
  "https://assets.x-kom.pl/public-spa/xkom/c500d59374fe7d7d.png",
  "https://assets.x-kom.pl/public-spa/xkom/33dfc5a98f0f38a4.png",
  "https://assets.x-kom.pl/public-spa/xkom/e51fb0a6ab97d090.png",
  "https://assets.x-kom.pl/public-spa/xkom/076d960cdaf096e1.png",
  "https://assets.x-kom.pl/public-spa/xkom/709b7294b9957695.png",
  "https://assets.x-kom.pl/public-spa/xkom/93e0b5378eed5aa5.png",
  "https://assets.x-kom.pl/public-spa/xkom/4ba359ebd3c94054.png",
  "https://assets.x-kom.pl/public-spa/xkom/c7fb289360e74bc3.png",
];

export const helpAndContactLinks = {
  helpLinks: [
    { title: "Delivery status", url: "/delivery-status" },
    { title: "Delivery", url: "/delivery" },
    { title: "Installments", url: "/installments" },
    { title: "Leasing", url: "/leasing" },
    { title: "Insurance", url: "/insurance" },
    { title: "Returns and complaints", url: "/returns-and-complaints" },
    { title: "FAQ", url: "/faq" },
  ],
  contactLinks: [
    {
      icon: PiHeadset,
      title: "Contact",
      url: "/contact",
    },
    {
      icon: MdOutlineEmail,
      title: "innotech@innotech.com",
      url: "mailto:innotech@innotech.com",
    },
    {
      icon: PiPhone,
      title: "123 456 789",
      url: "tel:123456789",
    },
  ],
};
