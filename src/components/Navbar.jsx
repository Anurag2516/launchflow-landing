import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const menuContainerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  useEffect(() => {
    const handleOutside = (e) => {
      if (!menuContainerRef.current) return;
      if (!menuContainerRef.current.contains(e.target)) closeMenu();
    };

    document.addEventListener("pointerdown", handleOutside);
    return () => document.removeEventListener("pointerdown", handleOutside);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <h1 className="text-slate-50 font-semibold text-2xl">LaunchFlow</h1>

        <ul className="hidden md:flex items-center gap-10 text-slate-300 font-semibold text-lg">
          <li className="cursor-pointer hover:text-slate-50">Features</li>
          <li className="cursor-pointer hover:text-slate-50">Pricing</li>
          <li className="cursor-pointer hover:text-slate-50">Docs</li>
        </ul>

        <button
          type="button"
          className="hidden md:block cursor-pointer bg-linear-to-r from-indigo-500 to-purple-500 text-slate-50 text-base font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/50"
        >
          Get Started
        </button>

        <div ref={menuContainerRef} className="md:hidden relative">
          <button
            onClick={toggleMenu}
            className="text-slate-50 p-2 hover:bg-slate-800 rounded-lg transition-colors duration-200"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="absolute top-full right-6 mt-2 w-64 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="px-6 py-6 space-y-4">
                  <motion.a
                    href="#features"
                    variants={itemVariants}
                    className="block text-slate-300 font-semibold text-lg py-2 hover:text-slate-50"
                    onClick={closeMenu}
                  >
                    Features
                  </motion.a>

                  <motion.a
                    href="#pricing"
                    variants={itemVariants}
                    className="block text-slate-300 font-semibold text-lg py-2 hover:text-slate-50"
                    onClick={closeMenu}
                  >
                    Pricing
                  </motion.a>

                  <motion.a
                    href="#docs"
                    variants={itemVariants}
                    className="block text-slate-300 font-semibold text-lg py-2 hover:text-slate-50"
                    onClick={closeMenu}
                  >
                    Docs
                  </motion.a>

                  <motion.div variants={itemVariants} className="pt-2">
                    <button
                      type="button"
                      className="w-full bg-linear-to-r from-indigo-500 to-purple-500 text-slate-50 text-base font-semibold px-4 py-3 rounded-lg transition-all duration-300 hover:brightness-110"
                      onClick={closeMenu}
                    >
                      Get Started
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
