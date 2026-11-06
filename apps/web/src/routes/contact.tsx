import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@pmi-south-asia/backend/convex/_generated/api";
import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery } from "convex/react";
import {
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  component: ContactComponent,
});

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const subjectOptions = [
  "Certification Inquiry",
  "Membership Questions",
  "Event Registration",
  "Volunteering",
  "Partnership",
  "Other",
];

function ContactComponent() {
  const certifications = useQuery(api.certifications.listActive);
  const submitContact = useMutation(api.contactResponses.create);

  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [certSearchQuery, setCertSearchQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "Certification Inquiry",
      message: "",
    },
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setCertSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isDropdownOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isDropdownOpen]);

  const toggleCert = (cert: string) => {
    setSelectedCerts((prev) =>
      prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]
    );
  };

  const removeCert = (cert: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedCerts((prev) => prev.filter((c) => c !== cert));
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await submitContact({
        ...data,
        phone: data.phone || undefined,
        selectedCerts,
      });
      setSubmitted(true);
      reset();
      setSelectedCerts([]);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Failed to submit contact form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableCertifications = certifications ?? [];

  const filteredCertifications = availableCertifications.filter((cert) =>
    cert.name.toLowerCase().includes(certSearchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-slate-50 font-sans">
      <section className="relative overflow-hidden bg-[#1e0a45] pt-24 pb-48 text-white lg:pt-32 lg:pb-64">
        <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] translate-x-1/3 -translate-y-1/3 transform rounded-full bg-gradient-to-b from-[#5621b4] to-transparent opacity-20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/3 transform rounded-full bg-gradient-to-t from-[#0075c9] to-transparent opacity-10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 font-bold text-cyan-300 text-xs uppercase tracking-widest backdrop-blur-md">
            24/7 Support
          </span>
          <h1 className="mb-8 font-extrabold text-5xl leading-tight tracking-tight md:text-7xl">
            Let's Start a Conversation
          </h1>
          <p className="mx-auto max-w-2xl font-light text-gray-300 text-xl leading-relaxed md:text-2xl">
            Have questions about certifications, membership, or events? Our team
            is ready to help you navigate your project management journey.
          </p>
        </div>
      </section>

      <div className="relative z-20 mx-auto -mt-32 mb-24 max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[800px] flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl lg:flex-row">
          <div className="relative flex flex-col justify-between overflow-hidden bg-[#13072e] p-10 text-white md:p-16 lg:w-2/5">
            <div className="absolute top-10 right-10 h-32 w-32 rounded-full border border-white/10 opacity-50" />
            <div className="absolute bottom-10 left-10 h-20 w-20 rounded-full bg-pmi-primary/20 blur-xl" />

            <div className="relative z-10">
              <h3 className="mb-2 font-bold text-3xl">Contact Information</h3>
              <p className="mb-12 text-gray-400">
                Find us through any of these channels.
              </p>

              <div className="space-y-8">
                <div className="group flex items-start gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-[#13072e]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-gray-400 text-sm uppercase tracking-wider">
                      Call Us
                    </p>
                    <a
                      className="font-semibold text-lg hover:underline"
                      href="tel:+918065347982"
                    >
                      +91 8065347982
                    </a>
                    <p className="text-gray-500 text-sm">
                      Mon-Fri, 9am - 5pm IST
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-purple-400 transition-all duration-300 group-hover:bg-purple-400 group-hover:text-[#13072e]">
                    <Mail size={22} />
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-gray-400 text-sm uppercase tracking-wider">
                      Email Us
                    </p>
                    <a
                      className="mb-1 block font-semibold text-lg hover:underline"
                      href="mailto:sales@pmiindia.com"
                    >
                      sales@pmiindia.com
                    </a>
                    <p className="text-gray-500 text-sm">
                      Expect a reply within 24 hours
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-orange-400 transition-all duration-300 group-hover:bg-orange-400 group-hover:text-[#13072e]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="mb-1 font-bold text-gray-400 text-sm uppercase tracking-wider">
                      Visit HQ
                    </p>
                    <p className="font-semibold text-lg">
                      Oberoi Garden City, Off Western Express Highway, Goregaon
                      East, Mumbai, 400063, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-16">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3 text-cyan-300">
                  <MessageSquare size={20} />
                  <span className="font-bold">Live Chat Support</span>
                </div>
                <p className="mb-4 text-gray-400 text-sm">
                  Need immediate assistance? Our volunteers are available to
                  chat during business hours.
                </p>
                <button
                  className="border-cyan-400 border-b pb-1 font-bold text-sm text-white transition-colors hover:text-cyan-400"
                  type="button"
                >
                  Start Live Chat &rarr;
                </button>
              </div>
            </div>
          </div>

          <div className="relative bg-white p-10 md:p-16 lg:w-3/5">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-50">
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="mb-4 font-bold text-3xl text-gray-900">
                  Thank You!
                </h3>
                <p className="max-w-md text-gray-600 text-lg">
                  Your message has been received. A dedicated member of our team
                  will review your inquiry and get back to you shortly.
                </p>
                <button
                  className="mt-8 font-bold text-pmi-primary hover:underline"
                  onClick={() => setSubmitted(false)}
                  type="button"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                className="flex h-full flex-col"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h3 className="mb-8 font-bold text-2xl text-gray-900">
                  Send us a message
                </h3>

                <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="group">
                    <label className="mb-2 block font-bold text-gray-500 text-xs uppercase tracking-wider transition-colors group-focus-within:text-pmi-primary">
                      First Name
                    </label>
                    <input
                      className={`w-full border-b-2 bg-transparent py-3 font-medium text-gray-900 placeholder-gray-300 transition-colors focus:border-pmi-primary focus:outline-none ${errors.firstName ? "border-red-500" : "border-gray-200"}`}
                      placeholder="Jane"
                      type="text"
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className="group">
                    <label className="mb-2 block font-bold text-gray-500 text-xs uppercase tracking-wider transition-colors group-focus-within:text-pmi-primary">
                      Last Name
                    </label>
                    <input
                      className={`w-full border-b-2 bg-transparent py-3 font-medium text-gray-900 placeholder-gray-300 transition-colors focus:border-pmi-primary focus:outline-none ${errors.lastName ? "border-red-500" : "border-gray-200"}`}
                      placeholder="Doe"
                      type="text"
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="group">
                    <label className="mb-2 block font-bold text-gray-500 text-xs uppercase tracking-wider transition-colors group-focus-within:text-pmi-primary">
                      Email Address
                    </label>
                    <input
                      className={`w-full border-b-2 bg-transparent py-3 font-medium text-gray-900 placeholder-gray-300 transition-colors focus:border-pmi-primary focus:outline-none ${errors.email ? "border-red-500" : "border-gray-200"}`}
                      placeholder="jane@example.com"
                      type="email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="group">
                    <label className="mb-2 block font-bold text-gray-500 text-xs uppercase tracking-wider transition-colors group-focus-within:text-pmi-primary">
                      Phone (Optional)
                    </label>
                    <input
                      className="w-full border-gray-200 border-b-2 bg-transparent py-3 font-medium text-gray-900 placeholder-gray-300 transition-colors focus:border-pmi-primary focus:outline-none"
                      placeholder="+91 98765 43210"
                      type="tel"
                      {...register("phone")}
                    />
                  </div>
                </div>

                <div className="group mb-8">
                  <label className="mb-2 block font-bold text-gray-500 text-xs uppercase tracking-wider transition-colors group-focus-within:text-pmi-primary">
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      className="w-full cursor-pointer appearance-none border-gray-200 border-b-2 bg-transparent py-3 font-medium text-gray-900 transition-colors focus:border-pmi-primary focus:outline-none"
                      {...register("subject")}
                    >
                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 text-gray-400"
                      size={16}
                    />
                  </div>
                </div>

                <div className="relative mb-8" ref={dropdownRef}>
                  <label className="mb-2 block font-bold text-gray-500 text-xs uppercase tracking-wider">
                    Interested Certifications
                  </label>
                  <button
                    className={`min-h-[56px] w-full cursor-pointer rounded-xl border-2 p-3 transition-all duration-200 ${isDropdownOpen ? "border-pmi-primary bg-white ring-4 ring-pmi-primary/10" : "border-gray-100 bg-gray-50 hover:border-gray-300"}`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    type="button"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      {selectedCerts.length === 0 ? (
                        <span className="py-1 text-gray-400 text-sm">
                          Select certifications...
                        </span>
                      ) : (
                        selectedCerts.map((cert) => (
                          <span
                            className="inline-flex items-center gap-1 rounded-lg bg-purple-100 px-3 py-1.5 font-bold text-pmi-primary text-sm"
                            key={cert}
                          >
                            {cert.split("(")[0].trim()}
                            <button
                              className="rounded-full bg-white/50 p-0.5 transition-colors hover:text-red-500"
                              onClick={(e) => removeCert(cert, e)}
                              type="button"
                            >
                              <X size={12} />
                            </button>
                          </span>
                        ))
                      )}
                      <div className="ml-auto text-gray-400">
                        <ChevronDown
                          className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-pmi-primary" : ""}`}
                          size={18}
                        />
                      </div>
                    </div>
                  </button>

                  {isDropdownOpen && (
                    <div className="absolute z-50 mt-2 max-h-72 w-full overflow-y-auto rounded-xl border border-gray-100 bg-white shadow-2xl">
                      <div className="sticky top-0 border-gray-100 border-b bg-white p-3">
                        <input
                          ref={searchInputRef}
                          type="text"
                          placeholder="Search certifications..."
                          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-pmi-primary focus:outline-none"
                          value={certSearchQuery}
                          onChange={(e) => setCertSearchQuery(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      {filteredCertifications.length === 0 ? (
                        <div className="px-5 py-4 text-center text-gray-500 text-sm">
                          No certifications found
                        </div>
                      ) : (
                        filteredCertifications.map((cert) => {
                          const isSelected = selectedCerts.includes(cert.name);
                          return (
                            <button
                              className={`flex w-full cursor-pointer items-center gap-3 border-gray-50 border-b px-5 py-3.5 text-left transition-all duration-150 last:border-0 ${isSelected ? "bg-purple-50" : "hover:bg-gray-50"}`}
                              key={cert._id}
                              onClick={() => toggleCert(cert.name)}
                              type="button"
                            >
                              <div
                                className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-colors ${isSelected ? "border-pmi-primary bg-pmi-primary" : "border-gray-300 bg-white"}`}
                              >
                                {isSelected && (
                                  <CheckCircle2
                                    className="text-white"
                                    size={14}
                                  />
                                )}
                              </div>
                              <span
                                className={`text-sm ${isSelected ? "font-bold text-pmi-deep" : "text-gray-600"}`}
                              >
                                {cert.name}
                              </span>
                            </button>
                          );
                        })
                      )}
                    </div>
                  )}
                </div>

                <div className="group mb-10 flex-grow">
                  <label className="mb-2 block font-bold text-gray-500 text-xs uppercase tracking-wider transition-colors group-focus-within:text-pmi-primary">
                    Message
                  </label>
                  <textarea
                    className={`h-24 w-full resize-none border-b-2 bg-transparent py-3 font-medium text-gray-900 placeholder-gray-300 transition-colors focus:border-pmi-primary focus:outline-none ${errors.message ? "border-red-500" : "border-gray-200"}`}
                    placeholder="Tell us more about how we can help..."
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  className="group mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#5621b4] py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#431890] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit
                      <Send
                        className="transition-transform group-hover:translate-x-1"
                        size={18}
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
