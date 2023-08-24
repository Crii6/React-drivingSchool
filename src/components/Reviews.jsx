import { GiTrafficLightsGreen } from "react-icons/gi";
import { reviews } from "../constants";
import { Swiper, SwiperSlide} from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';


const Reviews = () => {

   const [isTextVisible, setIsTextVisible] = useState(false);
   const [currentComsSupp, setCurrentComsSupp] = useState('');
   const [isCardExpanded, setIsCardExpended] = useState(false);

   const handleButtonClick = (comsSupp) => {
    setIsTextVisible(!isTextVisible);
    setCurrentComsSupp(comsSupp);
    setIsCardExpended(!isCardExpanded);
   };


    return (
        <div className="w-[100%] m-auto pt-20">
            <div className="text-center uppercase font-semibold text-3xl max-w-7xl m-auto">
                <h2 className="mb-5">Reviews</h2>
                <p className="flex justify-center text-primary borderLR text-xl"><GiTrafficLightsGreen className="borderLR"/></p>
            </div>
                            <Swiper 
                             effect={'cards'}
                             grabCursor={true}
                             modules={[EffectCards]}
                             className="mySwiper "
                            >
                    {reviews.map((review, index) => {
                        const {nom, Icon, date, coms, coms_supp } = review;

                        return (
                            <SwiperSlide key={index}>
                                    
                            <div className={`bg-gray-100 border border-green-000 w-[260px] h-[380px] m-auto rounded-2xl mt-16 shadow-2xl ${isCardExpanded ? 'expanded' : ''}`}>
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
                                    <div className="mt-6">
                                        <p className="font-semibold">
                                            "{coms}
                                            {coms_supp && (
                                                
                                                <span onClick={() => handleButtonClick(coms_supp)}>
                                                .. {isTextVisible ? ' ' : <MdOutlineKeyboardDoubleArrowDown className="text-4xl text-primary inline-block"/>}
                                                </span>
                                                )}
                                                </p>
                                        {isTextVisible  && coms_supp === currentComsSupp && (
                                             <p className="font-semibold">{coms_supp} {isTextVisible ? <MdOutlineKeyboardDoubleArrowUp onClick={() => handleButtonClick(coms_supp)} className="text-4xl text-primary inline-block"/> : ''}</p> 
                                             
                                         )}
                                
                                    </div>

                             </div>
                         </div>
                            </SwiperSlide>
                        );
                    })}
                        </Swiper>
        </div>
    );
};

export default Reviews;