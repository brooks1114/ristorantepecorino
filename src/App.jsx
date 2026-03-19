import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import FullMenu from './components/FullMenu'
import PizzaCalzoni from './components/PizzaCalzoni'
import BeerWine from './components/BeerWine'
import VisitUs from './components/VisitUs'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="site-shell">
      <Header />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/full-menu" element={<FullMenu />} />
          <Route path="/artisan-pizza-calzoni" element={<PizzaCalzoni />} />
          <Route path="/beer-wine-list" element={<BeerWine />} />
          <Route path="/visit-us" element={<VisitUs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}