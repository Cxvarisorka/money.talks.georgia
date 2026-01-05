import './i18n';
import { useTranslation } from 'react-i18next';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function AppContent() {
  const { i18n } = useTranslation();
  const { theme, mounted } = useTheme();
  const isGeorgian = i18n.language === 'ka';
  const isDark = theme === 'dark';

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-white'} ${isGeorgian ? 'font-georgian' : ''}`}>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProducts />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
