"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Loader2 } from "lucide-react";

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
  budget: z.enum(["< $20k (MVP)", "$20k - $50k (Growth)", "$50k+ (Enterprise)"], {
    required_error: "Please select a budget range",
  }),
  projectDetails: z.string().min(20, "Please provide more details (at least 20 characters)"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type FormData = z.infer<typeof formSchema>;

const budgetOptions = ["< $20k (MVP)", "$20k - $50k (Growth)", "$50k+ (Enterprise)"] as const;

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
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

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      reset();
      setIsSuccess(false);
      setSelectedBudget("");
      onOpenChange(false);
    }, 3000);
  };

  const handleBudgetSelect = (budget: string) => {
    setSelectedBudget(budget);
    setValue("budget", budget as FormData["budget"], { shouldValidate: true });
  };

  const handleClose = (open: boolean) => {
    if (!open && !isSubmitting) {
      reset();
      setIsSuccess(false);
      setSelectedBudget("");
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-slate-700/50 bg-slate-900/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-foreground">
            Start Your Project
          </DialogTitle>
          <DialogDescription className="text-secondary">
            Tell us about your vision. Our engineering team reviews every brief within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-4">
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="modal-name"
                      className="text-xs uppercase tracking-wider text-secondary font-semibold"
                    >
                      Name //
                    </Label>
                    <Input
                      id="modal-name"
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
                      htmlFor="modal-email"
                      className="text-xs uppercase tracking-wider text-secondary font-semibold"
                    >
                      Work Email //
                    </Label>
                    <Input
                      id="modal-email"
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
                    htmlFor="modal-companyUrl"
                    className="text-xs uppercase tracking-wider text-secondary font-semibold"
                  >
                    Company Website / LinkedIn URL //
                  </Label>
                  <Input
                    id="modal-companyUrl"
                    type="url"
                    {...register("companyUrl")}
                    className="bg-slate-800/50 border-slate-700 text-foreground placeholder:text-slate-500 focus:border-primary focus:ring-primary focus:ring-1 focus:shadow-[0_0_20px_rgba(45,226,156,0.3)] transition-all"
                    placeholder="https://company.com"
                  />
                  {errors.companyUrl && (
                    <p className="text-xs text-red-400">{errors.companyUrl.message}</p>
                  )}
                </div>

                {/* Row 3: Budget Selection */}
                <div className="space-y-2">
                  <Label className="text-xs uppercase tracking-wider text-secondary font-semibold block mb-2">
                    Project Budget //
                  </Label>
                  <div className="flex flex-wrap gap-2">
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
                          className={`px-3 py-1.5 text-sm cursor-pointer transition-all ${
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
                    <p className="text-xs text-red-400 mt-1">{errors.budget.message}</p>
                  )}
                </div>

                {/* Row 4: Project Details */}
                <div className="space-y-2">
                  <Label
                    htmlFor="modal-projectDetails"
                    className="text-xs uppercase tracking-wider text-secondary font-semibold"
                  >
                    Project Details //
                  </Label>
                  <Textarea
                    id="modal-projectDetails"
                    {...register("projectDetails")}
                    rows={4}
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
                    id="modal-privacyConsent"
                    checked={privacyConsent}
                    onCheckedChange={(checked) => setValue("privacyConsent", checked === true)}
                    className="mt-0.5"
                  />
                  <Label
                    htmlFor="modal-privacyConsent"
                    className="text-xs text-secondary leading-relaxed cursor-pointer"
                  >
                    I agree to the{" "}
                    <a href="/privacy" className="text-primary hover:underline" target="_blank">
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
                    className="w-full h-12 bg-primary text-background font-bold text-sm hover:bg-primary/90 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
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
              className="flex flex-col items-center justify-center text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <CheckCircle2 className="h-16 w-16 text-primary mb-4 mx-auto" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-black text-foreground mb-2"
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
      </DialogContent>
    </Dialog>
  );
}

