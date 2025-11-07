import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2 } from 'lucide-react';

export default function CartDrawer({ open, onClose, items, onRemove, onCheckout }) {
  const total = useMemo(() => items.reduce((s, i) => s + i.price * i.qty, 0), [items]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[420px] z-50 bg-white shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <h3 className="text-lg font-bold">Your Cart</h3>
              <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-5 space-y-4">
              {items.length === 0 && <p className="text-gray-500">Your cart is empty.</p>}
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500">Qty {item.qty}</div>
                  </div>
                  <div className="font-semibold">${(item.price * item.qty).toFixed(2)}</div>
                  <button onClick={() => onRemove(item.id)} className="p-2 rounded-full hover:bg-gray-100">
                    <Trash2 className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t p-5 space-y-3">
              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold">Total</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              <button
                disabled={!items.length}
                onClick={onCheckout}
                className="w-full rounded-xl bg-gray-900 text-white py-3 font-semibold hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proceed to checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
