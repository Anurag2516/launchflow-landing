import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const footerLinks = {
    Product: [
      { name: "Features", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Templates", href: "#" },
      { name: "Changelog", href: "#" },
    ],
    Developers: [
      { name: "API Reference", href: "#" },
      { name: "Guides", href: "#" },
      { name: "SDKs", href: "#" },
      { name: "Status", href: "#" },
      { name: "GitHub", href: "#" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" },
    ],
    Legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Security", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  return (
    <>
      <motion.div
        className="py-20 md:py-32 px-6 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-50 mb-6 leading-tight"
            variants={itemVariants}
          >
            Ready to launch{" "}
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              faster?
            </span>
          </motion.h2>

          <motion.div className="space-y-3 mb-10" variants={itemVariants}>
            <p className="text-slate-300 text-lg md:text-xl">
              Build, deploy, and scale your product — without backend
              complexity.
            </p>
            <p className="text-slate-400 text-base md:text-lg">
              Launch your next idea in minutes, not months.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              className="bg-linear-to-r from-indigo-500 to-purple-500 text-slate-50 text-lg font-semibold cursor-pointer px-10 py-4 rounded-xl shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Get Started Free
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <footer className="bg-slate-900/50 border-t border-slate-800 py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <h3 className="text-2xl font-bold text-slate-50 mb-3">
                LaunchFlow
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                The platform for building, deploying, and scaling products —
                without backend complexity.
              </p>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-slate-50 font-semibold mb-4">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-slate-400 text-sm hover:text-slate-50 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 LaunchFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
