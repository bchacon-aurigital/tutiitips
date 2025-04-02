import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar, Hero } from "./components";

// Componentes lazy con prefetch
const Tulsi = lazy(() => import("./components/Tulsi"));
const Testimonios = lazy(() => import("./components/Testimonios"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contacto = lazy(() => import("./components/Contacto"));
const Layout = lazy(() => import("./components/Layout"));
const Taller = lazy(() => import(/* webpackPrefetch: true */ './components/Taller'));
const Servicios = lazy(() => import(/* webpackPrefetch: true */ './components/Servicios'));
const BookSection = lazy(() => import(/* webpackPrefetch: true */ './components/BookSection'));
const TutiTipsSection = lazy(() => import(/* webpackPrefetch: true */ './components/TutiTipsSection'));
const Agendar = lazy(() => import(/* webpackPrefetch: true */ './components/Agendar'));
const Blog = lazy(() => import(/* webpackPrefetch: true */ './components/Blog'));

// Componente de carga
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#B7B325]"></div>
  </div>
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100, // offset (en px) desde el punto de activación
      delay: 0, // valores de 0 a 3000, con paso de 50ms
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
                <Suspense fallback={<LoadingSpinner />}>
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
      <Suspense fallback={<LoadingSpinner />}>
        <Servicios />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <BookSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <TutiTipsSection />
      </Suspense>
      {/* <Suspense fallback={<LoadingSpinner />}>
        <Taller />
      </Suspense> */}
    </section>
    
    <Suspense fallback={<LoadingSpinner />}>
      <Testimonios />
      <Agendar />
    </Suspense>
    
    <FAQ />
    <Contacto />
  </>
);

export default App;
