import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, DollarSign } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const products = [
  {
    id: 1,
    price: '₾299',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=800&fit=crop',
  },
  {
    id: 2,
    price: '₾349',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=800&fit=crop',
  },
  {
    id: 3,
    price: '₾399',
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600&h=800&fit=crop',
  },
  {
    id: 4,
    price: '₾279',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=800&fit=crop',
  },
];

export default function FeaturedProducts() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="collection" className={`relative py-24 sm:py-32 ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Background Pattern - Dollar Signs */}
      <div className="absolute inset-0 opacity-[0.03] overflow-hidden">
        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-20">
          {[...Array(50)].map((_, i) => (
            <DollarSign key={i} className="w-16 h-16 text-gold-500" />
          ))}
        </div>
      </div>

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
            {t('featured.subtitle')}
          </span>
          <h2 className={`mt-4 text-4xl sm:text-5xl md:text-6xl font-serif font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {t('featured.title')}
          </h2>
          <p className={`mt-6 max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {t('featured.description')}
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Product Card */}
              <div className={`relative overflow-hidden border border-gold-500/50 ${isDark ? 'bg-zinc-900' : 'bg-gray-50'}`}>
                {/* Image Container */}
                <div className={`relative aspect-[3/4] overflow-hidden ${isDark ? 'bg-gradient-to-br from-zinc-900 to-black' : 'bg-gradient-to-br from-gray-100 to-gray-200'}`}>
                  <img
                    src={product.image}
                    alt={t(`featured.products.${product.id}.name`)}
                    className="w-full h-full object-cover opacity-80"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black via-black/40 to-transparent opacity-90' : 'bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90'}`} />

                  {/* Gold Corner Accents - Always visible */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 border-gold-500" />
                  <div className="absolute top-0 right-0 w-10 h-10 border-r-2 border-t-2 border-gold-500" />
                  <div className="absolute bottom-0 left-0 w-10 h-10 border-l-2 border-b-2 border-gold-500" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 border-gold-500" />

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-gold-500 text-black px-3 py-1 font-bold text-sm">
                    {product.price}
                  </div>
                </div>

                {/* Content - Always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif font-bold text-gold-400">
                    {t(`featured.products.${product.id}.name`)}
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm line-clamp-2">
                    {t(`featured.products.${product.id}.description`)}
                  </p>

                  {/* Order Now Link - Always visible */}
                  <a
                    href="https://www.instagram.com/money.talks.georgia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center space-x-2 text-gold-500 text-sm font-bold uppercase tracking-wider"
                  >
                    <span>{t('featured.viewDetails')}</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.instagram.com/money.talks.georgia/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-3 px-8 py-4 border-2 border-gold-500 text-gold-500 font-bold uppercase tracking-wider transition-all duration-300 ${isDark ? 'hover:bg-gold-500 hover:text-black' : 'hover:bg-gold-500 hover:text-white'}`}
          >
            <span>See More on Instagram</span>
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
