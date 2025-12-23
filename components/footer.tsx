"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Github, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="relative h-16 w-auto">
                <Image
                  src="/logo.png"
                  alt="Binary Byte Logo"
                  width={180}
                  height={64}
                  className="h-full w-auto object-contain"
                  sizes="(max-width: 768px) 120px, 180px"
                  priority={false}
                />
              </div>
            </div>
            <p className="text-secondary text-sm mb-4 leading-relaxed">
              Engineering the digital future. We build high-performance,
              scalable software ecosystems for the world's most ambitious
              founders.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  MVP Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Custom Web Apps
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  API & Integration
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Technical Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@binarybyte.co.uk"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  hello@binarybyte.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+447398258913"
                  className="text-secondary hover:text-primary transition-colors text-sm"
                >
                  +44 7398 258913
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-secondary text-sm">
                  110 Plashet Road, London, England, E13 0QS
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="mb-6">
            <p className="text-secondary text-xs uppercase tracking-wider mb-4 text-center">
              Accepted Payment Methods
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Visa */}
              <div className="flex items-center justify-center w-20 h-12 bg-white rounded-lg px-3 py-2 border border-slate-700/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                <span className="text-[11px] font-bold text-[#1434CB] tracking-tight">
                  VISA
                </span>
              </div>
              {/* Mastercard */}
              <div className="flex items-center justify-center w-20 h-12 bg-white rounded-lg px-3 py-2 border border-slate-700/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-[#EB001B]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#F79E1B] -ml-1.5"></div>
                </div>
              </div>
              {/* PayPal */}
              <div className="flex items-center justify-center w-20 h-12 bg-white rounded-lg px-3 py-2 border border-slate-700/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                <span className="text-[11px] font-bold text-[#0070BA] tracking-tight">
                  PayPal
                </span>
              </div>
              {/* Stripe */}
              <div className="flex items-center justify-center w-20 h-12 bg-white rounded-lg px-3 py-2 border border-slate-700/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all group">
                <span className="text-[11px] font-bold text-[#635BFF] tracking-tight">
                  Stripe
                </span>
              </div>
              {/* American Express */}
              <div className="flex items-center justify-center w-24 h-12 bg-white rounded-lg px-3 py-2 border border-slate-700/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <span className="text-xs font-bold text-slate-800 tracking-tight">
                  AMEX
                </span>
              </div>
              {/* Apple Pay */}
              <div className="flex items-center justify-center w-20 h-12 bg-black rounded-lg px-3 py-2 border border-slate-700/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <span className="text-[10px] font-semibold text-white tracking-tight">
                  Apple Pay
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary text-sm">
              &copy; {currentYear} Binary Byte. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-secondary hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-secondary hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <a
                href="#"
                className="text-secondary hover:text-primary transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
