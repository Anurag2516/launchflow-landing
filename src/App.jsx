import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Problems from "./components/Problems";
import Solution from "./components/Solution";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <Features />
      <Pricing />
      <Footer />
    </>
  );
}
