/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Medicine {
  id: string;
  name: string;
  category: string;
  price: number;
  strength?: string;
  manufacturer?: string;
  description: string;
  uses: string[];
  prescriptionRequired: boolean;
  image?: string;
  inStock: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  avatarLetter: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description?: string;
}

export interface WhatsAppOrderInput {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: boolean;
  prescriptionImage?: string; // Base64 or placeholder
  message: string;
  preferredDeliveryTime: string;
}

export interface InquiryInput {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
