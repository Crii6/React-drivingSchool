import { GiTrafficLightsGreen, GiDirectionSigns } from "react-icons/gi";
import { FeaturesCard } from "../constants";
import interi from '../assets/interi.png'

function Features() {
  return (
    <div className="py-16 bg-gray-gradient" id="features">
      
        <div className="w-[90%] text-center max-w-6xl m-auto">
            <h2 className="text-3xl font-semibold uppercase">Our Features</h2>
            <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, deleniti.</p>
            
            <p className="flex justify-center text-primary borderLR text-xl"><GiTrafficLightsGreen className="borderLR"/></p>
        </div>
        <div className="relative">

          <div className="mt-10  max-w-6xl m-auto lg:block">
              <div className=" hidden lg:flex justify-center mt-14 ">
                <img src={interi} alt="image au volant d'une voiture" className="w-[400px] relative z-[10]" />
              </div>
            <div className="xs:flex xs:flex-wrap lg:absolute lg:top-[2px] lg:bottom-0 max-w-6xl lg:gap-x-36 lg:mb-6 ">

              {FeaturesCard.map( feature => {
                const { title, Icon, text } = feature
                
                return (
                  <div className="mt-8 w-[80%] xs:w-[45%] xs:h-[210px] m-auto flex flex-row p-4 rounded-[20px] hover:bg-white hover:scale-[1.1] shadow-lg border sm:items-center lg:rounded-none lg:h-[115px] lg:w-[42%] lg:mt-0 lg:odd:flex-row-reverse lg:odd:pr-36 lg:even:pl-36 lg:shadow-none lg:border-none lg:hover:bg-primary/25 lg:hover:scale-[1.02] featuresHauteur">
                      
                      <div className="rounded-full w-[64px] h-[64px] flex justify-center xs:items-center">
                        <Icon className="text-4xl text-primary object-contain"/>
                      </div>
                      <div className="flex flex-col ml-6 justify-center">
                        <h3 className="text-2xl mb-4 font-semibold">{feature.title}</h3>
                        <p className="">{feature.text}</p>
                      </div>
                    </div>
                )
              })}
            </div>
          </div>
        </div>

    </div>
  )
}

export default Features