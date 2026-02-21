import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Menu from './components/Menu/Menu'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import Trayectoria from './components/Trayectoria/Trayectoria'
import Contacto from './components/Contacto/Contacto'
import Blog from './components/Blog/Blog'
import ServicesDetail from './components/ServicesDetail/ServicesDetail'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import './App.css'

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <>
    <Hero />
    <About />
    <Services />
  </>
)

function App() {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/trayectoria" element={<Trayectoria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<ServicesDetail />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
