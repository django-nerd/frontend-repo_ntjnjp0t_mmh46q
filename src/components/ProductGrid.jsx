import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const products = [
  {
    id: 'bed-cloud',
    name: 'CloudSoft Pet Bed',
    price: 89.0,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1678038069651-c2fd8f978fc9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDbG91ZFNvZnQlMjBQZXQlMjBCZWR8ZW58MHwwfHx8MTc2MjUyNTMxM3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'bowl-elevated',
    name: 'Elevated Steel Bowl',
    price: 29.0,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1560712546-3fe9d6f486b8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbGV2YXRlZCUyMFN0ZWVsJTIwQm93bHxlbnwwfDB8fHwxNzYyNTI1MzE0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'toy-rope',
    name: 'Eco Rope Toy',
    price: 16.0,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'cat-tower',
    name: 'Minimal Cat Tower',
    price: 149.0,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1698670324554-b2f8c97060fd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsJTIwQ2F0JTIwVG93ZXJ8ZW58MHwwfHx8MTc2MjUyNTMxNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function ProductGrid({ onAddToCart }) {
  return (
    <section id="products" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          Bestsellers for beloved pets
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-3 left-3 rounded-full bg-black/70 text-white text-xs px-2 py-1">Top rated</div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{p.name}</h3>
                    <div className="mt-1 text-sm text-gray-500 flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> {p.rating}
                    </div>
                  </div>
                  <div className="text-lg font-bold">${p.price.toFixed(2)}</div>
                </div>
                <button
                  onClick={() => onAddToCart(p)}
                  className="mt-4 w-full rounded-xl bg-gray-900 text-white py-2.5 font-semibold hover:bg-black transition"
                >
                  Add to cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
