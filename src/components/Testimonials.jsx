import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const reviews = [1, 2, 3];

export default function Testimonials() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="testimonials" className={`relative py-24 sm:py-32 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold-900/10 via-black to-black' : 'bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold-100/30 via-white to-white'}`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold-500 uppercase tracking-[0.3em] text-sm font-medium">
            {t('testimonials.subtitle')}
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold">
            <span className={isDark ? 'text-white' : 'text-gray-900'}>{t('testimonials.title')} </span>
            <span className="gold-text">{t('testimonials.titleHighlight')}</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((id, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`relative p-8 h-full transition-all duration-500 ${isDark ? 'bg-zinc-900/50 border border-zinc-800 hover:border-gold-500/30' : 'bg-gray-50 border border-gray-200 hover:border-gold-500/30'}`}>
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gold-500 flex items-center justify-center">
                    <Quote className="w-4 h-4 text-black" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mb-6 pt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className={`text-lg leading-relaxed italic mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  "{t(`testimonials.reviews.${id}.text`)}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-lg">
                      {t(`testimonials.reviews.${id}.name`).charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {t(`testimonials.reviews.${id}.name`)}
                    </h4>
                    <p className="text-gold-500/80 text-sm">
                      {t(`testimonials.reviews.${id}.title`)}
                    </p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold-500/50" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
