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
                    <p className=" flex flex-start font-sans font-bold text-amber-300 text-xl mt-[15px]">Tentang MindFlow</p>
                    <p className=" flex flex-start font-sans font-bold text-white text-5xl mt-[15px]">Apa sih MindFlow Itu?</p>
                    <p className=" flex flex-start font-sans font-bold text-white text-lg mt-[15px]">MindFlow adalah sebuah platform pendidikan teknologi yang menyediakan konten Self-Improvement dengan metode “Cognitive Behavioral Therapy” dalam bentuk online.</p>
                    </div>
                    <div></div>
                    <div className="flex flex-col ml-[280px] w-1/3">
                     <img src={Bingung} alt="" className="w-[450px] h-[350px]" />
                     </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-20 pb-20">
                <p className=" flex flex-start font-sans font-bold text-amber-600 text-4xl mt-[15px]">Kenapa MindFlow?</p>
                <div className="flex flex-start w-full px-[80px] gap-20">
                    <div  className="flex flex-col w-1/2">
                        <div className="px-[40px] py-[25px] bg-white rounded-lg mt-[80px] border-black border-2">
                        <div className="flex w-full">
                            <div className="flex items-start gap-10 ">
                                <img src={Book} alt="Book" className="w-[90px] h-[90px] drop-shadow-xl" />
                                <div className="flex flex-col w-90 items-start justify-start">
                                <p className="font-sans font-medium text-orange-700 text-lg">
                                    Journaling yang Mendalam
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Mindflow menawarkan fitur jurnal yang lebih dari sekadar mencatat perasaan harian. Ini dirancang untuk membantu pengguna menjelajahi akar penyebab kecemasan mereka dengan pertanyaan yang memandu dan refleksi mendalam. 
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
                                     Meditasi yang Terarah
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Fitur meditasi di Mindflow bukan hanya tentang relaksasi umum. Ini mencakup meditasi yang difokuskan secara khusus untuk mengurangi kecemasan. membantu pengguna mengatasi ketegangan mental dan emosional.
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
                                Pemantauan Kemajuan yang Membangun Motivasi
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Mindflow menawarkan alat untuk melacak perkembangan pengguna dalam mengelola kecemasan mereka. Ini memberikan dorongan motivasi untuk terus berusaha
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
                                Konsultasi dengan Psikologi Berlisensi  
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Salah satu fitur utama Mindflow adalah kemampuan untuk menghubungkan pengguna dengan psikolog berlisensi secara daring. Ini memberikan akses ke dukungan profesional yang dapat memberikan panduan khusus berdasarkan situasi dan kebutuhan pribadi pengguna.
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
                                Tes Psikotes yang Dipilih dengan Bijak
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Mindflow menawarkan berbagai tes psikologis yang dapat membantu pengguna mengidentifikasi pola pikir atau perilaku tertentu yang mungkin berkaitan dengan kecemasan.
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
                                Komunitas Dukungan yang Solid
                                </p>
                                <p className="font-sans font-regular text-gray-700 text-xs mt-2">
                                Mindflow tidak hanya tentang individu yang berjuang melawan kecemasan. Ini juga menciptakan ruang untuk pengguna berinteraksi, berbagi pengalaman, dan memberikan dukungan satu sama lain.
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