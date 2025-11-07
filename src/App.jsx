import { useCallback, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, PawPrint } from 'lucide-react';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import IntroOverlay from './components/IntroOverlay';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [items, setItems] = useState([]);

  const addToCart = useCallback((product) => {
    setItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const total = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items]);

  const handleCheckout = useCallback(() => {
    setCheckoutOpen(true);
  }, []);

  const confirmCheckout = useCallback(() => {
    // Mock checkout success
    setCheckoutOpen(false);
    setItems([]);
    setCartOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <IntroOverlay />

      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2 font-extrabold text-xl tracking-tight">
            <PawPrint className="h-5 w-5 text-gray-800" /> Leovora
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#products" className="hover:text-black/70 transition">Products</a>
            <a href="#about" className="hover:text-black/70 transition">About</a>
            <a href="#contact" className="hover:text-black/70 transition">Contact</a>
          </nav>
          <button onClick={() => setCartOpen(true)} className="relative inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 font-semibold shadow-md hover:bg-black transition">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {items.length > 0 && (
              <span className="ml-1 inline-flex items-center justify-center h-5 min-w-[20px] rounded-full bg-white text-gray-900 text-xs px-1">
                {items.length}
              </span>
            )}
          </button>
        </div>
      </header>

      <main id="home">
        <Hero />

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-b from-white to-gray-50"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Design-forward gear pets adore</h2>
              <p className="text-lg text-gray-600">
                We craft durable, comfortable, and aesthetically pleasing items so your companions feel as good as your home looks.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
                <li className="rounded-xl bg-white border p-4 shadow-sm">Hypoallergenic fabrics</li>
                <li className="rounded-xl bg-white border p-4 shadow-sm">Dishwasher-safe bowls</li>
                <li className="rounded-xl bg-white border p-4 shadow-sm">Sustainably sourced</li>
                <li className="rounded-xl bg-white border p-4 shadow-sm">Vet-approved comfort</li>
              </ul>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1400&auto=format&fit=crop"
                alt="Happy dog and owner"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        <ProductGrid onAddToCart={addToCart} />

        <section id="contact" className="bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold">Questions? We're here for you</h3>
              <p className="mt-2 text-white/80">Reach out to our pet-loving support team for sizing, materials, or order help.</p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white/10 backdrop-blur rounded-2xl p-5 grid grid-cols-1 gap-3"
            >
              <input className="rounded-lg px-4 py-2 bg-white text-gray-900" placeholder="Your email" />
              <textarea className="rounded-lg px-4 py-2 bg-white text-gray-900" rows={3} placeholder="How can we help?" />
              <button className="rounded-lg bg-white text-gray-900 font-semibold px-4 py-2 hover:bg-gray-100 transition">
                Send message
              </button>
            </form>
          </div>
        </section>

        <footer className="bg-gray-50 border-t">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-gray-900 font-semibold mb-3">Imprint</h4>
                <p>Leovora GmbH<br/>Tierstrasse 12, 10115 Berlin, Germany<br/>CEO: Alex Meyer<br/>VAT ID: DE123456789</p>
                <p className="mt-2">Contact: hello@leovora.com<br/>Phone: +49 30 1234567</p>
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold mb-3">Privacy Policy</h4>
                <p>We respect your privacy. We only collect data necessary to process your order and improve our services. We never sell personal data. You can request access, correction or deletion of your data at any time via privacy@leovora.com.</p>
              </div>
              <div>
                <h4 className="text-gray-900 font-semibold mb-3">Terms & Conditions / Right of Withdrawal</h4>
                <p>By placing an order, you accept our terms of sale and delivery. Consumers have a 14-day right of withdrawal starting from the day of receipt. To exercise this right, notify us by email with your order number. Returned items must be unused and in original packaging.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <p className="text-xs text-gray-500">© {new Date().getFullYear()} Leovora. All rights reserved.</p>
              <div className="flex gap-4 text-xs text-gray-500">
                <span>Shipping worldwide</span>
                <span>Secure checkout</span>
                <span>Made with love for animals</span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      <AnimatePresence>
        {checkoutOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-40"
              onClick={() => setCheckoutOpen(false)}
            />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            >
              <h3 className="text-xl font-bold">Checkout</h3>
              <p className="mt-1 text-gray-600">Complete your order securely.</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  confirmCheckout();
                }}
                className="mt-4 space-y-3"
              >
                <input className="w-full rounded-lg border px-3 py-2" placeholder="Full name" required />
                <input className="w-full rounded-lg border px-3 py-2" placeholder="Email" type="email" required />
                <input className="w-full rounded-lg border px-3 py-2" placeholder="Address" required />
                <div className="flex items-center justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="w-full rounded-lg bg-gray-900 text-white py-2.5 font-semibold hover:bg-black transition">
                  Pay now
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
