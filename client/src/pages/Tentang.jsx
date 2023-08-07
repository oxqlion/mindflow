import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../assets/hero.png";
import Footer from "../components/Footer"
import Book from "../assets/book_card.png";
import People from "../assets/People_card.png";
import Sarjana from "../assets/Sarjana_card.png";
import Gadget from "../assets/Gadget_card.png";
import Pena from "../assets/Pena_card.png";
import Medal from "../assets/Medal_card.png";
import Bingung from "../assets/bingung.png";


const Tentang = () =>{
    return(
        <div className="flex flex-col w-full bg-slate-50 ">
            <Navbar/>
            <div  className="flex flex-col items-center justify-center bg-primary w-full pt-20 pb-20 rounded-bl-[140px]">
                <div className="flex flex-start w-full px-[200px]">
                    <div className="flex flex-col w-1/2">
                    <p className=" flex flex-start font-sans font-bold text-amber-300 text-xl mt-[15px]">About MindFlow</p>
                    <p className=" flex flex-start font-sans font-bold text-white text-5xl mt-[15px]">What is MindFlow?</p>
                    <p className=" flex flex-start font-sans font-bold text-white text-lg mt-[15px]">MindFlow is a technology education platform that provides Self-Improvement content with the Cognitive Behavioral Therapy method in online form.</p>
                    </div>
                    <div></div>
                    <div className="flex flex-col ml-[280px] w-1/3">
                     <img src={Bingung} alt="" className="w-[450px] h-[350px]" />
                     </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-20 pb-20">
                <p className=" flex flex-start font-sans font-bold text-amber-600 text-4xl mt-[15px]">Why MindFlow?</p>
                <div className="flex flex-start w-full px-[80px] gap-20">
                    <div  className="flex flex-col w-1/2">
                        <div className="px-[40px] py-[25px] bg-white rounded-lg mt-[80px] border-black border-2">
                        <div className="flex w-full">
                            <div className="flex items-start gap-10 ">
                                <img src={Book} alt="Book" className="w-[90px] h-[90px] drop-shadow-xl" />
                                <div className="flex flex-col w-90 items-start justify-start">
                                <p className="font-sans font-medium text-orange-700 text-lg">
                                Deep Journaling
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Mindflow offers journaling features that go beyond just recording daily feelings. It is designed to help users explore the root causes of their anxiety with guiding questions and deep reflections.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="px-[40px] py-[25px] bg-white rounded-lg mt-[40px] border-black border-2 drop-shadow-xl">
                        <div className="flex w-full">
                            <div className="flex items-start gap-10 ">
                                <img src={People} alt="People" className="w-[90px] h-[90px] drop-shadow-xl" />
                                <div className="flex flex-col w-90 items-start justify-start">
                                <p className="font-sans font-medium text-orange-700 text-lg">
                                Guided Meditation
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                The meditation feature in Mindflow is not just about general relaxation. It includes specifically focused meditations to reduce anxiety and help users overcome mental and emotional tension.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="px-[40px] py-[25px] bg-white rounded-lg mt-[40px] border-black border-2 drop-shadow-xl">
                        <div className="flex w-full">
                            <div className="flex items-start gap-10 ">
                                <img src={Sarjana} alt="Sarjana" className="w-[90px] h-[90px] drop-shadow-xl" />
                                <div className="flex flex-col w-90 items-start justify-start">
                                <p className="font-sans font-medium text-orange-700 text-lg">
                                Progress Monitoring that Builds Motivation
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Mindflow provides tools to track users progress in managing their anxiety. It offers motivational encouragement to keep striving
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div  className="flex flex-col w-1/2 ">
                    <div className="px-[40px] py-[25px] bg-white rounded-lg mt-[80px] border-black border-2 drop-shadow-xl">
                        <div className="flex w-full">
                            <div className="flex items-start gap-10 ">
                                <img src={Gadget} alt="Gadget" className="w-[90px] h-[90px] drop-shadow-xl" />
                                <div className="flex flex-col w-90 items-start justify-start">
                                <p className="font-sans font-medium text-orange-700 text-lg">
                                Consultations with Licensed Psychologists  
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                One of the main features of Mindflow is the ability to connect users with licensed psychologists online. It provides access to professional support that can offer specific guidance based on users situations and individual needs
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="px-[40px] py-[25px] bg-white rounded-lg mt-[40px] border-black border-2 drop-shadow-xl">
                        <div className="flex w-full">
                            <div className="flex items-start gap-10 ">
                                <img src={Pena} alt="Pena" className="w-[90px] h-[90px] drop-shadow-xl" />
                                <div className="flex flex-col w-90 items-start justify-start">
                                <p className="font-sans font-medium text-orange-700 text-lg">
                                Thoughtfully Selected Psychometric Test
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Mindflow offers a variety of psychological tests that can help users identify specific thought patterns or behaviors that may be related to anxiety
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="px-[40px] py-[25px] bg-white rounded-lg mt-[40px] border-black border-2 drop-shadow-xl">
                        <div className="flex w-full">
                            <div className="flex items-start gap-10 ">
                                <img src={Medal} alt="Medal" className="w-[90px] h-[90px] drop-shadow-xl" />
                                <div className="flex flex-col w-90 items-start justify-start">
                                <p className="font-sans font-medium text-orange-700 text-lg">
                                Solid Support Community
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Mindflow is not just about individuals struggling with anxiety. It also creates a space for users to interact, share experiences, and support each other.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Tentang