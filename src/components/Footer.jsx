export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="site-footer-name">Pecorino&apos;s</p>
        <p className="site-footer-details">
          348 Suncook Valley Rd, Chichester, NH 03258
        </p>
        <p className="site-footer-details">
          <a href="tel:16034354008">(603) 435-4008</a>
        </p>
        <p className="site-footer-details">
          <a
            href="https://tables.toasttab.com/restaurants/6456a10e-bf3c-4e18-a21e-4e925162f48a/reserve"
            target="_blank"
            rel="noreferrer"
            className="footer-reserve-link"
          >
            Reserve a Table
          </a>
        </p>
      </div>
    </footer>
  )
}