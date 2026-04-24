// DESIGN: Carbon Blueprint — luxury product configurator-style lead form
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Check, Home, Building2, UserCheck, Send } from "lucide-react";
import { US_STATES } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

type UserType = "homeowner" | "developer" | "agent" | "";

interface FormData {
  userType: UserType;
  bedrooms: string;
  bathrooms: string;
  state: string;
  hasAgent: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  budget: string;
  timeline: string;
  landOwned: string;
  message: string;
}

const steps = [
  { id: 1, label: "I Am A..." },
  { id: 2, label: "Home Details" },
  { id: 3, label: "Your Info" },
  { id: 4, label: "Submit" },
];

export default function ConfiguratorSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    userType: "",
    bedrooms: "",
    bathrooms: "",
    state: "",
    hasAgent: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    landOwned: "",
    message: "",
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.userType !== "";
      case 2: return formData.bedrooms !== "" && formData.bathrooms !== "" && formData.state !== "";
      case 3: return formData.firstName !== "" && formData.email !== "" && formData.phone !== "";
      default: return true;
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    toast.success("Your request has been submitted! Our team will connect you with the perfect modular builder.");
  };

  const userTypes = [
    { value: "homeowner", label: "Homeowner / Individual", desc: "Building on my own land", icon: Home },
    { value: "developer", label: "Developer", desc: "Buying 5+ units", icon: Building2 },
    { value: "agent", label: "Real Estate Agent", desc: "Searching for my client", icon: UserCheck },
  ];

  return (
    <section id="configurator" className="py-24 section-darker relative">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="font-mono text-sm text-primary tracking-wider uppercase">Configure Your Home</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
              Find Your Perfect <span className="text-gradient-cyan">Match</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tell us what you're looking for and we'll connect you with the ideal modular builder for your project.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-10 px-4">
              {steps.map((step, i) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                        currentStep > step.id
                          ? "bg-primary text-primary-foreground"
                          : currentStep === step.id
                          ? "bg-primary text-primary-foreground glow-cyan"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.id ? <Check size={16} /> : step.id}
                    </div>
                    <span className="text-xs text-muted-foreground mt-2 hidden sm:block">{step.label}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-12 sm:w-24 h-0.5 mx-2 transition-all ${
                      currentStep > step.id ? "bg-primary" : "bg-border"
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Form Card */}
            <div className="glass-card rounded-xl p-8 sm:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Check size={40} className="text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">Request Submitted!</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Our team at Modular Finder will review your requirements and connect you with the best modular builders
                      that match your criteria. Expect to hear from us within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step 1: User Type */}
                    {currentStep === 1 && (
                      <div>
                        <h3 className="font-display text-xl font-bold mb-6">What best describes you?</h3>
                        <div className="grid gap-4">
                          {userTypes.map((type) => (
                            <button
                              key={type.value}
                              onClick={() => updateField("userType", type.value)}
                              className={`flex items-center gap-4 p-5 rounded-lg border transition-all text-left ${
                                formData.userType === type.value
                                  ? "border-primary bg-primary/5 glow-cyan"
                                  : "border-border hover:border-primary/30 bg-secondary/30"
                              }`}
                            >
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                formData.userType === type.value ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                              }`}>
                                <type.icon size={22} />
                              </div>
                              <div>
                                <div className="font-semibold text-foreground">{type.label}</div>
                                <div className="text-sm text-muted-foreground">{type.desc}</div>
                              </div>
                              {formData.userType === type.value && (
                                <Check size={20} className="text-primary ml-auto" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Home Details */}
                    {currentStep === 2 && (
                      <div>
                        <h3 className="font-display text-xl font-bold mb-6">Tell us about your ideal home</h3>
                        <div className="grid gap-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-muted-foreground mb-2 block">Bedrooms</label>
                              <div className="flex gap-2">
                                {["1", "2", "3", "4", "5+"].map((n) => (
                                  <button
                                    key={n}
                                    onClick={() => updateField("bedrooms", n)}
                                    className={`flex-1 py-3 rounded-md text-sm font-semibold transition-all ${
                                      formData.bedrooms === n
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-muted-foreground hover:text-foreground"
                                    }`}
                                  >
                                    {n}
                                  </button>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground mb-2 block">Bathrooms</label>
                              <div className="flex gap-2">
                                {["1", "2", "3", "4+"].map((n) => (
                                  <button
                                    key={n}
                                    onClick={() => updateField("bathrooms", n)}
                                    className={`flex-1 py-3 rounded-md text-sm font-semibold transition-all ${
                                      formData.bathrooms === n
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-muted-foreground hover:text-foreground"
                                    }`}
                                  >
                                    {n}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">State</label>
                            <select
                              value={formData.state}
                              onChange={(e) => updateField("state", e.target.value)}
                              className="w-full py-3 px-4 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            >
                              <option value="">Select your state</option>
                              {US_STATES.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">Do you have a real estate agent?</label>
                            <div className="flex gap-3">
                              {["Yes", "No"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => updateField("hasAgent", opt)}
                                  className={`flex-1 py-3 rounded-md text-sm font-semibold transition-all ${
                                    formData.hasAgent === opt
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-secondary text-muted-foreground hover:text-foreground"
                                  }`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">Do you own land?</label>
                            <div className="flex gap-3">
                              {["Yes", "No", "Looking"].map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() => updateField("landOwned", opt)}
                                  className={`flex-1 py-3 rounded-md text-sm font-semibold transition-all ${
                                    formData.landOwned === opt
                                      ? "bg-primary text-primary-foreground"
                                      : "bg-secondary text-muted-foreground hover:text-foreground"
                                  }`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">Budget Range</label>
                            <select
                              value={formData.budget}
                              onChange={(e) => updateField("budget", e.target.value)}
                              className="w-full py-3 px-4 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            >
                              <option value="">Select budget range</option>
                              <option value="under-100k">Under $100,000</option>
                              <option value="100k-200k">$100,000 - $200,000</option>
                              <option value="200k-350k">$200,000 - $350,000</option>
                              <option value="350k-500k">$350,000 - $500,000</option>
                              <option value="500k-plus">$500,000+</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Contact Info */}
                    {currentStep === 3 && (
                      <div>
                        <h3 className="font-display text-xl font-bold mb-6">How can we reach you?</h3>
                        <div className="grid gap-5">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-muted-foreground mb-2 block">First Name *</label>
                              <input
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => updateField("firstName", e.target.value)}
                                className="w-full py-3 px-4 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="John"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium text-muted-foreground mb-2 block">Last Name</label>
                              <input
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => updateField("lastName", e.target.value)}
                                className="w-full py-3 px-4 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="Doe"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">Email *</label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => updateField("email", e.target.value)}
                              className="w-full py-3 px-4 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                              placeholder="john@example.com"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">Phone *</label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => updateField("phone", e.target.value)}
                              className="w-full py-3 px-4 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                              placeholder="(555) 123-4567"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">Timeline</label>
                            <select
                              value={formData.timeline}
                              onChange={(e) => updateField("timeline", e.target.value)}
                              className="w-full py-3 px-4 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            >
                              <option value="">When are you looking to build?</option>
                              <option value="asap">As soon as possible</option>
                              <option value="3-months">Within 3 months</option>
                              <option value="6-months">Within 6 months</option>
                              <option value="12-months">Within 12 months</option>
                              <option value="exploring">Just exploring</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-muted-foreground mb-2 block">Additional Notes</label>
                            <textarea
                              value={formData.message}
                              onChange={(e) => updateField("message", e.target.value)}
                              rows={3}
                              className="w-full py-3 px-4 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                              placeholder="Tell us more about your project..."
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Review & Submit */}
                    {currentStep === 4 && (
                      <div>
                        <h3 className="font-display text-xl font-bold mb-6">Review Your Request</h3>
                        <div className="grid gap-4 mb-8">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-lg bg-secondary/50">
                              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Type</div>
                              <div className="font-semibold capitalize">{formData.userType || "—"}</div>
                            </div>
                            <div className="p-4 rounded-lg bg-secondary/50">
                              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">State</div>
                              <div className="font-semibold">{formData.state || "—"}</div>
                            </div>
                            <div className="p-4 rounded-lg bg-secondary/50">
                              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Bedrooms</div>
                              <div className="font-semibold">{formData.bedrooms || "—"}</div>
                            </div>
                            <div className="p-4 rounded-lg bg-secondary/50">
                              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Bathrooms</div>
                              <div className="font-semibold">{formData.bathrooms || "—"}</div>
                            </div>
                          </div>
                          <div className="p-4 rounded-lg bg-secondary/50">
                            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Contact</div>
                            <div className="font-semibold">{formData.firstName} {formData.lastName}</div>
                            <div className="text-sm text-muted-foreground">{formData.email} &middot; {formData.phone}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              {!submitted && (
                <div className="flex justify-between mt-8 pt-6 border-t border-border">
                  <button
                    onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
                      currentStep === 1
                        ? "text-muted-foreground/30 cursor-not-allowed"
                        : "text-foreground hover:bg-secondary"
                    }`}
                    disabled={currentStep === 1}
                  >
                    <ChevronLeft size={16} /> Back
                  </button>

                  {currentStep < 4 ? (
                    <button
                      onClick={() => canProceed() && setCurrentStep((s) => s + 1)}
                      className={`flex items-center gap-2 px-6 py-2.5 rounded-md text-sm font-bold transition-all ${
                        canProceed()
                          ? "bg-primary text-primary-foreground hover:opacity-90 glow-cyan"
                          : "bg-secondary text-muted-foreground cursor-not-allowed"
                      }`}
                    >
                      Continue <ChevronRight size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-bold text-sm rounded-md hover:opacity-90 transition-all glow-amber"
                    >
                      <Send size={16} /> Submit Request
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
