import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar, Hero, Tulsi, Testimonios, FAQ, Contacto, BlogList, Layout } from "./components";
import { whatsapp } from "./assets";
import { blogPosts } from "./blogData.jsx";

const Taller = lazy(() => import('./components/Taller'));
const Servicios = lazy(() => import('./components/Servicios'));
const BookSection = lazy(() => import('./components/BookSection'));
const TutiTipsSection = lazy(() => import('./components/TutiTipsSection'));
const Agendar = lazy(() => import('./components/Agendar'));
const Blog = lazy(() => import('./components/Blog'));

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación en milisegundos
      once: true,     // si true, la animación se ejecuta solo una vez
    });
  }, []);

  return (
    <Router>
      <a
        href="https://api.whatsapp.com/send?phone=50687845969"
        className="btn-wsp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp"></i>
      </a>
      <div className="relative z-0 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/blog/:id"
            element={
              <Layout>
                <Suspense fallback={<div>Cargando...</div>}>
                  <Blog />
                </Suspense>
              </Layout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

const Home = () => (
  <>
    <div className="bg-cover bg-no-repeat bg-center">
      <Navbar />
      <Hero />
    </div>
    
    <section className="h-auto md:bg-fixed bg-tul-serv-mobile bg-cover bg-center md:bg-tul-serv">
      <Tulsi />
      <Suspense fallback={<div>Cargando Servicios...</div>}>
        <Servicios />
      </Suspense>
      <Suspense fallback={<div>Cargando Servicios...</div>}>
        <BookSection />
      </Suspense>
      <Suspense fallback={<div>Cargando Servicios...</div>}>
        <TutiTipsSection/>
      </Suspense>
      {/* <Suspense fallback={<div>Cargando Taller...</div>}>
        <Taller />
      </Suspense> */}
    </section>
    
    <Suspense fallback={<div>Cargando...</div>}>
      <Testimonios />
      <Agendar />
    </Suspense>
    
    <FAQ />
    <Contacto />
  </>
);

export default App;
