export function Introduction() {
  return (
    <section
      id="introduction"
      className="introduction"
      aria-labelledby="introduction-title"
    >
      <div className="intro-art" aria-hidden="true">
        <div className="intro-art-mask">
          <img src="/assets/82447.svg" alt="" />
        </div>
        <img className="intro-art-thread" src="/assets/c66da.svg" alt="" />
      </div>
      <div className="intro-art-mobile" aria-hidden="true">
        <img src="/assets/bca21.svg" alt="" />
      </div>
      <div className="intro-content">
        <header className="intro-heading">
          <span>01</span>
          <h1 id="introduction-title">Edwin Design Studio Introduction</h1>
        </header>
        <div className="intro-panels">
          <article className="intro-panel">
            <h2>Introduction:</h2>
            <p className="studio-body-copy">
              Edwin Design Studio, with over a decade of professional
              experience, has had the privilege of collaborating with leading
              organizations and well-known brands. Its portfolio includes
              partnerships with IRIB (Radio Tehran), Taban Airlines, the
              Securities and Exchange Organization, Parsian Bank, major
              universities such as the University of Tehran, University of
              Mashhad, Elm-o-Farhang University, and several medical
              universities, as well as Barkat Foundation, Khorasan Newspaper,
              Maltich, and many others.
            </p>
          </article>
          <article className="intro-panel intro-services">
            <h2>Services:</h2>
            <ul>
              {[
                "Brand Strategy",
                "Brand Identity",
                "Design Brand Guidelines (Brand Book)",
                "Naming & Brand Messaging",
                "Rebranding Services",
                "Visual Identity Design",
                "Packaging Design",
                "Website Design",
                "Motion Graphics & Animation",
                "Advertising Campaign Design",
              ].map((service) => (
                <li
                  key={service}
                  className="studio-body-copy studio-service-copy"
                >
                  {service}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
