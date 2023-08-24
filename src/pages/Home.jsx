import Navbar from "../components/Navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Titre from "../components/Titre";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Permis from "../components/Permis";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {

    const [count, setCount] = useState(0)

    const path = useLocation().pathname;

  return (
    <header>  
      <div>
        <Navbar />
        <Titre />
      </div>
      <div>
        <Features />
      </div>
      <Stats />
      <Permis />
      <Reviews />
      <Footer />
    </header>
  )
}

export default Home