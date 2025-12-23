import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | Binary Byte",
  description: "Privacy Policy for Binary Byte - UK Software Engineering Agency",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3">
              Privacy Policy
            </h1>
            <p className="text-secondary text-sm">Last Updated: December 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-slate max-w-none prose-headings:text-foreground">
            <div className="text-slate-300 leading-relaxed space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p>
                  Binary Byte ("we", "our", or "us") is a UK-registered software engineering agency
                  committed to protecting your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit our website or use
                  our services.
                </p>
                <p>
                  By using our services, you consent to the data practices described in this
                  policy. If you do not agree with the practices described in this policy, please
                  do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  2.1 Information You Provide
                </h3>
                <p>We may collect information that you voluntarily provide to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and website URL</li>
                  <li>Project details and requirements</li>
                  <li>Budget information</li>
                  <li>Any other information you choose to provide in communications with us</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                  2.2 Automatically Collected Information
                </h3>
                <p>
                  When you visit our website, we may automatically collect certain information about
                  your device, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To respond to your inquiries and communicate with you</li>
                  <li>To evaluate project proposals and determine technical feasibility</li>
                  <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>To comply with legal obligations and protect our legal rights</li>
                  <li>To prevent fraud and ensure the security of our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Sharing and Disclosure</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may
                  share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> We may share information with trusted third-party
                    service providers who assist us in operating our business, such as cloud hosting
                    providers, analytics services, and email service providers.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> We may disclose information if required by law,
                    court order, or governmental authority.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale
                    of assets, your information may be transferred to the acquiring entity.
                  </li>
                  <li>
                    <strong>With Your Consent:</strong> We may share information with your explicit
                    consent for specific purposes.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the Internet or electronic
                  storage is 100% secure, and we cannot guarantee absolute security.
                </p>
                <p>
                  All project briefs and communications are protected by Non-Disclosure Agreements
                  (NDAs) as part of our standard process.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights (GDPR)</h2>
                <p>
                  If you are located in the European Economic Area (EEA) or the UK, you have certain
                  rights under the General Data Protection Regulation (GDPR) and UK GDPR:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Right to Access:</strong> You can request a copy of the personal data we
                    hold about you.
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> You can request correction of inaccurate
                    or incomplete data.
                  </li>
                  <li>
                    <strong>Right to Erasure:</strong> You can request deletion of your personal data
                    in certain circumstances.
                  </li>
                  <li>
                    <strong>Right to Restrict Processing:</strong> You can request that we limit how we
                    use your data.
                  </li>
                  <li>
                    <strong>Right to Data Portability:</strong> You can request transfer of your data
                    to another service provider.
                  </li>
                  <li>
                    <strong>Right to Object:</strong> You can object to processing of your data for
                    certain purposes.
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us at [Contact Email].
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the
                  purposes outlined in this Privacy Policy, unless a longer retention period is
                  required or permitted by law. Project-related data may be retained for up to 7
                  years for legal and business purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
                <p>
                  Our website may use cookies and similar tracking technologies to enhance your
                  experience. You can control cookie preferences through your browser settings.
                  However, disabling cookies may limit certain functionalities of our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. International Data Transfers</h2>
                <p>
                  As a UK-based agency with global delivery capabilities, your information may be
                  transferred to and processed in countries outside the EEA. We ensure appropriate
                  safeguards are in place to protect your data in accordance with this Privacy
                  Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not
                  knowingly collect personal information from children. If you believe we have
                  collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any
                  material changes by posting the new Privacy Policy on this page and updating the
                  "Last Updated" date. Your continued use of our services after such changes
                  constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Information</h2>
                <p>
                  If you have questions, concerns, or wish to exercise your rights regarding this
                  Privacy Policy, please contact us:
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

