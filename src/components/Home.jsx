export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-eyebrow">Chichester, New Hampshire</div>
        <h1 className="hero-title">Classic Italian Food, Warm Hospitality</h1>
        <p className="hero-subtitle">
          Welcome to Pecorino&apos;s — a classic Italian restaurant experience with a
          bright, timeless look, artisan pizza, handcrafted calzoni, and a curated
          beer and wine selection.
        </p>

        <div className="hero-actions">
          <a
            href="https://tables.toasttab.com/restaurants/6456a10e-bf3c-4e18-a21e-4e925162f48a/reserve"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Reserve a Table
          </a>
          <a href="#/full-menu" className="btn-secondary">
            View Full Menu
          </a>
        </div>
      </section>

      <section className="section-card">
        <h2 className="page-title">Welcome to Pecorino&apos;s</h2>
        <p className="page-copy">
          Pecorino&apos;s brings a classic Italian dining feel to Chichester, New
          Hampshire, with a clean and elegant presentation that lets the food stand
          out first. This site is designed to feel timeless, bright, and inviting —
          with easy access to the full menu, artisan pizza and calzoni offerings,
          and the beer and wine list.
        </p>
      </section>

      <section className="feature-grid section-spacing">
        <article className="feature-box">
          <h3>Full Menu</h3>
          <p>
            Browse the full restaurant menu with appetizers, pasta, entrées,
            desserts, and house favorites.
          </p>
        </article>

        <article className="feature-box">
          <h3>Artisan Pizza</h3>
          <p>
            Explore signature pizzas, calzoni, specialty combinations, and future
            build-your-own options.
          </p>
        </article>

        <article className="feature-box">
          <h3>Beer &amp; Wine</h3>
          <p>
            View red and white wines, sparkling selections, and beer offerings in a
            simple dedicated page.
          </p>
        </article>
      </section>

      <section className="section-card section-spacing">
        <h2 className="page-title">Visit Us</h2>
        <p className="page-copy">
          Join us at Pecorino&apos;s in Chichester for classic Italian food and a warm,
          welcoming atmosphere.
        </p>

        <ul className="menu-preview-list">
          <li>
            <strong>Phone:</strong>{' '}
            <a href="tel:16034354008">(603) 435-4008</a>
          </li>
          <li>
            <strong>Address:</strong> 348 Suncook Valley Rd, Chichester, NH 03258
          </li>
        </ul>

        <div className="section-actions">
          <a
            href="https://tables.toasttab.com/restaurants/6456a10e-bf3c-4e18-a21e-4e925162f48a/reserve"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Make a Reservation
          </a>
        </div>
      </section>

      <section className="section-card section-spacing">
        <h2 className="page-title">Find Pecorino&apos;s</h2>
        <p className="page-copy">
          Conveniently located in Chichester, New Hampshire.
        </p>

        <div className="map-frame-wrap">
          <iframe
            title="Pecorino's location map"
            src="https://www.google.com/maps?q=348%20Suncook%20Valley%20Rd%2C%20Chichester%2C%20NH%2003258&z=15&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <p className="footer-note">
        Pecorino&apos;s • 348 Suncook Valley Rd, Chichester, NH 03258 • (603) 435-4008
      </p>
    </>
  )
}