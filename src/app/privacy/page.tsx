import SmallHero from "@/src/components/SmallHero";

export default function Privacy() {
  return (
    <main className="container">
      <SmallHero title={"Privacy Policy"} bgImage={"/policy-hero.jpg"} />

      <section className="space-y-6 mt-8 md:mt-10 px-3 md:px-6">
        <div>
          <p className="text">
            This Privacy Policy explains how Q Code collects, uses, and protects
            your personal data.
          </p>
        </div>
        <div>
          <h2 className="h2">1. Information We Collect</h2>
          <p className="text">
            We may collect personal data such as your name, email address, and
            project details when you contact us or use our services.
          </p>
        </div>

        <div>
          <h2 className="h2">2. How We Use Your Data</h2>
          <p className="text">
            We use your information to provide services, respond to inquiries,
            send updates, and improve our website.
          </p>
        </div>

        <div>
          <h2 className="h2">3. Cookies and Tracking</h2>
          <p className="text">
            We use cookies to improve user experience and analyze website
            traffic. For more information, see our{" "}
            <a
              href="/cookie"
              className="text-accent transition hover:text-btnbg"
            >
              Cookie Policy
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="h2">4. Data Sharing</h2>
          <p className="text">
            We do not sell or rent your personal data. We may share limited
            information with trusted service providers to fulfill our
            obligations.
          </p>
        </div>

        <div>
          <h2 className="h2">5. Data Retention</h2>
          <p className="text">
            We retain your data only as long as necessary to provide our
            services or comply with legal obligations.
          </p>
        </div>

        <div>
          <h2 className="h2">6. Security</h2>
          <p className="text">
            We implement reasonable technical and organizational measures to
            protect your information.
          </p>
        </div>

        <div>
          <h2 className="h2">7. Your Rights</h2>
          <p className="text">
            You have the right to access, correct, or delete your data. Contact
            us at{" "}
            <a
              href="mailto:privacy@qcode.dev"
              className="text-accent transition hover:text-btnbg"
            >
              privacy@qcode.dev
            </a>{" "}
            for any requests.
          </p>
        </div>

        <div>
          <h2 className="h2">8. Contact</h2>
          <p className="text">
            For any privacy-related inquiries, email us at{" "}
            <a
              href="mailto:privacy@qcode.dev"
              className="text-accent transition hover:text-btnbg"
            >
              privacy@qcode.dev
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
