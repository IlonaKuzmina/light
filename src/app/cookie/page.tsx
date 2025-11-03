import SmallHero from "@/src/components/SmallHero";

export default function Cookie() {
  return (
    <main className="container">
      <SmallHero title={"Cookie Policy"} bgImage={"/policy-hero.jpg"} />

      <section className="space-y-6 mt-8 md:mt-10 px-3 md:px-6">
        <div>
          <p className="text">
            This Cookie Policy explains how Q Code uses cookies and similar
            technologies on our website.
          </p>
        </div>
        <div>
          <h2 className="h2">1. What Are Cookies?</h2>
          <p className="text">
            Cookies are small text files stored on your device that help us
            improve your browsing experience and analyze traffic.
          </p>
        </div>

        <div>
          <h2 className="h2">2. Types of Cookies We Use</h2>
          <ul className="text space-y-4">
            <li>
              - <strong>Essential Cookies</strong>: Required for website functionality.
            </li>
            <li>
              - <strong>Analytics Cookies</strong>: Help us understand how visitors interact
              with our site.
            </li>
            <li>
              - <strong>Preference Cookies</strong>: Store your preferences for future
              visits.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="h2">3. Managing Cookies</h2>
          <p className="text">
            You can control or delete cookies through your browser settings.
            Disabling cookies may affect your experience on our site.
          </p>
        </div>

        <div>
          <h2 className="h2">4. Third-Party Cookies</h2>
          <p className="text">
            We may use third-party services such as Google Analytics that use
            cookies to analyze usage patterns.
          </p>
        </div>

        <div>
          <h2 className="h2">5. Changes to This Policy</h2>
          <p className="text">
            We may update this Cookie Policy from time to time. Any changes will
            be published on this page.
          </p>
        </div>

        <div>
          <h2 className="h2">6. Contact</h2>
          <p className="text">
            If you have any questions about our cookie use, contact:
            <a
              href="mailto:cookies@qcode.dev"
              className="text-accent transition hover:text-btnbg"
            >
              cookies@qcode.dev
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
