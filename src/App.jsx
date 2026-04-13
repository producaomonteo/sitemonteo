import React from 'react';
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

function App() {
  return (
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
}

export default App;
