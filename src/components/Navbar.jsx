const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-white font-semibold text-2xl">LaunchFlow</h1>
          <ul className="flex items-center gap-10 text-slate-300 font-semibold text-lg">
            <li>Features</li>
            <li>Pricing</li>
            <li>Docs</li>
          </ul>
          <button
            type="button"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-lg hover:shadow-purple-500/50 cursor-pointer text-white text-base font-semibold px-4 py-2 rounded-lg"
          >
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
