import { GiTrafficLightsGreen } from "react-icons/gi";
import { permis } from "../constants";

function Permis() {
  return (
    <div className="py-16 bg-gray-200">
        <div className="w-[90%] text-center max-w-7xl m-auto">
            <h2 className="text-3xl font-semibold uppercase">Categorie Permis</h2>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, deleniti.</p>
            
            <p className="flex justify-center text-primary borderLR text-xl"><GiTrafficLightsGreen className="borderLR"/></p>
        </div>
        <div className="flex flex-col justify-center items-center mt-10 md:flex-row md:flex-wrap md:justify-around max-w-7xl md:m-auto md:mt-12">
            {permis.map( permi => {
                const {title, Icon } = permi

                return (

                <div className="octagon my-5 overflow-hidden">
                    <div className="content">
                        <Icon  className="text-3xl text-primary colorHover"/>
                        <h3 className="text-2xl uppercase font-semibold">{title}</h3>
                        <div className="border-b-2 border-primary colorHover w-[20%] mx-auto max-w-5xl relative"></div>
                        <p className="w-[60%] text-sm text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, eius.</p>
                    </div>
                    
                </div>
                    )
              })}
        </div>
    </div>
  )
}

export default Permis