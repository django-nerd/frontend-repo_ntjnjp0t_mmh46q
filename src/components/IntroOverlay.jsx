import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('leovora_seen_intro');
    if (!seen) {
      setShow(true);
      const timer = setTimeout(() => {
        localStorage.setItem('leovora_seen_intro', '1');
        setShow(false);
      }, 2600);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-white"
          >
            <motion.h1
              initial={{ letterSpacing: '0.25em' }}
              animate={{ letterSpacing: '0.05em' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-black tracking-widest"
            >
              Leovora
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 h-0.5 w-40 md:w-64 origin-left bg-white/80 mx-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
