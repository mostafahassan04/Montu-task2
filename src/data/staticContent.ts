import { Home, Info, ShoppingBag, Mail } from "lucide-react";

export const APP_CONFIG = {
  brandName: "Montu",
  sidebarTitle: "Montu",
};

export const NAV_ITEMS = [
  { id: "home", title: "Home", href: "#home", icon: Home },
  { id: "about", title: "About", href: "#about", icon: Info },
  { id: "products", title: "Products", href: "#products", icon: ShoppingBag },
  { id: "contact", title: "Contact", href: "#contact", icon: Mail },
];

export const SECTIONS_DATA = {
  home: {
    id: "home",
    title: "Montu Dashboard",
    description:
      "Welcome to our modular dashboard platform built with React, Tailwind CSS, and Shadcn/UI.",
    bgClass: "bg-slate-900 text-white",
  },
  about: {
    id: "about",
    title: "About Us",
    description:
      "We build high-performance web applications utilizing core React hooks and modern UI design systems.",
    bgClass: "bg-white text-slate-900 border-b border-slate-200",
  },
  products: {
    id: "products",
    title: "Product Showcase",
    description: "Explore our dynamic inventory fetched via isolated API integration.",
    bgClass: "bg-slate-50 border-b border-slate-200",
  },
  contact: {
    id: "contact",
    title: "Contact Us",
    description:
      "Get in touch with us for API integrations and custom dashboard engineering.",
    bgClass: "bg-white text-slate-900",
  },
};