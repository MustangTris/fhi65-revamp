// src/lib/constants.ts

export const COMPANY_INFO = {
  name: "Foulds Health Insurance",
  shortName: "FHI65",
  phone: "(760) 346-6565", 
  email: "randy@fhi65.com",
  address: {
    street: "78010 Main St, Suite 205",
    city: "La Quinta",
    state: "CA",
    zip: "92253",
  },
  license: "CA License #0B98765", 
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    subLinks: [
      { name: "Medicare", href: "/services/medicare" },
      { name: "Under 65 Health", href: "/services/under-65" },
    ],
  },
  { name: "Get a Quote", href: "/quotes" },
  { name: "Contact", href: "/contact" },
];