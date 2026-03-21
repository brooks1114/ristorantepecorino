export default function VisitUs() {
  return (
    <div className="menu-page">
      <section className="section-card section-spacing">
        <div className="hero-eyebrow">Pecorino&apos;s</div>
        <h1 className="page-title">Visit Us</h1>
        <p className="page-copy">
          We&apos;re easy to find in Chichester, New Hampshire. Whether you&apos;re
          stopping in for dinner, artisan pizza, or drinks, we look forward to
          welcoming you.
        </p>

        <div className="section-actions">
          <a
            href="https://tables.toasttab.com/restaurants/6456a10e-bf3c-4e18-a21e-4e925162f48a/reserve"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Reserve a Table
          </a>
        </div>
      </section>

      <section className="section-card section-spacing">
        <h2 className="page-title">Location &amp; Contact</h2>
        <p className="page-copy">
          Pecorino&apos;s brings a classic Italian dining feel to Chichester with a
          warm, inviting atmosphere and a convenient location for local guests and
          first-time visitors.
        </p>

        <ul className="menu-preview-list">
          <li>
            <strong>Address:</strong> 348 Suncook Valley Rd, Chichester, NH 03258
          </li>
          <li>
            <strong>Phone:</strong>{' '}
            <a href="tel:16034354008">(603) 435-4008</a>
          </li>
          <li>
            <strong>Facebook:</strong>{' '}
            <a
              href="https://www.facebook.com/PecorinosItalianRestaurant"
              target="_blank"
              rel="noreferrer"
            >
              Pecorino&apos;s Italian Restaurant
            </a>
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

        <div className="section-actions">
          <a
            href="https://tables.toasttab.com/restaurants/6456a10e-bf3c-4e18-a21e-4e925162f48a/reserve"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Reserve Before You Arrive
          </a>
        </div>
      </section>
    </div>
  )
}