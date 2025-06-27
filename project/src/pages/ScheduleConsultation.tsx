import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  DollarSign,
  Target,
  CheckCircle,
  AlertCircle,  
  ArrowLeft,
  Send,
  Building,
} from "lucide-react";

const ScheduleConsultation = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    consultationType: "",
    message: "",
    hearAboutUs: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const consultationTypes = [
    "Investment Planning",
    "Portfolio Review",
    "Course Selection",
    "General Consultation",
  ];

  const hearAboutUsOptions = [
    "Google Search",
    "Social Media",
    "Friend/Family Referral",
    "Advertisement",
    "Website",
    "Other",
  ];

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      if (!formRef.current) throw new Error("Form ref not found");

      const result = await emailjs.sendForm(
        "service_2zi9vgq", // your EmailJS service ID
        "template_f8n6646", // your EmailJS template ID
        formRef.current,
        "8mUrLObeDI3-3nhyd" // your EmailJS public key (user ID)
      );

      console.log("Email sent:", result.text);
      setSubmitStatus("success");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        consultationType: "",
        message: "",
        hearAboutUs: "",
      });
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
          >
            <Calendar size={16} className="mr-2" />
            Free Consultation
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-accent-900 mb-6">
            Schedule Your
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {" "}
              Free Consultation
            </span>
          </h1>

          <p className="text-xl text-accent-600 max-w-3xl mx-auto mb-8">
            Take the first step towards your financial success. Book a
            complimentary consultation with our expert investment advisors and
            discover personalized strategies for your goals.
          </p>
        </motion.div>

        {/* Success / Error Message */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl flex items-start"
          >
            <CheckCircle
              size={24}
              className="text-green-600 mr-4 flex-shrink-0 mt-1"
            />
            <div>
              <h3 className="text-green-800 font-semibold mb-2">
                Consultation Scheduled Successfully!
              </h3>
              <p className="text-green-700">
                Thank you for scheduling your free consultation. Our team will
                contact you within 24 hours to confirm your appointment and
                provide meeting details.
              </p>
            </div>
          </motion.div>
        )}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl flex items-start"
          >
            <AlertCircle
              size={24}
              className="text-red-600 mr-4 flex-shrink-0 mt-1"
            />
            <div>
              <h3 className="text-red-800 font-semibold mb-2">
                Failed to Schedule Consultation
              </h3>
              <p className="text-red-700">
                Something went wrong while sending your request. Please try
                again later.
              </p>
            </div>
          </motion.div>
        )}

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
        >
          <div className="flex items-center mb-8">
            <div className="p-3 bg-primary-100 rounded-full mr-4">
              <Calendar size={24} className="text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-accent-900">
                Book Your Appointment
              </h2>
              <p className="text-accent-600">
                Fill out the form below and we'll get back to you shortly
              </p>
            </div>
          </div>
  {/* Success Message */}
  {submitStatus === 'success' && (
    <div className="mb-6 p-4 bg-green-100 text-green-800 rounded">
      Consultation Scheduled Successfully! We will contact you shortly.
    </div>
  )}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8" noValidate>
            {/* Hidden Inputs required by EmailJS template */}
            <input type="hidden" name="to_name" value="Bibek" />
            <input
              type="hidden"
              name="from_name"
              value={`${formData.firstName} ${formData.lastName}`}
            />

            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-accent-900 mb-4 flex items-center">
                <User size={20} className="text-primary-600 mr-2" />
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-accent-700 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-accent-700 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your last name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-accent-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-accent-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400"
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="+977-9841234567"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div>
              <h3 className="text-lg font-semibold text-accent-900 mb-4 flex items-center">
                <Clock size={20} className="text-primary-600 mr-2" />
                Appointment Details
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-sm font-medium text-accent-700 mb-2"
                  >
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-medium text-accent-700 mb-2"
                  >
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="consultationType"
                    className="block text-sm font-medium text-accent-700 mb-2"
                  >
                    Consultation Type *
                  </label>
                  <div className="relative">
                  <Building
                        size={18}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-400 z-10"
                      />
                      <select
                        id="consultationType"
                        name="consultationType"
                        value={formData.consultationType}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors appearance-none bg-white"
                      >
                        <option value="">Select consultation type</option>
                        {consultationTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-lg font-semibold text-accent-900 mb-4 flex items-center">
                <MessageSquare size={20} className="text-primary-600 mr-2" />
                Additional Information
              </h3>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-accent-700 mb-2"
                  >
                    Additional Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical"
                    placeholder="Any specific questions or topics you'd like to discuss during the consultation?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hearAboutUs"
                    className="block text-sm font-medium text-accent-700 mb-2"
                  >
                    How did you hear about us?
                  </label>
                  <select
                    id="hearAboutUs"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select an option</option>
                    {hearAboutUsOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-lg"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    <span>Scheduling Consultation...</span>
                  </>
                ) : (
                  <>
                    <span>Schedule Free Consultation</span>
                    <Send size={20} className="ml-2" />
                  </>
                )}
              </motion.button>

              <p className="text-sm text-accent-500 text-center mt-4">
                By submitting this form, you agree to our privacy policy and
                terms of service. We'll never share your information with third
                parties.
              </p>
            </div>
          </form>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <Link
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleConsultation;