import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import CPAOffers from "./components/cpa-offers"
import Footer from "./components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <CPAOffers />
      <Footer />
    </div>
  )
}
