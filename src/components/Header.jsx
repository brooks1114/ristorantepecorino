import { Link, NavLink } from 'react-router-dom'

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="facebook-icon"
      fill="currentColor"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.25.2 2.25.2v2.47H15.2c-1.25 0-1.64.78-1.64 1.58v1.89h2.79l-.45 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="site-title-row">
          <Link to="/" className="site-title" aria-label="Pecorino's home page">
            Pecorino&apos;s
          </Link>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <ul className="nav-list">
            <li>
              <NavLink
                to="/full-menu"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Full Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/artisan-pizza-calzoni"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Artisan Pizza &amp; Calzoni
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/beer-wine-list"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Beer and Wine List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/visit-us"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Visit Us
              </NavLink>
            </li>
            <li>
              <a
                href="https://www.facebook.com/PecorinosItalianRestaurant"
                target="_blank"
                rel="noreferrer"
                className="nav-link nav-icon-link"
                aria-label="Visit Pecorino's Facebook page"
                title="Facebook"
              >
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}