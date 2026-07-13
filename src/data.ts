/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Medicine, ServiceItem, Testimonial, FAQ, GalleryItem } from "./types";

// Core Business Information
export const BUSINESS_INFO = {
  name: "SHANTI MEDICAL HALL",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Pharmacy | Medical Store",
  location: "Belhariya Road, Bela - Tekari Rd, Tekari, Gaya, Bihar 824236",
  shortLocation: "Tekari, Gaya, Bihar",
  phone: "09835686452",
  phoneFormatted: "+91 98356 86452",
  phoneUrl: "tel:+919835686452",
  whatsapp: "919835686452",
  whatsappFormatted: "+91 98356 86452",
  email: "shantimedicalhall.tekari@gmail.com",
  owner: "Mr. Shanti Kumar & Staff",
  established: "1998",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.775899217684!2d84.8322!3d24.9311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cd676dffffff%3A0x6bd77a6452fffa48!2sBelhariya%20Road%2C%20Bela%20-%20Tekari%20Rd%2C%20Tekari%2C%20Gaya%2C%20Bihar%20824236!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapsLink: "https://maps.google.com/?q=Belhariya+Road,+Bela+-+Tekari+Rd,+Tekari,+Gaya,+Bihar+824236",
  workingHours: [
    { days: "Monday - Saturday", hours: "08:00 AM - 10:00 PM" },
    { days: "Sunday", hours: "09:00 AM - 08:00 PM" }
  ]
};

// Generated Images
export const IMAGES = {
  hero: "/src/assets/images/pharmacy_hero_banner_1783325914489.jpg",
  storefront: "/src/assets/images/pharmacy_storefront_1783325930337.jpg"
};

// Featured Categories
export const CATEGORIES = [
  "Tablets",
  "Capsules",
  "Syrups",
  "Injection",
  "Medical Equipment",
  "Protein Supplements",
  "Vitamins",
  "Skin Care",
  "Baby Products",
  "Personal Hygiene",
  "Orthopedic Support",
  "Diabetic Care"
];

// Rich Medicine Catalog (for the Medicine Search Box)
export const MEDICINES_CATALOG: Medicine[] = [
  {
    id: "med-1",
    name: "Paracetamol 650mg",
    category: "Tablets",
    price: 30,
    strength: "650mg",
    manufacturer: "Micro Labs Ltd",
    description: "Highly effective for reducing fever and relieving mild to moderate pain.",
    uses: ["Fever Reduction", "Headache Relief", "Body Pain", "Toothache"],
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: "med-2",
    name: "Amoxicillin Capsules",
    category: "Capsules",
    price: 85,
    strength: "500mg",
    manufacturer: "Abbott Healthcare",
    description: "Broad-spectrum penicillin antibiotic used to treat bacterial infections.",
    uses: ["Throat Infection", "Bronchitis", "Pneumonia", "Urinary Tract Infection"],
    prescriptionRequired: true,
    inStock: true
  },
  {
    id: "med-3",
    name: "Cough Syrup (Dextromethorphan)",
    category: "Syrups",
    price: 110,
    strength: "100ml",
    manufacturer: "Cipla Ltd",
    description: "Cough suppressant that provides fast relief from dry cough and throat irritation.",
    uses: ["Dry Cough Relief", "Throat Soothing", "Allergy Cough"],
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: "med-4",
    name: "Digital BP Monitor",
    category: "Medical Equipment",
    price: 1850,
    strength: "Standard",
    manufacturer: "Omron Healthcare",
    description: "Fully automatic upper arm blood pressure monitor with Intellisense technology for accurate readings.",
    uses: ["Systolic BP Measurement", "Diastolic BP Measurement", "Pulse Rate Tracking"],
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: "med-5",
    name: "Insulin Glargine Injection",
    category: "Injection",
    price: 680,
    strength: "100 IU/ml",
    manufacturer: "Sanofi India",
    description: "Long-acting human insulin analogue to improve glycemic control in diabetes mellitus patients.",
    uses: ["Type 1 Diabetes", "Type 2 Diabetes", "Blood Sugar Regulation"],
    prescriptionRequired: true,
    inStock: true
  },
  {
    id: "med-6",
    name: "Ensure Diabetes Care Powder",
    category: "Protein Supplements",
    price: 740,
    strength: "400g (Vanilla)",
    manufacturer: "Abbott Nutrition",
    description: "Scientifically formulated nutrition with slow-release carbs to help manage blood glucose response.",
    uses: ["Diabetes Nutritional Support", "Energy Balance", "Muscle Health"],
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: "med-7",
    name: "Vitamin C Chewable (Limcee)",
    category: "Vitamins",
    price: 25,
    strength: "500mg",
    manufacturer: "Abbott Labs",
    description: "Chewable Orange flavor Vitamin C tablet for immunity support and skin health.",
    uses: ["Immunity Boosting", "Scurvy Prevention", "Antioxidant Support"],
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: "med-8",
    name: "Glimepiride & Metformin Tablets",
    category: "Diabetic Care",
    price: 145,
    strength: "1mg/500mg",
    manufacturer: "Sun Pharma Ltd",
    description: "Oral anti-diabetic combination medication to control high blood sugar levels.",
    uses: ["Type 2 Diabetes Management", "Postprandial Glucose Control"],
    prescriptionRequired: true,
    inStock: true
  },
  {
    id: "med-9",
    name: "Crepe Bandage (Elastic)",
    category: "Orthopedic Support",
    price: 95,
    strength: "8cm x 4m",
    manufacturer: "Dynamed",
    description: "Premium cotton elastic crepe bandage for providing firm support and compression for sprains and strains.",
    uses: ["Joint Support", "Muscle Sprains", "Compression", "Varicose Veins"],
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: "med-10",
    name: "Cetirizine 10mg Tablets",
    category: "Tablets",
    price: 18,
    strength: "10mg",
    manufacturer: "Alkem Laboratories",
    description: "Non-drowsy second-generation antihistamine used to relieve allergy symptoms.",
    uses: ["Runny Nose Relief", "Watery Eyes", "Sneezing", "Skin Hives"],
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: "med-11",
    name: "Baby Moisturizing Lotion",
    category: "Baby Products",
    price: 195,
    strength: "200ml",
    manufacturer: "Johnson & Johnson",
    description: "Gentle, non-greasy lotion designed with mild ingredients for delicate baby skin.",
    uses: ["Baby Skin Moisturization", "Dry Skin Prevention", "Chafing Relief"],
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: "med-12",
    name: "Dettol Antiseptic Liquid",
    category: "Personal Hygiene",
    price: 65,
    strength: "110ml",
    manufacturer: "Reckitt Benckiser",
    description: "Proven effective antiseptic liquid that protects against infection-causing germs.",
    uses: ["First Aid Disinfection", "Wound Cleaning", "Personal Hygiene", "Household Disinfection"],
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: "med-13",
    name: "Pantoprazole Capsules (Pantocid)",
    category: "Capsules",
    price: 120,
    strength: "40mg",
    manufacturer: "Sun Pharmaceutical",
    description: "Proton pump inhibitor (PPI) that reduces the amount of acid produced in your stomach.",
    uses: ["Acid Reflux Relief", "Heartburn", "Stomach Ulcers", "GERD Treatment"],
    prescriptionRequired: true,
    inStock: true
  },
  {
    id: "med-14",
    name: "Moisturizing Cream (Physiogel)",
    category: "Skin Care",
    price: 490,
    strength: "75ml",
    manufacturer: "GSK Healthcare",
    description: "Hypoallergenic, daily moisture therapy cream to restore moisture barrier in sensitive, dry skin.",
    uses: ["Dry Skin Hydration", "Eczema-Prone Skin Care", "Barrier Restoration"],
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: "med-15",
    name: "Glucometer Accu-Chek Active",
    category: "Medical Equipment",
    price: 1250,
    strength: "Standard Kit",
    manufacturer: "Roche Diagnostics",
    description: "Simple, easy-to-use blood glucose monitoring system providing results in just 5 seconds.",
    uses: ["Blood Glucose Self-testing", "Diabetic Tracking"],
    prescriptionRequired: false,
    inStock: true
  }
];

// Rich Services List
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "serv-1",
    title: "Prescription Medicines",
    description: "We stock authentic and 100% genuine prescription drugs across all major therapeutic categories under strict storage rules.",
    icon: "Pill",
    features: ["Sourced from certified distributors", "Strict expiration check", "Stored in controlled temperature", "Free expert prescription guidance"]
  },
  {
    id: "serv-2",
    title: "General & OTC Medicines",
    description: "Daily healthcare essentials including pain relievers, cold and cough formulas, antacids, digestive health, and first aid supplies.",
    icon: "HeartPulse",
    features: ["Widest local stock", "Trusted global brands", "Safe dosage guidelines from staff", "Affordable local pricing"]
  },
  {
    id: "serv-3",
    title: "Health Supplements",
    description: "Premium multivitamins, calcium and mineral supplements, weight gainer formulas, and wellness herbs for daily strength and vigor.",
    icon: "Sparkles",
    features: ["Genuine protein supplements", "Daily immunity boosters", "Doctor-recommended vitamin brands", "Sugar-free syrup variants available"]
  },
  {
    id: "serv-4",
    title: "Baby Care Products",
    description: "Extensive safety-verified range for infants, including baby food, diapers, mild baby washes, protective powders, and skin lotions.",
    icon: "Baby",
    features: ["Hypoallergenic and pediatric-tested", "Leading trusted brands", "Infant specific nutrition supplies", "Gentle skin formulas"]
  },
  {
    id: "serv-5",
    title: "Personal Care Products",
    description: "Quality skincare, hygiene necessities, medicated soaps, handwashes, sunscreens, and specialized oral care formulations.",
    icon: "UserCheck",
    features: ["Dermatologically recommended creams", "Daily hygiene kits", "Antiseptic liquids and sprays", "Organic care lines"]
  },
  {
    id: "serv-6",
    title: "Medical Equipment & Devices",
    description: "Modern monitoring devices like digital BP machines, pulse oximeters, glucometers, nebulizers, thermometers, and vaporizers.",
    icon: "Activity",
    features: ["Standard manufacturer warranties", "Demonstrated setup assistance", "Ready to use diagnostic kits", "Affordable rates"]
  },
  {
    id: "serv-7",
    title: "Surgical Supplies",
    description: "Essential surgical accessories, syringes, infusion sets, gauze, surgical tapes, cotton rolls, and post-operative supplies.",
    icon: "Scissors",
    features: ["Sterilized medical grade", "Bulk pack discounts", "Premium surgical gloves and masks", "Hospital-approved standards"]
  },
  {
    id: "serv-8",
    title: "First Aid Products",
    description: "Ready-to-use first aid boxes, antiseptic liquids, bandages, ointments, heat sprays, ice packs, and burn remedies.",
    icon: "Briefcase",
    features: ["Custom home first aid kits", "Industrial standard supplies", "Emergency immediate relief products", "Long shelf-life materials"]
  },
  {
    id: "serv-9",
    title: "Diabetic Care",
    description: "Complete diabetic ecosystem including insulin pens, continuous monitoring strips, diabetic snacks, and sugar-regulating drugs.",
    icon: "Droplets",
    features: ["Insulin stored under strict cold-chain", "Accurate testing strips", "Sugar-free products and syrups", "Dedicated monitoring diaries"]
  },
  {
    id: "serv-10",
    title: "Healthcare Essentials",
    description: "Vaporizers, masks, orthopedic supports, hot water bags, support belts, and adult sanitary items for round-the-clock comfort.",
    icon: "ShieldAlert",
    features: ["Anatomical knee caps & belts", "High-filtration masks", "Adult diapers & underpads", "Guaranteed patient hygiene support"]
  }
];

// Timeline for About Page
export const STORE_TIMELINE = [
  { year: "1998", title: "Inception", desc: "Shanti Medical Hall was founded in Tekari by Mr. Shanti Kumar with a mission to bring genuine, affordable medicines to our community." },
  { year: "2005", title: "Store Expansion", desc: "Expanded the physical store capacity, introducing dedicated medical equipment and refrigeration for critical vaccines & insulin." },
  { year: "2012", title: "Baby & Personal Care Launch", desc: "Added an extensive wing of premium baby care, skincare, and personal hygiene products, becoming a one-stop family healthcare store." },
  { year: "2018", title: "Digital Order Integration", desc: "Launched dedicated WhatsApp ordering systems to enable remote villages near Tekari to order medicines conveniently." },
  { year: "2024", title: "Modern Renovation & Online Portal", desc: "Completely renovated with a clean professional healthcare layout, digitized inventory, and rapid delivery systems for continuous community service." }
];

// Testimonials (6 reviews)
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Sanjay Kumar",
    location: "Tekari, Gaya",
    rating: 5,
    review: "Shanti Medical Hall is our family's trusted pharmacy for 15 years. Their medicines are always 100% genuine, and the staff is incredibly helpful. Best pharmacy in Tekari!",
    date: "2 weeks ago",
    avatarLetter: "S"
  },
  {
    id: "test-2",
    name: "Priyanka Kumari",
    location: "Belhariya, Gaya",
    rating: 5,
    review: "I always buy baby care products and medicines from here. They sell everything at very fair prices compared to other medical shops. Highly recommended!",
    date: "1 month ago",
    avatarLetter: "P"
  },
  {
    id: "test-3",
    name: "Rajesh Prasad",
    location: "Bela, Gaya",
    rating: 5,
    review: "The WhatsApp ordering system is excellent. I just send a photo of my father's prescription, and they pack and prepare everything instantly. Outstanding service!",
    date: "3 days ago",
    avatarLetter: "R"
  },
  {
    id: "test-4",
    name: "Dr. Alok Nath",
    location: "Tekari, Bihar",
    rating: 5,
    review: "As a practicing physician, I highly appreciate their strict cold-chain maintenance for insulin and critical vaccines. Their ethical medicine storage is unmatched locally.",
    date: "2 months ago",
    avatarLetter: "A"
  },
  {
    id: "test-5",
    name: "Vikram Singh",
    location: "Gaya, Bihar",
    rating: 4.8,
    review: "Extremely reliable medical store. Even if a specific specialized medicine is not in stock, they proactively procure it for us within 24 hours. Reliable and professional.",
    date: "3 weeks ago",
    avatarLetter: "V"
  },
  {
    id: "test-6",
    name: "Kiran Devi",
    location: "Tekari Ward 5",
    rating: 5,
    review: "The staff here is very respectful, especially to elderly customers. They take their time to write dosage details clearly on the medicine boxes so we don't make mistakes.",
    date: "5 days ago",
    avatarLetter: "K"
  }
];

// FAQs (10 FAQs)
export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "Are all the medicines available at Shanti Medical Hall 100% genuine?",
    answer: "Yes, absolutely. We source 100% of our products and medicines exclusively from government-authorized pharmaceutical distributors and direct manufacturers. Every single item passes a rigorous batch verification and expiry date inspection.",
    category: "Medicines"
  },
  {
    id: "faq-2",
    question: "Do you require a prescription to buy medicines?",
    answer: "For general Over-the-Counter (OTC) medicines, baby items, vitamins, and healthcare equipment, no prescription is required. However, for Schedule H, antibiotic, psychiatric, or critical drugs, a valid medical doctor's prescription is strictly mandatory as per government regulations.",
    category: "Prescriptions"
  },
  {
    id: "faq-3",
    question: "How can I order medicines via WhatsApp?",
    answer: "It is incredibly simple! Just click our floating 'WhatsApp Order' button, fill out the patient details, medicine requirements, and upload an image of your doctor's prescription. Tap send, and it will immediately draft a formatted message to our official WhatsApp number. We will pack it and confirm immediately.",
    category: "Ordering"
  },
  {
    id: "faq-4",
    question: "What are the working hours of Shanti Medical Hall?",
    answer: "We are open from Monday to Saturday from 08:00 AM to 10:00 PM. On Sundays, we are open from 09:00 AM to 08:00 PM. We are always ready to assist you during these hours.",
    category: "Store"
  },
  {
    id: "faq-5",
    question: "Do you offer home delivery of medicines in Tekari?",
    answer: "Yes! We offer convenient home delivery for medicines within Tekari and surrounding local areas. Delivery is free for monthly medication lists or orders above Rs. 500. Contact us at 09835686452 to verify your location.",
    category: "Delivery"
  },
  {
    id: "faq-6",
    question: "Can you arrange specialized medicines that are not commonly available?",
    answer: "Yes, we specialize in custom procuring rare cancer drugs, neurological medicines, and critical health supplements. If you require a rare medication, just share the prescription, and we will arrange it from our central networks within 24 to 48 hours.",
    category: "Medicines"
  },
  {
    id: "faq-7",
    question: "Do you provide discounts on bulk or monthly chronic medicines?",
    answer: "Yes, we care about the affordability of chronic treatments. We provide attractive, customer-friendly discounts on complete monthly medication lists for diabetes, blood pressure, thyroid, and cardiac conditions. Please ask our billing desk for custom rates.",
    category: "Pricing"
  },
  {
    id: "faq-8",
    question: "What medical diagnostic equipment is available in your store?",
    answer: "We offer Omron digital Blood Pressure monitors, Accu-Chek and OneTouch blood sugar testing kits (glucometers) along with matching strips, clinical nebulizers, digital pulse oximeters, steam vaporizers, infrared thermometers, and basic orthopedic braces.",
    category: "Equipment"
  },
  {
    id: "faq-9",
    question: "Do you store vaccines and insulin under proper cold-chain refrigeration?",
    answer: "Yes, maintaining the cold chain is vital. We have advanced medical-grade refrigerators with 24/7 power backup to ensure that critical vaccines, hormone therapies, and insulin are kept strictly between 2°C and 8°C.",
    category: "Storage"
  },
  {
    id: "faq-10",
    question: "Do you accept digital payments like UPI, Google Pay, or PhonePe?",
    answer: "Yes, we support all major digital payments, including BHIM UPI, Google Pay, PhonePe, Paytm, QR scan, debit/credit cards, and cash. It is extremely convenient for our customers.",
    category: "Payment"
  }
];

// Gallery Items
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Storefront View",
    category: "Store Front",
    image: IMAGES.storefront,
    alt: "Shanti Medical Hall Modern Front Entrance in Tekari, Bihar",
    description: "The pristine front entrance of Shanti Medical Hall on Belhariya Road with modern signage."
  },
  {
    id: "gal-2",
    title: "Organized Medicine Racks",
    category: "Medicine Shelves",
    image: "https://picsum.photos/seed/pharmacy-shelves-1/800/600",
    alt: "Carefully organized brand tablets and capsules arranged systematically",
    description: "Our systematically arranged shelves ensuring speedy prescription packing."
  },
  {
    id: "gal-3",
    title: "Diagnostic Equipment Display",
    category: "Medical Equipment",
    image: "https://picsum.photos/seed/pharmacy-bp/800/600",
    alt: "BP Monitors, Pulse Oximeters, and Glucometers on showcase",
    description: "Advanced digital monitoring kits from trusted global manufacturers."
  },
  {
    id: "gal-4",
    title: "Cold Chain Storage",
    category: "Products",
    image: "https://picsum.photos/seed/pharmacy-fridge/800/600",
    alt: "Dedicated pharmaceutical refrigerator for vaccines and insulin",
    description: "24/7 power-backed cold-chain refrigeration for preserving critical compounds."
  },
  {
    id: "gal-5",
    title: "Baby Care Wing",
    category: "Products",
    image: "https://picsum.photos/seed/pharmacy-baby/800/600",
    alt: "Pediatric baby food, wipes, baby soaps, and nutrition kits",
    description: "A wide assortment of premium, skin-safe infant care products."
  },
  {
    id: "gal-6",
    title: "First Aid & Crepe Support",
    category: "Medical Equipment",
    image: "https://picsum.photos/seed/pharmacy-ortho/800/600",
    alt: "Orthopedic braces, bandages, hot bags, and first aid essentials",
    description: "Orthopedic splints, crepe bandages, and surgical materials in stock."
  },
  {
    id: "gal-7",
    title: "Consultation Area",
    category: "Customers",
    image: "https://picsum.photos/seed/pharmacy-counter/800/600",
    alt: "Counter where customers interact with experienced pharmacists",
    description: "Our comfortable billing and prescription guidance counter."
  },
  {
    id: "gal-8",
    title: "Vitamins and Wellness supplements",
    category: "Products",
    image: "https://picsum.photos/seed/pharmacy-vitamins/800/600",
    alt: "Proteins, mineral capsules, and daily vitamins bottles",
    description: "A dedicated section for daily fitness proteins and wellness boosters."
  }
];
