import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import EcosystemDoors from './components/EcosystemDoors';
import InstitutionalProof from './components/InstitutionalProof';
import GoogleReviews from './components/GoogleReviews';
import Testimonials from './components/Testimonials';
import MediaSection from './components/MediaSection';
import Differentials from './components/Differentials';
import PodcastSection from './components/PodcastSection';
import ReceitaPodcastSection from './components/ReceitaPodcastSection';
import TeamSection from './components/TeamSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Cliente from './pages/Cliente';
import SejaFranqueado from './pages/SejaFranqueado';
import SejaParceiro from './pages/SejaParceiro';
import MexClub from './pages/MexClub';
import SobreMonteo from './pages/SobreMonteo';

const Home = () => (
  <div className="monteo-app">
    <Header />
    <main>
      <Hero />
      <EcosystemDoors />
      <InstitutionalProof />
      <GoogleReviews />
      <Testimonials />
      <MediaSection />
      <Differentials />
      <PodcastSection />
      <ReceitaPodcastSection />
      <TeamSection />
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/seja-franqueado" element={<SejaFranqueado />} />
        <Route path="/seja-parceiro" element={<SejaParceiro />} />
        <Route path="/profissionais-de-consorcio" element={<MexClub />} />
        <Route path="/sobre-a-monteo" element={<SobreMonteo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
