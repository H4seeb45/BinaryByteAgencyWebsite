"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Lock, Rocket, MapPin, CheckCircle2, Loader2 } from "lucide-react";

const budgetOptions = ["< $20k (MVP)", "$20k - $50k (Growth)", "$50k+ (Enterprise)"] as const;

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .refine(
      (email) => {
        const domain = email.split("@")[1]?.toLowerCase();
        const freeEmailDomains = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com", "aol.com"];
        return !freeEmailDomains.includes(domain || "");
      },
      {
        message: "Please use your work email address",
      }
    ),
  companyUrl: z
    .string()
    .refine(
      (url) => {
        if (!url) return true;
        try {
          new URL(url);
          return true;
        } catch {
          return false;
        }
      },
      {
        message: "Please enter a valid URL",
      }
    ),
  budget: z.enum(budgetOptions),
  projectDetails: z.string().min(20, "Please provide more details (at least 20 characters)"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      budget: undefined,
      privacyConsent: false,
    },
  });

  const privacyConsent = watch("privacyConsent");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Form submission handled - data would be sent to API endpoint
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleBudgetSelect = (budget: string) => {
    setSelectedBudget(budget);
    setValue("budget", budget as FormData["budget"], { shouldValidate: true });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div id="contact-form" className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Panel - Context & Promise */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden bg-background p-8 lg:p-12 flex flex-col justify-between"
            style={{
              backgroundImage: `linear-gradient(rgba(26, 43, 52, 0.95), rgba(26, 43, 52, 0.95)), url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%232DE29C' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-primary text-sm font-semibold uppercase tracking-wider mb-4"
              >
                Start Your Project
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight"
              >
                Ready to engineer your digital foundation?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-secondary text-lg leading-relaxed mb-8"
              >
                Tell us about your vision. Our engineering team reviews every brief within 24 hours to determine technical feasibility and strategic fit.
              </motion.p>
            </div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-4 mt-8"
            >
              <div className="flex items-center gap-3 text-secondary text-sm">
                <Lock className="h-5 w-5 text-primary flex-shrink-0" />
                <span>NDA Protected Process</span>
              </div>
              <div className="flex items-center gap-3 text-secondary text-sm">
                <Rocket className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Direct Access to Lead Engineers</span>
              </div>
              <div className="flex items-center gap-3 text-secondary text-sm">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span>UK-Registered Agency</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Panel - Glass Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative rounded-xl overflow-hidden backdrop-blur-xl bg-slate-900/60 border border-slate-700/50 p-8 lg:p-10"
                  style={{
                    borderImage: "linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.1), transparent) 1",
                  }}
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Row 1: Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-xs uppercase tracking-wider text-secondary font-semibold"
                        >
                          Name //
                        </Label>
                        <Input
                          id="name"
                          {...register("name")}
                          className="bg-slate-800/50 border-slate-700 text-foreground placeholder:text-slate-500 focus:border-primary focus:ring-primary focus:ring-1 focus:shadow-[0_0_20px_rgba(45,226,156,0.3)] transition-all"
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-xs uppercase tracking-wider text-secondary font-semibold"
                        >
                          Work Email //
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className="bg-slate-800/50 border-slate-700 text-foreground placeholder:text-slate-500 focus:border-primary focus:ring-primary focus:ring-1 focus:shadow-[0_0_20px_rgba(45,226,156,0.3)] transition-all"
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Company URL */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="companyUrl"
                        className="text-xs uppercase tracking-wider text-secondary font-semibold"
                      >
                        Company Website / LinkedIn URL //
                      </Label>
                      <Input
                        id="companyUrl"
                        type="url"
                        {...register("companyUrl")}
                        className="bg-slate-800/50 border-slate-700 text-foreground placeholder:text-slate-500 focus:border-primary focus:ring-primary focus:ring-1 focus:shadow-[0_0_20px_rgba(45,226,156,0.3)] transition-all"
                        placeholder="https://company.com or https://linkedin.com/company/..."
                      />
                      {errors.companyUrl && (
                        <p className="text-xs text-red-400">{errors.companyUrl.message}</p>
                      )}
                    </div>

                    {/* Row 3: Budget Selection */}
                    <div className="space-y-2">
                      <Label className="text-xs uppercase tracking-wider text-secondary font-semibold block mb-3">
                        Project Budget //
                      </Label>
                      <div className="flex flex-wrap gap-3">
                        {budgetOptions.map((budget) => (
                          <motion.button
                            key={budget}
                            type="button"
                            onClick={() => handleBudgetSelect(budget)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Badge
                              variant="outline"
                              className={`px-4 py-2 text-sm cursor-pointer transition-all ${
                                selectedBudget === budget
                                  ? "bg-primary border-primary text-background"
                                  : "bg-slate-800/50 border-slate-700 text-secondary hover:border-slate-600"
                              }`}
                            >
                              {budget}
                            </Badge>
                          </motion.button>
                        ))}
                      </div>
                      {errors.budget && (
                        <p className="text-xs text-red-400 mt-2">{errors.budget.message}</p>
                      )}
                    </div>

                    {/* Row 4: Project Details */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="projectDetails"
                        className="text-xs uppercase tracking-wider text-secondary font-semibold"
                      >
                        Project Details //
                      </Label>
                      <Textarea
                        id="projectDetails"
                        {...register("projectDetails")}
                        rows={6}
                        className="bg-slate-800/50 border-slate-700 text-foreground placeholder:text-slate-500 focus:border-primary focus:ring-primary focus:ring-1 focus:shadow-[0_0_20px_rgba(45,226,156,0.3)] transition-all resize-none"
                        placeholder="Tell us about the problem you are solving and your desired timeline..."
                      />
                      {errors.projectDetails && (
                        <p className="text-xs text-red-400">{errors.projectDetails.message}</p>
                      )}
                    </div>

                    {/* Row 5: Privacy Consent */}
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="privacyConsent"
                        checked={privacyConsent}
                        onCheckedChange={(checked) => setValue("privacyConsent", checked === true)}
                        className="mt-0.5"
                      />
                      <Label
                        htmlFor="privacyConsent"
                        className="text-xs text-secondary leading-relaxed cursor-pointer"
                      >
                        I agree to the{" "}
                        <a href="#" className="text-primary hover:underline">
                          Privacy Policy
                        </a>{" "}
                        and consent to being contacted by Binary Byte.
                      </Label>
                    </div>
                    {errors.privacyConsent && (
                      <p className="text-xs text-red-400">{errors.privacyConsent.message}</p>
                    )}

                    {/* Submit Button */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-primary text-background font-bold text-base hover:bg-primary/90 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            INITIALIZE PROJECT DISCUSSION
                            <span className="ml-2">→</span>
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative rounded-xl overflow-hidden backdrop-blur-xl bg-slate-900/60 border border-primary/30 p-12 lg:p-16 flex flex-col items-center justify-center text-center min-h-[400px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle2 className="h-20 w-20 text-primary mb-6 mx-auto" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-black text-foreground mb-4"
                  >
                    Transmitted. Stand by for engineering review.
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-secondary text-sm"
                  >
                    Our team will review your brief within 24 hours and get back to you.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
