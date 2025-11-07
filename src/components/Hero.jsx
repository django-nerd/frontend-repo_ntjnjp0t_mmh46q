import { motion } from 'framer-motion';
import { ShoppingBag, PawPrint } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hr92vV8i6cCwQwKQ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white/0 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-sm">
            <PawPrint className="mr-2 h-4 w-4" />
            Premium pet essentials
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
            Care, comfort, and joy for every pet
          </h1>
          <p className="mt-4 text-white/80 text-lg md:text-xl">
            Leovora brings thoughtfully designed products for cats, dogs, and small animals—built to last and loved by pets.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-semibold shadow-lg shadow-black/20 hover:shadow-black/30 transition">
              <ShoppingBag className="h-4 w-4" /> Shop products
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full bg-transparent border border-white/30 px-5 py-3 font-semibold hover:bg-white/10 transition">
              Learn more
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
