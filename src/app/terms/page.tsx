

export default function Terms() {
  return (
    <main className="container">
      {/* <SmallHero title={"Terms and Conditions"} bgImage={"/policy-hero.jpg"} /> */}

      <section className="space-y-6 mt-8 md:mt-10 px-3 md:px-6">
        <div>
          <p className="text">
            Welcome to <strong>Q Code Web Development</strong> (“Company”, “we”, “our”, “us”). By accessing or using our website and services, you agree to comply with and be bound by these Terms and Conditions.
          </p>
        </div>
        <div>
          <h2 className="h2">1. Acceptance of Terms</h2>
          <p className="text">
            By using our website, you confirm that you accept these Terms and Conditions and agree to comply with them. If you do not agree, you must not use our website.
          </p>
        </div>

        <div>
          <h2 className="h2">2. Services</h2>
          <p className="text">
            Q Code provides web development, design, and related digital services. All project scopes, deliverables, and timelines are defined in individual service agreements or invoices.
          </p>
        </div>

        <div>
          <h2 className="h2">3. Intellectual Property</h2>
          <p className="text">
            All content, code, and design elements created by Q Code remain the property of Q Code until full payment has been received. After payment, ownership of custom deliverables is transferred to the client unless otherwise agreed.
          </p>
        </div>

        <div>
          <h2 className="h2">4. Payments and Refunds</h2>
          <p className="text">
            Payments are due as outlined in invoices. Refunds are granted only under exceptional circumstances and at our discretion.
          </p>
        </div>

        <div>
          <h2 className="h2">5. Limitation of Liability</h2>
          <p className="text">
            We are not responsible for indirect or consequential losses arising from the use of our website or services.
          </p>
        </div>

        <div>
          <h2 className="h2">6. Amendments</h2>
          <p className="text">
            We reserve the right to modify these Terms at any time. Updates will be posted on this page, and continued use constitutes acceptance.
          </p>
        </div>

        <div>
          <h2 className="h2">7. Contact</h2>
          <p className="text">
            For questions, please contact us at:{" "}
            <a
              href="mailto:support@qcode.dev"
              className="text-accent transition hover:text-btnbg"
            >
              support@qcode.dev
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
