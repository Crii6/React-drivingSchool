import { GiTrafficLightsGreen } from "react-icons/gi";
import { reviews } from "../constants";

const Reviews = () => {

   
    return (
        <div className="w-[95%] m-auto pt-20">
            <div className="text-center uppercase font-semibold text-3xl">
                <h2>Reviews</h2>
                <p className="flex justify-center text-primary borderLR text-xl"><GiTrafficLightsGreen className="borderLR"/></p>
            </div>
                    {reviews.map(review => {
                        const {nom, Icon, date, coms } = review

                        return (
                            <div className="bg-gray-200/50 border-green-300 border w-[250px]  m-auto rounded-2xl mt-20">
                                <div className="w-[95%] m-auto p-4 text-center">
                                    <div className="mb-2">
                                        <h3 className="font-semibold text-xl border-b border-black w-[70%] m-auto">{nom}</h3>
                                    </div>
                                    <div className="flex justify-center">
                                        <Icon /><Icon /><Icon /><Icon /><Icon />
                                    </div>
                                    <div className="">
                                        <p className="italic">Publié le {date}</p>
                                    </div>
                                    <div className="mt-10">
                                        <p className="font-semibold">"{coms}"</p>
                                    </div>

                             </div>
                         </div>
                        )
                    })}
        </div>
    );
};

export default Reviews;