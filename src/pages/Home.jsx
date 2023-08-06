import Navbar from "../components/Navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Titre from "../components/Titre";
import Features from "../components/Features";
import Stats from "../components/Stats";

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
    </header>
  )
}

export default Home