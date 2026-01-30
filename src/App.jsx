import { useState } from 'react'
import Menu from './components/Menu/Menu'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <Hero />
      <Services />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
