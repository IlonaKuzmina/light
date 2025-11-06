import SmallHero from "@/src/components/ui/SmallHero";

export default function Cookie() {
  return (
    <main className="">
      <SmallHero title={"Cookie Policy"} />

      <section className="section-top-padding border-dark border-t-3 border-b-3 bg-[#0D0C0F]">
        <div className="text-light container space-y-6">
          <div>
            <h2 className="h2">Lightshift Productions LLC</h2>
            <ul>
              <li>
                <strong>Effective date: </strong>15.10.2025
              </li>
              <li>
                <strong>Contact:</strong>{" "}
                <a
                  className="link"
                  href="mailto:contact@lightshiftproductions.com"
                >
                  contact@lightshiftproductions.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="h2">1. What Are Cookies?</h2>
            <p className="">
              Cookies are small files placed on your device that help our
              website function, remember preferences, and understand how
              visitors use the site. We may also use pixels, tags, and local
              storage (“cookies” collectively).
            </p>
          </div>

          <div>
            <h2 className="h2">2. Types of Cookies We Use</h2>
            <ul className="space-y-4">
              <li>
                • <strong>Strictly necessary:</strong> required for core
                functionality (session management, checkout, security). These
                cannot be switched off in our systems.
              </li>
              <li>
                • <strong>Performance/analytics:</strong> help us understand
                site usage and improve features (aggregated metrics such as page
                views, time on page).
              </li>
              <li>
                • <strong>Functional:</strong> remember preferences (e.g.,
                language, saved gear lists). visits.
              </li>
              <li>
                • <strong>Advertising (if enabled):</strong> measure campaign
                performance and, where permitted, show relevant ads. We
                currently do not sell or “share” personal information for
                cross-context behavioral advertising.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="h2">3. Third-party cookies</h2>
            <p className="">
              Service providers (e.g., analytics, payment processors,
              chat/support tools) may set cookies when their services run on our
              site. Their use is governed by their own policies.
            </p>
          </div>

          <div>
            <h2 className="h2">4. Your choices</h2>
            <ul className="space-y-4">
              <li>
                • Consent banner (EEA/UK and where required): choose to accept
                or manage non-essential cookies via our cookie banner or “Cookie
                Settings” link.
              </li>
              <li>
                • Browser/device controls: block or delete cookies via your
                browser/device. Blocking essential cookies may break site
                features (e.g., login, checkout).
              </li>
              <li>
                • Analytics/ads opt-outs: where applicable, use platform-level
                opt-outs (e.g., NAI/DAA in the US) or device settings.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="h2">5. Retention</h2>
            <p className="">
              Cookie lifespans vary. Session cookies expire when you close your
              browser; persistent cookies remain until their set expiry or
              deletion via your settings.
            </p>
          </div>

          <div>
            <h2 className="h2">6. Changes</h2>
            <p className="">
              We may update this Cookies Policy periodically. The “Effective
              date” above reflects the latest version.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
