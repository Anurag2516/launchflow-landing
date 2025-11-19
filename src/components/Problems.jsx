import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingDown } from "lucide-react";

const Problems = () => {
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

  const problems = [
    {
      title: "Backend setup takes weeks",
      description:
        "Hours wasted configuring auth, database, hosting, environments, and deployments.",
      icon: <Clock size={28} className="text-blue-500" />,
    },
    {
      title: "Infrastructure never scales cleanly",
      description:
        "Performance issues, migrations, failures - all handled manually.",
      icon: <TrendingDown size={32} className="text-red-500" />,
    },
    {
      title: "Too many tools, too many bills",
      description:
        "Every service is separate - cost, dashboards, and downtime explode.",
      icon: <DollarSign size={28} className="text-green-500" />,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 py-28 px-6">
      <motion.div
        className="flex flex-col items-center max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-slate-50 text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-tight"
          variants={itemVariants}
        >
          The old way is <span className="text-red-400">slow</span>,{" "}
          <span className="text-orange-400">complex</span>, and{" "}
          <span className="text-yellow-400">expensive</span>.
        </motion.h2>

        <motion.p
          className="text-slate-300 text-base md:text-lg mt-6 max-w-2xl text-center"
          variants={itemVariants}
        >
          Building modern products shouldn't require managing servers,
          configuring databases, and stitching together 8 different tools.
        </motion.p>

        <motion.div
          className="h-0.5 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 mt-8 mb-4"
          variants={itemVariants}
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-start justify-start border border-slate-700 bg-slate-800/30 backdrop-blur-sm p-6 md:p-8 rounded-xl hover:border-slate-600 hover:bg-slate-800/50 group overflow-hidden"
            variants={cardVariants}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.div
              className="text-4xl mb-4 "
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              {problem.icon}
            </motion.div>
            <h3 className="text-xl md:text-2xl text-slate-100 font-bold mb-3 leading-snug">
              {problem.title}
            </h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              {problem.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Problems;
