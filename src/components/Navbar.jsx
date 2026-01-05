import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ka' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'collection', href: '#collection' },
    { key: 'about', href: '#about' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'contact', href: '#contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? isDark
            ? 'bg-black/90 backdrop-blur-md border-b border-gold-500/20'
            : 'bg-white/90 backdrop-blur-md border-b border-gold-500/20 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-2xl font-serif font-bold">
              <span className={isDark ? 'text-white' : 'text-black'}>Money</span>
              <span className="gold-text">Talks</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                className={cn(
                  'hover:text-gold-500 transition-colors duration-300 text-sm uppercase tracking-wider font-medium',
                  isDark ? 'text-gray-300' : 'text-gray-600'
                )}
                whileHover={{ y: -2 }}
              >
                {t(`nav.${item.key}`)}
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className={cn(
                'p-2 rounded-full transition-all duration-300',
                isDark
                  ? 'text-gold-500 hover:bg-gold-500/10'
                  : 'text-gold-600 hover:bg-gold-500/10'
              )}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 border border-gold-500/50 rounded-full text-gold-500 hover:bg-gold-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={16} />
              <span className="text-sm font-medium">
                {i18n.language === 'en' ? 'GE' : 'EN'}
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Theme Toggle Mobile */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 text-gold-500"
              whileTap={{ scale: 0.95 }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1.5 border border-gold-500/50 rounded-full text-gold-500"
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={14} />
              <span className="text-xs font-medium">
                {i18n.language === 'en' ? 'GE' : 'EN'}
              </span>
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn('p-2', isDark ? 'text-white' : 'text-black')}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              'md:hidden backdrop-blur-md border-t border-gold-500/20',
              isDark ? 'bg-black/95' : 'bg-white/95'
            )}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block hover:text-gold-500 transition-colors duration-300 text-lg py-2',
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  )}
                  whileHover={{ x: 10 }}
                >
                  {t(`nav.${item.key}`)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
