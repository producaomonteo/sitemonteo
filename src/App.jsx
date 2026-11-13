import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
import NoticiasHomeSection from './components/NoticiasHomeSection';
import Cliente from './pages/Cliente';
import SejaFranqueado from './pages/SejaFranqueado';
import SejaParceiro from './pages/SejaParceiro';
import MexClub from './pages/MexClub';
import SobreMonteo from './pages/SobreMonteo';
import Contato from './pages/Contato';
import Noticias, { noticiasLoader } from './pages/Noticias';
import NoticiaPost, {
  noticiaPostLoader,
  noticiaPostStaticPaths,
} from './pages/NoticiaPost';
import { sanityClient } from './lib/sanity';
import { NOTICIAS_HOME_QUERY } from './lib/queries';

const homeLoader = async () => {
  try {
    const { destaque, candidatos } = await sanityClient.fetch(NOTICIAS_HOME_QUERY);
    const resto = (candidatos || []).filter((c) => !destaque || c._id !== destaque._id);
    const combinadas = destaque ? [destaque, ...resto] : resto;
    return { noticias: combinadas.slice(0, 3) };
  } catch {
    return { noticias: [] };
  }
};

const Home = () => {
  const { noticias } = useLoaderData() || { noticias: [] };
  return (
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
        <NoticiasHomeSection noticias={noticias} />
      </main>
      <Footer />
    </div>
  );
};

const wrapWithShell = (Page) => (
  <>
    <Page />
    <Footer />
  </>
);

export const routes = [
  { path: '/', element: <Home />, loader: homeLoader },
  { path: '/cliente', element: wrapWithShell(Cliente) },
  { path: '/seja-franqueado', element: wrapWithShell(SejaFranqueado) },
  { path: '/seja-parceiro', element: wrapWithShell(SejaParceiro) },
  { path: '/profissionais-de-consorcio', element: wrapWithShell(MexClub) },
  { path: '/sobre-a-monteo', element: wrapWithShell(SobreMonteo) },
  { path: '/contato', element: wrapWithShell(Contato) },
  {
    path: '/noticias',
    element: <Noticias />,
    loader: noticiasLoader,
    entry: 'src/pages/Noticias.jsx',
  },
  {
    path: '/noticias/:slug',
    element: <NoticiaPost />,
    loader: noticiaPostLoader,
    getStaticPaths: noticiaPostStaticPaths,
    entry: 'src/pages/NoticiaPost.jsx',
  },
];
