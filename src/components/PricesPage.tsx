type Package = {
  number: string
  title: string
  tagline: string
  scope: string[]
  duration: string
  durationNote: string
  price: string
  note?: string
  featured?: boolean
  badge: string
}

const packages: Package[] = [
  {
    number: "01",
    title: "Brand Identity Design",
    tagline: "The complete brand, from strategy to every touchpoint.",
    featured: true,
    badge: "Most complete",
    scope: [
      "Brand book development",
      "Competitor analysis (visual and strategic)",
      "Target audience analysis",
      "Brand voice and personality development",
      "Mood board creation",
      "Logo and logotype design",
      "Logo motion design (concept, storyboard, execution, original soundtrack)",
      "Brand story motion (short animated brand story clip)",
      "Visual identity presentation motion (introductory motion clip)",
      "Pattern design, icon set, and custom typography",
      "Corporate stationery, brochures, and brand catalogs",
      "Selection of fonts aligned with brand identity",
      "Corporate color palette development",
      "Character design and illustration",
      "Website visual design (up to 5 main pages)",
      "Social media kit (Instagram post & story templates, YouTube covers, LinkedIn posts, etc.)",
      "Interior design recommendations based on visual identity",
      "Packaging design (rigid box, bags, carton boxes)",
      "Corporate clothing and uniform design (badges, pins, etc.)",
    ],
    duration: "3 months",
    durationNote: "Flexible timeline depending on scope adjustments",
    price: "9,000",
    note: "Negotiable based on selected deliverables",
  },
  {
    number: "02",
    title: "Visual Identity & Brand Guidelines",
    badge: "Full system",
    tagline: "A full visual system, documented in a brand guideline.",
    scope: [
      "Mood board development",
      "Logo and logotype design",
      "Logo motion design (concept, storyboard, execution, original soundtrack)",
      "Pattern design",
      "Supporting graphic elements",
      "Icon set design",
      "Custom typography system",
      "Corporate stationery design",
      "Selection of fonts aligned with brand identity",
      "Corporate color palette development",
      "Brochure and catalog layout design",
      "Illustration direction based on brand personality",
      "Social media kit (Instagram post & story templates, YouTube covers, LinkedIn posts, etc.)",
      "Visual identity guideline (brand guideline document)",
    ],
    duration: "1 month",
    durationNote: "Flexible depending on scope adjustments",
    price: "7,000",
    note: "Negotiable based on selected deliverables",
  },
  {
    number: "03",
    title: "Visual Identity Design",
    badge: "Launch ready",
    tagline: "The core identity assets your brand needs to launch.",
    scope: [
      "Logo and logotype design",
      "Pattern design",
      "Icon set design",
      "Custom typography system",
      "Corporate stationery design",
      "Selection of Persian and English fonts aligned with brand identity",
      "Corporate color palette development",
      "Social media kit (Instagram post & story templates, YouTube covers, LinkedIn posts, etc.)",
    ],
    duration: "2 weeks",
    durationNote: "Flexible depending on scope adjustments",
    price: "4,000",
    note: "Negotiable based on selected deliverables",
  },
  {
    number: "04",
    title: "Logo Design",
    badge: "Essentials",
    tagline: "A distinctive mark with its essential companions.",
    scope: [
      "Logo and logotype design",
      "Corporate color palette development",
      "Corporate stationery design",
      "Selection of fonts aligned with brand identity",
    ],
    duration: "1 week",
    durationNote: "Flexible depending on scope adjustments",
    price: "1,200",
  },
]

export function PricesPage() {
  return (
    <main
      id="prices"
      className="portfolio taban-page prices-page"
      aria-labelledby="prices-title"
    >
      <div className="intro-content prices-content">
        <header className="intro-heading prices-heading">
          <div>
            <h1 id="prices-title">Design Packages</h1>
            <p>
              Four ways to work with Edwin Design Studio — from a focused logo
              to a complete brand identity.
            </p>
          </div>
        </header>

        <ol className="prices-list">
          {packages.map((pkg, index) => (
            <li key={pkg.number}>
              <article
                className={`price-card${pkg.featured ? " is-featured" : ""}`}
                aria-labelledby={`package-${pkg.number}`}
              >
                <header className="price-card-head">
                  <div className="price-card-title">
                    <span className="price-card-eyebrow">
                      Package {pkg.number}
                      <em
                        className="price-card-badge"
                        aria-label={`${pkg.badge}, tier ${packages.length - index} of ${packages.length}`}
                      >
                        <span className="price-badge-meter" aria-hidden="true">
                          {packages.map((_, bar) => (
                            <i
                              key={bar}
                              className={
                                bar < packages.length - index
                                  ? "is-on"
                                  : undefined
                              }
                            />
                          ))}
                        </span>
                        <span className="price-badge-label">{pkg.badge}</span>
                      </em>
                    </span>
                    <h2 id={`package-${pkg.number}`}>{pkg.title}</h2>
                    <p>{pkg.tagline}</p>
                  </div>
                  <span className="price-card-number" aria-hidden="true">
                    {pkg.number}
                  </span>
                </header>

                <div className="price-card-body">
                  <section aria-label="Scope of work">
                    <h3>
                      Scope of work <span>{pkg.scope.length} deliverables</span>
                    </h3>
                    <ul className="price-scope">
                      {pkg.scope.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <dl className="price-card-meta">
                    <div>
                      <dt>Project duration</dt>
                      <dd>
                        <small>Min.</small> {pkg.duration}
                      </dd>
                      <p>{pkg.durationNote}</p>
                    </div>
                    <div className="price-card-investment">
                      <dt>Project investment</dt>
                      <dd>
                        <span className="price-currency">$</span>
                        {pkg.price}
                      </dd>
                      <p>{pkg.note ?? "Fixed price"}</p>
                    </div>
                  </dl>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </main>
  )
}
