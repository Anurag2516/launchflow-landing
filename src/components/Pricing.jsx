import { motion } from "framer-motion";
import { Check } from "lucide-react";

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

  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/month",
      tagline: "For solo builders and early MVPs",
      cta: "Start for Free",
      description:
        "Everything you need to launch your project for free — perfect for testing ideas and shipping fast.",
      features: [
        "1 project",
        "Shared compute",
        "Built-in Auth",
        "1GB database",
        "Basic analytics",
        "Community support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      tagline: "For teams that need performance and scale",
      cta: "Upgrade to Pro",
      description:
        "Powerful features, dedicated resources, and everything required to run production-ready applications.",
      features: [
        "Unlimited projects",
        "Dedicated compute",
        "50GB database",
        "API rate boosts",
        "Team collaboration",
        "Priority support",
        "Automatic backups",
        "Custom domains",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      tagline: "For businesses with advanced needs",
      cta: "Contact Sales",
      description:
        "Custom infrastructure, dedicated support, and fully managed backend solutions for large-scale teams.",
      features: [
        "Custom SLAs",
        "VPC deployments",
        "SSO / SAML",
        "Advanced security features",
        "Unlimited storage and compute",
        "Personal success manager",
        "Onboarding and architecture assistance",
      ],
      popular: false,
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
            className="mt-8 mb-4 w-16 h-0.5 bg-linear-to-r from-indigo-500 to-purple-500"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col bg-slate-800/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl group overflow-hidden ${
                plan.popular
                  ? "border-2 border-purple-500 bg-slate-800/50"
                  : "border border-slate-700 hover:border-slate-600"
              }`}
              variants={cardVariants}
              whileHover={{
                scale: 1.01,
                boxShadow: plan.popular
                  ? "0 0 20px rgba(168, 85, 247, 0.3)"
                  : "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              {plan.popular && (
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-linear-to-r from-indigo-500 to-purple-500 text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-slate-50 text-2xl md:text-3xl font-bold mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-slate-50 text-4xl md:text-5xl font-extrabold">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-slate-400 text-lg">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-sm md:text-base">
                  {plan.tagline}
                </p>
              </div>

              <motion.button
                type="button"
                className={`w-full py-3 md:py-3.5 cursor-pointer text-base md:text-lg font-bold rounded-xl transition-colors duration-300 ease-out ${
                  plan.popular
                    ? "bg-linear-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600  shadow-sm shadow-purple-500/30"
                    : "bg-slate-700 text-white hover:bg-slate-600 border border-slate-600 "
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                {plan.cta}
              </motion.button>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed mt-6 mb-6 text-center">
                {plan.description}
              </p>

              <div className="h-px bg-slate-700 mb-6" />

              <div className="flex flex-col gap-3 grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={`shrink-0 mt-0.5 ${
                        plan.popular ? "text-purple-400" : "text-slate-400"
                      }`}
                    />
                    <span className="text-slate-300 text-sm md:text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Pricing;
