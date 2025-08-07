import { Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import FeaturedSection from '../components/FeaturedSection.jsx';
import CtaSection from '../components/CtaSection.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
    <Box width="100%" overflowX="hidden">
      <NavBar />
      <HeroSection />
      <FeaturedSection />
      <CtaSection />
      <ContactForm />
      <Footer />
    </Box>
  );
}

export default Home;