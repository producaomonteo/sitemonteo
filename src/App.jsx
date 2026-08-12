import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import EcosystemDoors from './components/EcosystemDoors';
import FundadoresSection from './components/FundadoresSection';
import InstitutionalProof from './components/InstitutionalProof';
import LiderancaSection from './components/LiderancaSection';
import PremioSection from './components/PremioSection';
import Testimonials from './components/Testimonials';
import MediaSection from './components/MediaSection';
import FAQ from './components/FAQ';
import PodcastSection from './components/PodcastSection';
import ReceitaPodcastSection from './components/ReceitaPodcastSection';
import TeamSection from './components/TeamSection';
import CulturaSection from './components/CulturaSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Cliente from './pages/Cliente';
import SejaFranqueado from './pages/SejaFranqueado';
import SejaParceiro from './pages/SejaParceiro';
import MexClub from './pages/MexClub';
import SobreMonteo from './pages/SobreMonteo';
import Blog from './pages/Blog';
import Contato from './pages/Contato';

const Home = () => (
  <div className="monteo-app">
    <Header />
    <main>
      <Hero />
      <EcosystemDoors />
      <FundadoresSection />
      <InstitutionalProof />
      <LiderancaSection />
      <PremioSection />
      <Testimonials />
      <MediaSection />
      <ReceitaPodcastSection />
      <PodcastSection />
      <TeamSection />
      <CulturaSection />
      <FinalCTA />
      <FAQ />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cliente" element={<><Header /><Cliente /><Footer /></>} />
        <Route path="/seja-franqueado" element={<><Header /><SejaFranqueado /><Footer /></>} />
        <Route path="/seja-parceiro" element={<><Header /><SejaParceiro /><Footer /></>} />
        <Route path="/profissionais-de-consorcio" element={<><Header /><MexClub /><Footer /></>} />
        <Route path="/sobre-a-monteo" element={<><Header /><SobreMonteo /><Footer /></>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<><Header /><Contato /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
