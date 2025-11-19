import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:h-screen pt-32 px-6 md:pl-12 lg:pl-28 md:pr-0">
      <motion.div
        className="flex flex-col items-start gap-4 w-full max-w-lg md:max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
          variants={itemVariants}
        >
          Launch products{" "}
          <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            10×
          </span>{" "}
          faster — without backend complexity
        </motion.h1>

        <motion.p
          className="text-slate-300 mt-2 md:mt-4 text-lg md:text-lg"
          variants={itemVariants}
        >
          The next-gen platform for building, deploying, and scaling products —
          all in one place.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center mt-4 w-full sm:w-auto"
          variants={itemVariants}
        >
          <motion.button
            type="button"
            className="bg-linear-to-r from-indigo-500 to-purple-500 text-base md:text-lg text-white font-semibold cursor-pointer px-6 py-3 rounded-lg relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(147, 51, 234, 0.6)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Start Free
          </motion.button>

          <motion.button
            type="button"
            className="bg-slate-700 border border-slate-300 text-white text-base cursor-pointer md:text-lg font-semibold px-6 py-3 rounded-lg"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(226, 232, 240, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden md:block md:w-[800px] lg:w-240"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src="/dashboard.jpg"
          alt="Dashboard Analytics"
          className="w-full h-full rounded-l-xl shadow-2xl border-l border-t border-b border-white/10"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
