import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import MethodSection from './components/MethodSection'
import EbooksSection from './components/EbooksSection'
import BenefitsSection from './components/BenefitsSection'
import QuoteSection from './components/QuoteSection'
import FinalCTA from './components/FinalCTA'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <MethodSection />
        <EbooksSection />
        <BenefitsSection />
        <QuoteSection />
        <FinalCTA />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}
