import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms of Service | Binary Byte",
  description: "Terms of Service for Binary Byte - UK Software Engineering Agency",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">
              Terms of Service
            </h1>
            <p className="text-secondary text-sm">Last Updated: December 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-slate max-w-none prose-headings:text-foreground">
            <div className="text-slate-300 leading-relaxed space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                <p>
                  These Terms of Service ("Terms") govern your access to and use of the services
                  provided by Binary Byte, a UK-registered software engineering agency ("we",
                  "our", or "us"). By accessing our website or using our services, you agree to be
                  bound by these Terms.
                </p>
                <p>
                  If you do not agree to these Terms, you must not use our services. We reserve the
                  right to modify these Terms at any time, and such modifications shall be effective
                  immediately upon posting.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
                <p>
                  Binary Byte provides software engineering services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>MVP (Minimum Viable Product) development</li>
                  <li>Custom web application development</li>
                  <li>API development and integration services</li>
                  <li>Cloud infrastructure and deployment solutions</li>
                  <li>Technical consulting and architecture services</li>
                </ul>
                <p className="mt-4">
                  All services are provided subject to separate service agreements or statements of
                  work that specify project scope, deliverables, timelines, and fees.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Client Obligations</h2>
                <p>As a client, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information necessary for project execution</li>
                  <li>Respond promptly to requests for feedback, approvals, or information</li>
                  <li>Make timely payments as specified in the service agreement</li>
                  <li>Respect intellectual property rights and confidentiality obligations</li>
                  <li>Use delivered software and services in compliance with applicable laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Fees and Payment</h2>
                <p>
                  All fees for services are specified in the applicable service agreement or
                  statement of work. Payment terms, including deposit requirements and milestone
                  payments, will be clearly outlined in the project agreement.
                </p>
                <p>
                  Unless otherwise specified, all fees are quoted in GBP (British Pounds) or USD
                  (US Dollars) and are exclusive of applicable taxes. Late payments may incur
                  interest charges at a rate of 1.5% per month.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Intellectual Property Rights</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">5.1 Client Work</h3>
                <p>
                  Upon full payment of all fees, ownership of custom-developed software and
                  deliverables will transfer to the client as specified in the service agreement.
                  Source code, documentation, and related materials will be delivered upon project
                  completion and final payment.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.2 Our Proprietary Materials</h3>
                <p>
                  Binary Byte retains all rights to our proprietary tools, frameworks, methodologies,
                  and pre-existing code libraries. We grant clients a license to use such materials
                  solely in connection with the delivered project.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.3 Third-Party Components</h3>
                <p>
                  Projects may incorporate third-party open-source software or licensed components.
                  Use of such components is subject to their respective licenses, which will be
                  disclosed in project documentation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Confidentiality</h2>
                <p>
                  Both parties agree to maintain the confidentiality of all proprietary and
                  confidential information shared during the course of the engagement. This
                  obligation survives termination of the service agreement.
                </p>
                <p>
                  Binary Byte operates under strict Non-Disclosure Agreements (NDAs) and will not
                  disclose client information, project details, or proprietary data to third
                  parties without explicit consent, except as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Warranties and Disclaimers</h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">7.1 Service Warranties</h3>
                <p>
                  We warrant that services will be performed in a professional and workmanlike
                  manner consistent with industry standards. We will correct any defects in
                  deliverables that are reported within 90 days of delivery, provided such defects
                  are due to our error.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">7.2 Disclaimers</h3>
                <p>
                  EXCEPT AS EXPRESSLY SET FORTH HEREIN, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                  IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                  PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT SERVICES WILL BE
                  UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, BINARY BYTE'S TOTAL LIABILITY FOR ANY
                  CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED
                  THE TOTAL AMOUNT PAID BY THE CLIENT FOR THE SPECIFIC SERVICE GIVING RISE TO THE
                  CLAIM IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                </p>
                <p>
                  WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                  PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR BUSINESS OPPORTUNITIES,
                  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
                <p className="mt-4">
                  Nothing in these Terms excludes or limits our liability for death or personal
                  injury caused by our negligence, fraud, or any other liability that cannot be
                  excluded or limited under applicable UK law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Termination</h2>
                <p>
                  Either party may terminate a service agreement in accordance with the terms
                  specified therein. Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All outstanding fees for work completed shall become immediately due</li>
                  <li>We will deliver work-in-progress and completed deliverables</li>
                  <li>Confidentiality obligations shall continue to apply</li>
                  <li>Each party shall return or destroy the other's confidential information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Binary Byte, its officers,
                  directors, employees, and agents from and against any claims, damages, losses,
                  liabilities, and expenses (including legal fees) arising out of or relating to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your use of our services in violation of these Terms</li>
                  <li>Your infringement of any intellectual property or other rights</li>
                  <li>Your violation of any applicable laws or regulations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Dispute Resolution</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of
                  England and Wales. Any disputes arising out of or relating to these Terms or our
                  services shall be subject to the exclusive jurisdiction of the courts of England
                  and Wales.
                </p>
                <p>
                  Before initiating formal legal proceedings, both parties agree to attempt to
                  resolve disputes through good faith negotiation for a period of 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Force Majeure</h2>
                <p>
                  Neither party shall be liable for any failure or delay in performance under these
                  Terms due to circumstances beyond its reasonable control, including acts of God,
                  natural disasters, war, terrorism, labor strikes, or government actions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Severability</h2>
                <p>
                  If any provision of these Terms is found to be invalid, illegal, or
                  unenforceable, the remaining provisions shall continue in full force and effect.
                  The invalid provision shall be replaced with a valid provision that most closely
                  approximates the intent of the original provision.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">14. Entire Agreement</h2>
                <p>
                  These Terms, together with any applicable service agreements or statements of
                  work, constitute the entire agreement between you and Binary Byte regarding the
                  subject matter herein and supersede all prior agreements and understandings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">15. Contact Information</h2>
                <p>
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 space-y-2">
                  <p>
                    <strong>Binary Byte</strong>
                  </p>
                  <p>110 Plashet Road, London, England, E13 0QS</p>
                  <p>
                    Email: <a href="mailto:[Contact Email]" className="text-primary hover:underline">[Contact Email]</a>
                  </p>
                  <p>Company Registration Number: [Company Registration Number]</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

