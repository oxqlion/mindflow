import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../assets/hero.png";
import Certificate from "../assets/certificate.png";


const Tentang = () =>{
    return(
        <div className="flex flex-col w-full ">
            <Navbar/>
            <div  className="flex flex-col items-center justify-center bg-primary w-full pt-20 pb-20 rounded-bl-[140px]">
                <div className="flex flex-start w-full px-[200px]">
                    <div className="flex flex-col w-1/2">
                    <p className=" flex flex-start font-sans font-bold text-amber-300 text-xl mt-[15px]">Tentang MindFlow</p>
                    <p className=" flex flex-start font-sans font-bold text-white text-5xl mt-[15px]">Apa sih MindFlow Itu?</p>
                    <p className=" flex flex-start font-sans font-bold text-white text-lg mt-[15px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate enim nulla delectus dolorem perspiciatis natus tenetur facere accusamus, iusto culpa vitae harum voluptates mollitia. Ut sequi voluptates illum placeat quaerat?</p>
                    </div>
                    <div></div>
                    <div className="flex flex-col ml-[280px] w-1/3">
                     <img src={Hero} alt="" className="w-80" />
                     </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-20 pb-20">
                <p className=" flex flex-start font-sans font-bold text-black text-4xl mt-[15px]">Kenapa MindFlow?</p>
                <div className="flex flex-start w-full px-[80px] gap-20">
                    <div  className="flex flex-col w-1/2">
                        <div className="px-[40px] py-[25px] bg-gray-200 rounded-lg mt-[80px] border-black border-2">
                        <div className="flex w-full">
                            <div className="flex items-start gap-10 ">
                                <img src={Certificate} alt="Grup" className="w-[90px] h-[90px] drop-shadow-xl" />
                                <div className="flex flex-col w-90 items-start justify-start">
                                <p className="font-sans font-medium text-orange-700 text-sm">
                                    Grup Komunitas Telegram
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Berdiskusi dengan pembicara webinar, mentor, dan peserta webinar lainnya setelah webinar berlangsung
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="px-[40px] py-[25px] bg-gray-200 rounded-lg mt-[40px] border-black border-2">
                        <div className="flex w-full">
                            <div className="flex items-start gap-10 ">
                                <img src={Certificate} alt="Grup" className="w-[90px] h-[90px] drop-shadow-xl" />
                                <div className="flex flex-col w-90 items-start justify-start">
                                <p className="font-sans font-medium text-orange-700 text-sm">
                                    Grup Komunitas Telegram
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Berdiskusi dengan pembicara webinar, mentor, dan peserta webinar lainnya setelah webinar berlangsung
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="px-[40px] py-[25px] bg-gray-200 rounded-lg mt-[40px] border-black border-2">
                        <div className="flex w-full">
                            <div className="flex items-start gap-10 ">
                                <img src={Certificate} alt="Grup" className="w-[90px] h-[90px] drop-shadow-xl" />
                                <div className="flex flex-col w-90 items-start justify-start">
                                <p className="font-sans font-medium text-orange-700 text-sm">
                                    Grup Komunitas Telegram
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Berdiskusi dengan pembicara webinar, mentor, dan peserta webinar lainnya setelah webinar berlangsung
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div  className="flex flex-col w-1/2 ">
                    <div className="px-[40px] py-[25px] bg-gray-200 rounded-lg mt-[80px] border-black border-2">
                        <div className="flex w-full">
                            <div className="flex items-start gap-10 ">
                                <img src={Certificate} alt="Grup" className="w-[90px] h-[90px] drop-shadow-xl" />
                                <div className="flex flex-col w-90 items-start justify-start">
                                <p className="font-sans font-medium text-orange-700 text-sm">
                                    Grup Komunitas Telegram
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Berdiskusi dengan pembicara webinar, mentor, dan peserta webinar lainnya setelah webinar berlangsung
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="px-[40px] py-[25px] bg-gray-200 rounded-lg mt-[40px] border-black border-2">
                        <div className="flex w-full">
                            <div className="flex items-start gap-10 ">
                                <img src={Certificate} alt="Grup" className="w-[90px] h-[90px] drop-shadow-xl" />
                                <div className="flex flex-col w-90 items-start justify-start">
                                <p className="font-sans font-medium text-orange-700 text-sm">
                                    Grup Komunitas Telegram
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Berdiskusi dengan pembicara webinar, mentor, dan peserta webinar lainnya setelah webinar berlangsung
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="px-[40px] py-[25px] bg-gray-200 rounded-lg mt-[40px] border-black border-2">
                        <div className="flex w-full">
                            <div className="flex items-start gap-10 ">
                                <img src={Certificate} alt="Grup" className="w-[90px] h-[90px] drop-shadow-xl" />
                                <div className="flex flex-col w-90 items-start justify-start">
                                <p className="font-sans font-medium text-orange-700 text-sm">
                                    Grup Komunitas Telegram
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Berdiskusi dengan pembicara webinar, mentor, dan peserta webinar lainnya setelah webinar berlangsung
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tentang