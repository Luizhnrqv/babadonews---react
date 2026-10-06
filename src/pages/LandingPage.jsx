import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Hero from '../sections/Hero'
import Destaques from '../sections/Destaques'
import Categorias from '../sections/Categorias'
import Esportes from '../sections/Esportes'
import Newsletter from '../sections/Newsletter'

function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Destaques />
        <Categorias />
        <Esportes />
      </main>

      <Newsletter />
      <Footer />
    </>
  )
}

export default LandingPage