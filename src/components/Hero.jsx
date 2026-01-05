import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className={`absolute inset-0 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/20 via-black to-black' : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-100/50 via-gray-50 to-white'}`} />

        {/* Animated floating dollar signs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-gold-500"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            >
              <DollarSign size={40 + i * 5} />
            </motion.div>
          ))}
        </div>

        <div className="absolute top-0 left-0 w-full h-full">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${isDark ? 'bg-gold-500/5' : 'bg-gold-500/10'} rounded-full filter blur-3xl animate-float`} />
          <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 ${isDark ? 'bg-gold-500/5' : 'bg-gold-500/10'} rounded-full filter blur-3xl animate-float animation-delay-200`} />
        </div>
      </div>

      {/* Gold Border Accents - Thicker and more prominent */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l-4 border-t-4 border-gold-500/40" />
      <div className="absolute top-0 right-0 w-40 h-40 border-r-4 border-t-4 border-gold-500/40" />
      <div className="absolute bottom-0 left-0 w-40 h-40 border-l-4 border-b-4 border-gold-500/40" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r-4 border-b-4 border-gold-500/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Subtitle with Dollar Signs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center space-x-3"
          >
            <DollarSign className="w-5 h-5 text-gold-500" />
            <span className="text-gold-500 uppercase tracking-[0.2em] text-sm sm:text-base font-bold">
              {t('hero.subtitle')}
            </span>
            <DollarSign className="w-5 h-5 text-gold-500" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight"
          >
            <span className={isDark ? 'text-white' : 'text-gray-900'}>{t('hero.title')}</span>
            <br />
            <span className="gold-text">{t('hero.titleHighlight')}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6 pt-4"
          >
            <motion.a
              href="#collection"
              className="group relative text-center px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold uppercase tracking-wider overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/money.talks.georgia/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-center px-10 py-4 border-2 border-gold-500 text-gold-500 font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center ${isDark ? 'hover:bg-gold-500 hover:text-black' : 'hover:bg-gold-500 hover:text-white'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('hero.ctaSecondary')}
            </motion.a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
