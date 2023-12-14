import { PiHeadset } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";

export const footerLinks = [
  {
    title: "Zamówienia",
    links: [
      { title: "Dostawa", url: "/" },
      { title: "Raty", url: "/" },
      { title: "Leasing", url: "/" },
      { title: "Ubezpieczenia", url: "/" },
      { title: "TaxFree", url: "/" },
      { title: "Montaż", url: "/" },
      { title: "Zwroty i reklamacje", url: "/" },
      { title: "Najczęściej zadawane pytania", url: "/" },
    ],
  },
  {
    title: "Promocje i inspiracje",
    links: [
      { title: "Wyprzedaż", url: "/" },
      { title: "Gorący strzał", url: "/" },
      { title: "un.Box", url: "/" },
      { title: "Promocje", url: "/" },
      { title: "Karty podarunkowe", url: "/" },
      { title: "Poradniki", url: "/" },
      { title: "Aktualności", url: "/" },
    ],
  },
  {
    title: "Innotech",
    links: [
      { title: "O nas", url: "/" },
      { title: "Regulamin", url: "/" },
      { title: "Polityka prywatności", url: "/" },
      { title: "Polityka cookies", url: "/" },
      { title: "Regulamin newslettera", url: "/" },
      { title: "Biuro prasowe", url: "/" },
      { title: "Zamówienia publiczne", url: "/" },
      { title: "Zakupy dla firm", url: "/" },
      { title: "Współpraca marketingowa", url: "/" },
      { title: "Geex", url: "/" },
      { title: "Forum", url: "/" },
      { title: "Kariera", url: "/" },
      { title: "Kontakt", url: "/" },
      { title: "Realizowane projekty", url: "/" },
    ],
  },

  {
    title: "Kontakt",
    phone: "22 222 22 22",
    workingHours: {
      weekdays: "pon. - pt. | 8:00 - 21:00",
      weekends: "sob. - niedz. | 8:00 - 19:00",
    },
    email: "x-kom@x-kom.pl",
    whatsapp: "WhatsApp",
    innotechSalons: "Salony Innotech",
  },
];
export const companys = [
  "https://assets.x-kom.pl/public-spa/xkom/37a657a8ea71c244.png",
  "https://assets.x-kom.pl/public-spa/xkom/49043d12b5e7dd3b.png",
  "https://assets.x-kom.pl/public-spa/xkom/c26b80bc206f1117.png",
  "https://assets.x-kom.pl/public-spa/xkom/2a258eafdbb74b43.png",
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
