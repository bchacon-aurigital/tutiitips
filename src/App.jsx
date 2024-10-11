import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Hero, Tulsi, Testimonios, FAQ, Contacto, BlogList, Layout } from "./components";
import { whatsapp } from "./assets";
import { blogPosts } from "./blogData.jsx";
import React, { Suspense, lazy } from 'react';

const Taller = lazy(() => import('./components/Taller'));
const Servicios = lazy(() => import('./components/Servicios'));
const Agendar = lazy(() => import('./components/Agendar'));
const Blog = lazy(() => import('./components/Blog'));

const App = () => {
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
    
    <section className="h-auto bg-tul-serv-mobile md:bg-tul-serv bg-cover bg-center">
      <Tulsi />
      <Suspense fallback={<div>Cargando Servicios...</div>}>
        <Servicios />
      </Suspense>
      {/* <Suspense fallback={<div>Cargando Taller...</div>}>
        <Taller />
      </Suspense> */}
    </section>
    
    <Suspense fallback={<div>Cargando...</div>}>
      <Agendar />
    </Suspense>
    
    <BlogList />
    
    <Testimonios />
    <FAQ />
    <Contacto />
  </>
);

export default App;
