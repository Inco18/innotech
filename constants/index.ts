import { PiHeadset, PiMonitorLight } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { GiSmartphone } from "react-icons/gi";
import { GrGamepad } from "react-icons/gr";
import { CgMenuGridR, CgSmartphoneChip } from "react-icons/cg";
import { LuCable, LuPrinter } from "react-icons/lu";
import { BsHouseGear } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { TfiMenu, TfiMenuAlt } from "react-icons/tfi";

export const PAGE_SIZE = 30;

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

export const navigationBarCategories = [
  {
    category: "Laptops& Computers",
    icon: FaComputer,
    subcategories: [
      { id: 2, name: "Computers" },
      { id: 3, name: "Servers and storage" },
      { id: 4, name: "Software" },
      { id: 5, name: "Computer accessories" },
      { id: 6, name: "Laptop accessories" },
      { id: 7, name: "Bags and cases" },
      { id: 8, name: "Laptop docking stations" },
      { id: 10, name: "Tablets" },
      { id: 11, name: "Smartwatches" },
      { id: 12, name: "Ebook readers" },
      { id: 13, name: "Phone cases" },
      { id: 14, name: "Chargers and powerbanks" },
      { id: 15, name: "Memory cards" },
      { id: 16, name: "TWS headphones" },
      { id: 17, name: "GSM accessories" },
      { id: 18, name: "Tablet accessories" },
    ],
  },
  {
    category: "Smartphones& Smartwatches",
    icon: GiSmartphone,
    subcategories: [
      { id: 9, name: "Smartphones and phones" },
      { id: 1, name: "Laptops, Notebooks, Ultrabooks" },
    ],
  },
  {
    category: "Gaming& Streaming",
    icon: GrGamepad,
    subcategories: [
      { id: 19, name: "Gaming consoles" },
      { id: 20, name: "Console accessories" },
      { id: 21, name: "Games" },
      { id: 22, name: "VR" },
      { id: 23, name: "Streaming hardware" },
      { id: 24, name: "Gadgets for gamers" },
      { id: 25, name: "Controllers" },
    ],
  },
  {
    category: "Computer components",
    icon: CgSmartphoneChip,
    subcategories: [
      { id: 26, name: "Hard drives" },
      { id: 27, name: "Graphics cards" },
      { id: 28, name: "Processors" },
      { id: 29, name: "Motherboards" },
      { id: 30, name: "Cases" },
      { id: 31, name: "RAM" },
      { id: 32, name: "Power supplies" },
      { id: 33, name: "Cooling" },
      { id: 34, name: "PC modding" },
    ],
  },
  {
    category: "Peripheral devices",
    icon: LuPrinter,
    subcategories: [
      { id: 35, name: "Monitors" },
      { id: 36, name: "Printers" },
      { id: 37, name: "Network devices" },
      { id: 38, name: "Mouses" },
      { id: 39, name: "Keyboards" },
      { id: 40, name: "Headphones and microphones" },
      { id: 41, name: "Speakers" },
      { id: 42, name: "Projectors" },
      { id: 43, name: "Mousepads" },
      { id: 44, name: "Cameras" },
    ],
  },
  {
    category: "TV& Audio",
    icon: PiMonitorLight,
    subcategories: [
      { id: 45, name: "TVs" },
      { id: 46, name: "Soundbars" },
      { id: 47, name: "Hi-Fi audio" },
      { id: 48, name: "Home cinema" },
      { id: 49, name: "TV accessories" },
    ],
  },
  {
    category: "Smarthome& Lifestyle",
    icon: BsHouseGear,
    subcategories: [
      { id: 50, name: "Smarthome" },
      { id: 51, name: "Drones" },
      { id: 52, name: "Electrical vehicles" },
      { id: 53, name: "Health" },
      { id: 54, name: "Car accessories" },
      { id: 55, name: "Monitoring" },
      { id: 56, name: "Office chairs" },
    ],
  },
  {
    category: "Accessories",
    icon: LuCable,
    subcategories: [
      { id: 57, name: "Cables" },
      { id: 58, name: "Power" },
      { id: 59, name: "Portable drives" },
      { id: 60, name: "Cleaning" },
      { id: 61, name: "Power strips" },
      { id: 62, name: "Tools" },
    ],
  },
  {
    category: "Trends, Promotions",
    icon: CiPercent,
    subcategories: [{ id: 500, name: "Promotions" }],
  },
];
export const categoryFilterOptions = [
  { label: "Od najpopularniejszych", query: "popularity_desc" },
  { label: "Ocena klientów: od najlepszej", query: "rating_desc" },
  { label: "Cena: od najtańszych", query: "price_asc" },
  { label: "Cena: od najdroższych", query: "price_desc" },
];
export const categoryDisplayOptions = [
  { icon: CgMenuGridR, query: "tile_view", lebel: "Tile View" },
  {
    icon: TfiMenuAlt,
    query: "detailed_list_view",
    label: "Detailed List View",
  },
  {
    icon: TfiMenu,
    query: "simplified_list_view",
    label: "Simplified List View",
  },
];
