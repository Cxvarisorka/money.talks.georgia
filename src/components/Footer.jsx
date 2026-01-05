import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/money.talks.georgia/' },
    { icon: Facebook, href: '#' },
  ];

  return (
    <footer className={`relative border-t ${isDark ? 'bg-black border-zinc-800' : 'bg-gray-50 border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a href="#home" className="inline-block">
                <span className="text-3xl font-serif font-bold">
                  <span className={isDark ? 'text-white' : 'text-gray-900'}>Money</span>
                  <span className="gold-text">Talks</span>
                </span>
              </a>
              <p className={`mt-4 max-w-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t('footer.tagline')}
              </p>

              {/* Social Links */}
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 border flex items-center justify-center transition-all duration-300 ${isDark ? 'border-zinc-700 text-gray-400 hover:border-gold-500 hover:text-gold-500' : 'border-gray-300 text-gray-500 hover:border-gold-500 hover:text-gold-500'}`}
                    whileHover={{ y: -3 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="space-y-3">
              {['home', 'collection', 'about', 'testimonials'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className={`hover:text-gold-500 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    {t(`nav.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{t('footer.contact.title')}</h4>
            <ul className={`space-y-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>
                <a
                  href={`mailto:${t('footer.contact.email')}`}
                  className="hover:text-gold-500 transition-colors duration-300"
                >
                  {t('footer.contact.email')}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t('footer.contact.phone').replace(/\s/g, '')}`}
                  className="hover:text-gold-500 transition-colors duration-300"
                >
                  {t('footer.contact.phone')}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-16 pt-8 border-t ${isDark ? 'border-zinc-800' : 'border-gray-200'}`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              &copy; {new Date().getFullYear()} {t('footer.brand')}. {t('footer.rights')}
            </p>
            <div className={`flex space-x-6 text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              <a href="#" className="hover:text-gold-500 transition-colors duration-300">
                {t('footer.links.privacy')}
              </a>
              <a href="#" className="hover:text-gold-500 transition-colors duration-300">
                {t('footer.links.terms')}
              </a>
              <a href="#" className="hover:text-gold-500 transition-colors duration-300">
                {t('footer.links.shipping')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Gold Line */}
      <div className="h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
    </footer>
  );
}
