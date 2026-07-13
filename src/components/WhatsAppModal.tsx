/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { BUSINESS_INFO } from "../data";
import { WhatsAppOrderInput } from "../types";
import { X, Send, Phone, ClipboardCheck, Upload, FileText, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export default function WhatsAppModal({ isOpen, onClose, prefilledMedicine }: WhatsAppModalProps) {
  const [form, setForm] = useState<WhatsAppOrderInput>({
    customerName: "",
    mobileNumber: "",
    email: "",
    address: "",
    medicineName: prefilledMedicine || "",
    hasPrescription: false,
    message: "",
    preferredDeliveryTime: "Morning (08:00 AM - 12:00 PM)"
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefilledMedicine) {
      setForm((prev) => ({ ...prev, medicineName: prefilledMedicine }));
    }
  }, [prefilledMedicine]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, hasPrescription: e.target.checked }));
  };

  // Drag and drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setPrescriptionFile(e.dataTransfer.files[0]);
      setForm((prev) => ({ ...prev, hasPrescription: true }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionFile(e.target.files[0]);
      setForm((prev) => ({ ...prev, hasPrescription: true }));
    }
  };

  const removeFile = () => {
    setPrescriptionFile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Compile formatted WhatsApp message
    const lineBreak = "%0A";
    const space = "%20";

    const rxStatus = form.hasPrescription
      ? `✅ Yes (Prescription Uploaded/Ready: ${prescriptionFile ? prescriptionFile.name : "Physical Copy Handheld"})`
      : "❌ No (Over-The-Counter Medicine)";

    const formattedMessage = [
      `*💊 SHANTI MEDICAL HALL - NEW MEDICINE ORDER*`,
      `---------------------------------------`,
      `*👤 Customer Name:* ${form.customerName}`,
      `*📞 Phone Number:* ${form.mobileNumber}`,
      `*✉️ Email:* ${form.email || "Not Provided"}`,
      `*📍 Address:* ${form.address}`,
      `*📦 Medicine Required:* ${form.medicineName}`,
      `*📄 Rx Prescription:* ${rxStatus}`,
      `*🕒 Delivery Slot:* ${form.preferredDeliveryTime}`,
      `*💬 Message / Notes:* ${form.message || "None"}`,
      `---------------------------------------`,
      `Please review my order and confirm pricing and delivery dispatch. Thank you!`
    ].join(lineBreak);

    // Generate WhatsApp link
    // Standard URL text encoding
    const encodedText = formattedMessage.replace(/ /g, space);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedText}`;

    // Show visual confirmation then redirect
    setIsSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            id="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Form Container */}
          <motion.div
            id="whatsapp-form-modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 dark:border-slate-800"
          >
            {isSuccess ? (
              <div className="p-12 text-center flex flex-col items-center justify-center h-[550px]">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mb-6 pulse-ring-effect">
                  <Check size={36} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Preparing Your Order!
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm">
                  We are formatting your order details. Opening WhatsApp now to secure your medicines...
                </p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="bg-gradient-to-r from-teal-700 to-med-blue-700 p-5 text-white flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <ClipboardCheck size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Fast WhatsApp Medicine Order</h3>
                      <p className="text-teal-100 text-xs">Fill details & send straight to our pharmacist desk</p>
                    </div>
                  </div>
                  <button
                    id="close-modal-btn"
                    onClick={onClose}
                    className="p-1.5 rounded-full hover:bg-white/15 transition-colors"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Body Form */}
                <form id="whatsapp-order-form" onSubmit={handleSubmit} className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="customerName" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Patient / Customer Name *
                      </label>
                      <input
                        id="customerName"
                        type="text"
                        name="customerName"
                        required
                        value={form.customerName}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal text-sm transition-all"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label htmlFor="mobileNumber" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Mobile Number (WhatsApp) *
                      </label>
                      <input
                        id="mobileNumber"
                        type="tel"
                        name="mobileNumber"
                        required
                        value={form.mobileNumber}
                        onChange={handleChange}
                        placeholder="Enter 10-digit mobile number"
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal text-sm transition-all"
                      />
                    </div>

                    {/* Preferred Delivery Time */}
                    <div>
                      <label htmlFor="preferredDeliveryTime" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                        Preferred Delivery Time
                      </label>
                      <select
                        id="preferredDeliveryTime"
                        name="preferredDeliveryTime"
                        value={form.preferredDeliveryTime}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal text-sm transition-all"
                      >
                        <option>Morning (08:00 AM - 12:00 PM)</option>
                        <option>Afternoon (12:00 PM - 04:00 PM)</option>
                        <option>Evening (04:00 PM - 08:00 PM)</option>
                        <option>Night (08:00 PM - 10:00 PM)</option>
                        <option>Urgent Dispatch (As soon as possible)</option>
                      </select>
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div>
                    <label htmlFor="address" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Delivery Address in Tekari/Gaya *
                    </label>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      required
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Street name, ward, village/colony, Tekari"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal text-sm transition-all"
                    />
                  </div>

                  {/* Medicine Name Required */}
                  <div>
                    <label htmlFor="medicineName" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Required Medicines (Names & Quantities) *
                    </label>
                    <textarea
                      id="medicineName"
                      name="medicineName"
                      required
                      rows={3}
                      value={form.medicineName}
                      onChange={handleChange}
                      placeholder="Example:&#10;1. Paracetamol 650mg - 2 Strips&#10;2. Cough Syrup Dextromethorphan - 1 Bottle"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal text-sm transition-all font-mono"
                    />
                  </div>

                  {/* Prescription Section */}
                  <div className="p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <input
                        type="checkbox"
                        id="hasPrescription"
                        name="hasPrescription"
                        checked={form.hasPrescription}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-accent-teal focus:ring-accent-teal border-slate-300 rounded"
                      />
                      <label htmlFor="hasPrescription" className="text-sm font-semibold text-slate-700 dark:text-slate-300 cursor-pointer select-none">
                        I have a Doctor's Prescription
                      </label>
                    </div>

                    {form.hasPrescription && (
                      <div
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-lg p-5 text-center transition-all ${
                          dragActive
                            ? "border-accent-teal bg-teal-50/50 dark:bg-teal-950/10"
                            : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                        }`}
                      >
                        {prescriptionFile ? (
                          <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-3 py-2.5 rounded-lg max-w-md mx-auto">
                            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 text-xs font-medium">
                              <FileText size={18} className="text-accent-teal" />
                              <span className="truncate max-w-[200px]">{prescriptionFile.name}</span>
                              <span className="text-slate-400 font-mono">({(prescriptionFile.size / 1024).toFixed(1)} KB)</span>
                            </div>
                            <button
                              type="button"
                              onClick={removeFile}
                              className="text-red-500 hover:text-red-700 p-1"
                              aria-label="Remove file"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ) : (
                          <div>
                            <Upload className="mx-auto text-slate-400 dark:text-slate-600 mb-2" size={32} />
                            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                              Drag & Drop prescription here or{" "}
                              <label className="text-accent-teal hover:underline cursor-pointer">
                                browse files
                                <input
                                  type="file"
                                  accept="image/*,.pdf"
                                  onChange={handleFileChange}
                                  className="hidden"
                                />
                              </label>
                            </p>
                            <p className="text-[10px] text-slate-400 mt-1">Supports PNG, JPG, JPEG, or PDF (Max 5MB)</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Message/Notes */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={2}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Add specific details like: Call me before delivery, ring the bell twice, or specific brand requests."
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-slate-100 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal text-sm transition-all"
                    />
                  </div>

                  {/* Form Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row gap-3">
                    <button
                      id="submit-whatsapp-order-btn"
                      type="submit"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-md shadow-emerald-600/10 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Send to WhatsApp Desk
                    </button>
                    <a
                      id="call-now-order-btn"
                      href={BUSINESS_INFO.phoneUrl}
                      className="sm:px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-center"
                    >
                      <Phone size={18} />
                      Call Shanti Hall
                    </a>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
