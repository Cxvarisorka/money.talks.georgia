import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function CTA() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="contact" className={`relative py-24 sm:py-32 overflow-hidden ${isDark ? 'bg-zinc-950' : 'bg-gray-100'}`}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full filter blur-3xl ${isDark ? 'bg-gold-500/5' : 'bg-gold-500/10'}`} />
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t('cta.title')}
          </h2>

          <p className={`text-lg sm:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t('cta.description')}
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.a
              href="https://www.instagram.com/money.talks.georgia/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-black font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{t('cta.button')}</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="https://www.instagram.com/money.talks.georgia/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 border-2 border-gold-500 text-gold-500 font-bold uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${isDark ? 'hover:bg-gold-500 hover:text-black' : 'hover:bg-gold-500 hover:text-white'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Instagram className="w-5 h-5" />
              <span>{t('cta.contact')}</span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`pt-12 flex flex-wrap items-center justify-center gap-8 text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <span>Delivery Across Georgia</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <span>100% Handmade</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              <span>Custom Orders Available</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
