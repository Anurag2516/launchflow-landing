const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 max-w-4xl mx-auto py-36 px-12">
        <h1 className="text-4xl font-bold text-slate-50 ">
          Launch products 10× faster
        </h1>
        <h2 className="text-lg font-medium text-slate-300 text-center">
          The next-generation platform for building, deploying, and scaling your
          startup—all without backend complexity.
        </h2>
        <div className="flex gap-3 items-center mt-4">
          <button
            type="button"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/50 cursor-pointer text-lg text-white font-semibold px-4 py-3 rounded-lg"
          >
            Start Free Trial
          </button>
          <button
            type="button"
            className="bg-slate-700 transition-all duration-300 hover:scale-105 border border-slate-300 cursor-pointer text-white text-lg font-semibold px-4 py-3 rounded-lg"
          >
            Watch Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
