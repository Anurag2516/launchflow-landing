import { motion, useInView, useScroll } from "framer-motion";
import { Link, Rocket, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Solution = () => {
  const containerRef = useRef(null);
  const [maxProgress, setMaxProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.7"],
  });

  useEffect(() => {
    const currentProgress = scrollYProgress.get();
    setMaxProgress(currentProgress);

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setMaxProgress((prev) => Math.max(prev, latest));
    });

    return unsubscribe;
  }, [scrollYProgress]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
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

  const solutions = [
    {
      number: 1,
      title: "Connect your repo",
      description:
        "Import from GitHub, GitLab, or Bitbucket — no config required.",
      icon: <Link size={28} className="text-slate-300" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: 2,
      title: "Choose backend services",
      description: "Enable auth, database, storage, analytics with one click.",
      icon: <Settings size={30} className="text-blue-500" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: 3,
      title: "Deploy instantly",
      description:
        "LaunchFlow builds, scales, and monitors automatically — deployment in under 30 seconds.",
      icon: <Rocket size={28} className="text-orange-500" />,
      color: "from-red-500 to-yellow-500",
    },
  ];
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
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent ">
              LaunchFlow
            </span>{" "}
            handles your backend — you just ship.
          </motion.h1>
          <motion.p
            className="text-slate-300 text-base md:text-lg mt-6 max-w-2xl text-center"
            variants={itemVariants}
          >
            Stop wiring servers, auth, and databases manually. LaunchFlow turns
            your repository into a fully deployed product in minutes.
          </motion.p>

          <motion.div
            className="mt-8 mb-4 w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <motion.div className="max-w-4xl mx-auto relative">
          <motion.div
            className="absolute left-8 md:left-12 top-0 bottom-0 w-[4px] bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 opacity-20"
            style={{ height: `${maxProgress * 100}%` }}
          />

          <motion.div className="space-y-12 md:space-y-16" ref={containerRef}>
            {solutions.map((solution, index) => {
              const cardRef = useRef(null);
              const isInView = useInView(cardRef, { once: true, amount: 0.3 });

              return (
                <motion.div
                  key={index}
                  className="relative flex items-start gap-9 md:gap-8"
                  ref={cardRef}
                  initial={{ opacity: 0, x: -50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className={`relative z-10 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${solution.color} flex items-center justify-center text-2xl md:text-3xl font-bold shadow-lg`}
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {solution.number}
                  </motion.div>

                  <motion.div
                    className="relative flex-1 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8 hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300 group overflow-hidden"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <motion.div className="flex items-center gap-3 mb-3">
                      <motion.span className="text-3xl md:text-4xl">
                        {solution.icon}
                      </motion.span>

                      <motion.h1 className="text-xl md:text-2xl font-bold text-white">
                        {solution.title}
                      </motion.h1>
                    </motion.div>

                    <motion.p className="text-slate-300 text-base md:text-lg leading-relaxed pl-0 md:pl-14">
                      {solution.description}
                    </motion.p>

                    <motion.div
                      className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Solution;
