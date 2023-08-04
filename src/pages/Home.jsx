import Navbar from "../components/Navbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Titre from "../components/Titre";

const Home = () => {

    const [count, setCount] = useState(0)

    const path = useLocation().pathname;

  return (
    <header>  
      <div>
        <Navbar />
        <div>

          <Titre />
        </div>
      </div>
    </header>
  )
}

export default Home