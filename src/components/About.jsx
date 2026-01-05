import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Hammer, Banknote, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const features = [
  { key: 'handcrafted', icon: Hammer },
  { key: 'premium', icon: Banknote },
  { key: 'exclusive', icon: Sparkles },
];

export default function About() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`relative py-24 sm:py-32 ${isDark ? 'bg-zinc-950' : 'bg-gray-100'}`}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-gold-500 uppercase tracking-[0.3em] text-sm font-medium">
                {t('about.subtitle')}
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold leading-tight">
                <span className={isDark ? 'text-white' : 'text-gray-900'}>{t('about.title')}</span>
                <br />
                <span className="gold-text">{t('about.titleHighlight')}</span>
              </h2>
            </div>

            <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t('about.description')}
            </p>

            {/* Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gold-500/10 border border-gold-500/30 group-hover:bg-gold-500/20 group-hover:border-gold-500/50 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {t(`about.features.${feature.key}.title`)}
                    </h3>
                    <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t(`about.features.${feature.key}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Large Image - Money/Luxury */}
              <div className="col-span-2 relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=500&fit=crop"
                  alt="Money and luxury"
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-gold-500" />
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-gold-500 font-bold text-lg">100%</span>
                  <span className="ml-2 text-gray-300">Handmade in Georgia</span>
                </div>
              </div>

              {/* Smaller Images */}
              <div className="relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?w=400&h=300&fit=crop"
                  alt="Gold details"
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop"
                  alt="Luxury car"
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-gold-500" />
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`absolute -bottom-8 -left-8 border border-gold-500/30 p-6 hidden lg:block ${isDark ? 'bg-black' : 'bg-white'}`}
            >
              <div className="text-4xl font-serif font-bold gold-text">500+</div>
              <div className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Happy Customers</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
