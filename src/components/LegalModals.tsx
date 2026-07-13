/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LegalModalsProps {
  isOpen: boolean;
  onClose: () => void;
  documentType: "privacy" | "terms" | "disclaimer" | null;
}

export default function LegalModals({ isOpen, onClose, documentType }: LegalModalsProps) {
  const getDocumentContent = () => {
    switch (documentType) {
      case "privacy":
        return {
          title: "Privacy Policy",
          subtitle: "How Shanti Medical Hall collects and protects your patient data",
          body: (
            <div className="space-y-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Last Updated: July 6, 2026</strong>
              </p>
              <p>
                At Shanti Medical Hall, we are deeply committed to protecting your medical privacy and personal details. This Privacy Policy documents our rules regarding data collected on our website, specifically via our digital catalog or WhatsApp prescription forms.
              </p>
              <h5 className="font-bold text-slate-900 dark:text-white mt-4 uppercase">1. Information We Collect</h5>
              <p>
                When you use our WhatsApp order sheet or contact form, we collect the patient's name, WhatsApp phone number, physical address, medicine requests, and images of doctor prescriptions.
              </p>
              <h5 className="font-bold text-slate-900 dark:text-white mt-4 uppercase">2. Medical Prescription Handling</h5>
              <p>
                Any doctor's prescription files or images uploaded are used strictly by our registered pharmacist to verify medication dosages, ingredients, and authorization rules. We do NOT store, sell, or index medical prescriptions on external databases.
              </p>
              <h5 className="font-bold text-slate-900 dark:text-white mt-4 uppercase">3. Third-Party Sharing</h5>
              <p>
                Shanti Medical Hall does not sell or distribute personal phone numbers or health records to marketing networks. Information is processed strictly through official WhatsApp APIs to finalize packing and local home delivery.
              </p>
              <h5 className="font-bold text-slate-900 dark:text-white mt-4 uppercase">4. Your Consent</h5>
              <p>
                By sharing prescription details, you explicitly authorize our certified pharmacists to review and dispense medications as requested.
              </p>
            </div>
          )
        };
      case "terms":
        return {
          title: "Terms & Conditions",
          subtitle: "Rules of service and prescription verification rules",
          body: (
            <div className="space-y-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Last Updated: July 6, 2026</strong>
              </p>
              <p>
                Welcome to Shanti Medical Hall. By accessing our catalog, sending inquiry forms, or using our WhatsApp order desks, you agree to comply with the terms listed below.
              </p>
              <h5 className="font-bold text-slate-900 dark:text-white mt-4 uppercase">1. Prescription Requirements</h5>
              <p>
                Certain pharmaceutical components, classified as Schedule H, antibiotics, or psychiatric drugs under Indian FDA laws, cannot be packed or sold without a valid medical practitioner's prescription. Shanti Medical Hall reserves the right to cancel any order if a valid physical or digital prescription is not supplied when requested.
              </p>
              <h5 className="font-bold text-slate-900 dark:text-white mt-4 uppercase">2. Product Catalog Information</h5>
              <p>
                While we strive to keep our fast-catalog prices and stock tags perfectly updated, market pricing, batch variations, and manufacturer pricing are subject to immediate fluctuations. Final prices will be double-verified and communicated on your WhatsApp invoice before checkout.
              </p>
              <h5 className="font-bold text-slate-900 dark:text-white mt-4 uppercase">3. Local Home Delivery Limits</h5>
              <p>
                Home dispatch of medical supplies is limited strictly to local sectors around Tekari, Gaya, and adjacent rural wards. Delivery timelines depend on product availability and weather coordinates.
              </p>
              <h5 className="font-bold text-slate-900 dark:text-white mt-4 uppercase">4. Liability Limitation</h5>
              <p>
                Shanti Medical Hall is a licensed medicine retailer. We are not liable for any clinical allergies, adverse side effects, or drug interactions arising from the intake of purchased medications. Always consume medicines strictly under a doctor's guidance.
              </p>
            </div>
          )
        };
      case "disclaimer":
        return {
          title: "Medical Disclaimer",
          subtitle: "Essential educational and clinical boundaries of Shanti Hall",
          body: (
            <div className="space-y-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                <strong>Last Updated: July 6, 2026</strong>
              </p>
              <p>
                <strong>IMPORTANT NOTICE:</strong> Shanti Medical Hall is a retail pharmacy. We do not provide professional medical diagnosis, surgery recommendations, or treatment plans.
              </p>
              <h5 className="font-bold text-slate-900 dark:text-white mt-4 uppercase">1. For Informational Purposes Only</h5>
              <p>
                All materials, catalog details, uses lists, or descriptions published on this website are for general informational reference only. They do NOT represent a clinical diagnosis or medical recommendation.
              </p>
              <h5 className="font-bold text-slate-900 dark:text-white mt-4 uppercase">2. Consult Your Physician</h5>
              <p>
                Never disregard professional medical advice, nor delay in seeking it, because of something you have read on this site. If you have any acute conditions, allergies, or chronic pain symptoms, seek direct counsel from a registered physician immediately.
              </p>
              <h5 className="font-bold text-slate-900 dark:text-white mt-4 uppercase">3. Emergency Care</h5>
              <p>
                This website is a retail store catalog and inquiry platform. In case of any acute medical crisis or poison emergency, immediately contact your nearest hospital emergency ward or call central Indian government emergency services.
              </p>
            </div>
          )
        };
      default:
        return null;
    }
  };

  const doc = getDocumentContent();

  return (
    <AnimatePresence>
      {isOpen && doc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            id="legal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Legal Document Modal */}
          <motion.div
            id="legal-modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl z-10 border border-slate-100 dark:border-slate-800 flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {doc.subtitle}
                </p>
              </div>
              <button
                id="close-legal-btn"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 overflow-y-auto">
              {doc.body}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button
                id="close-legal-footer-btn"
                onClick={onClose}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-bold rounded-xl transition-all"
              >
                I Understand & Accept
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
