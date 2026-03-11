import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ProductOffering from './components/ProductOffering'
import WhyMoonfare from './components/WhyMoonfare'
import Team from './components/Team'
import DealTalk from './components/DealTalk'
import Community from './components/Community'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <ProductOffering />
        <WhyMoonfare />
        {/* <Team /> */}
        <DealTalk />
        <Community />
      </main>
      <Footer />
    </div>
  )
}
