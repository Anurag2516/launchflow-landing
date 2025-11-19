import { motion } from "framer-motion";

const Pricing = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="flex flex-col items-center gap-10 py-16 md:py-28 px-6">
        <motion.div
          className="flex flex-col items-center max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-slate-50 text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-tight"
            variants={itemVariants}
          >
            <span className="text-red-400">Simple</span>,{" "}
            <span className="text-orange-400">Transparent </span>pricing. Built
            to scale with you.
          </motion.h1>
          <motion.p
            className="text-slate-300 text-base md:text-lg mt-6 max-w-2xl text-center"
            variants={itemVariants}
          >
            Whether you're launching your first MVP or managing production-grade
            apps, LaunchFlow grows with your business.
          </motion.p>

          <motion.div
            className="mt-8 mb-4 w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"
            variants={itemVariants}
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Pricing;
