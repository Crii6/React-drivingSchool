import { GiTrafficLightsGreen } from "react-icons/gi";
import { reviews } from "../constants";
import { Swiper, SwiperSlide} from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';


const Reviews = () => {

   
    return (
        <div className="w-[100%] m-auto pt-20">
            <div className="text-center uppercase font-semibold text-3xl">
                <h2 className="mb-5">Reviews</h2>
                <p className="flex justify-center text-primary borderLR text-xl"><GiTrafficLightsGreen className="borderLR"/></p>
            </div>
                            <Swiper 
                             effect={'cards'}
                             grabCursor={true}
                             modules={[EffectCards]}
                             className="mySwiper "
                            >
                    {reviews.map(review => {
                        const {nom, Icon, date, coms } = review

                        return (
                            <SwiperSlide>
                                    
                            <div className="bg-gray-100 border border-gray-400 w-[250px] h-[380px] m-auto rounded-2xl mt-16 shadow-xl">
                                <div className="w-[95%] m-auto p-4 text-center">
                                    <div className="mb-2">
                                        <h3 className="font-semibold text-xl border-b border-black w-[70%] m-auto text-primary">{nom}</h3>
                                    </div>
                                    <div className="flex justify-center text-amber-300">
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
                            </SwiperSlide>
                        )
                    })}
                        </Swiper>
        </div>
    );
};

export default Reviews;