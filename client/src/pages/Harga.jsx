import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Certificate from "../assets/certificate.png";
import Test from "../assets/contract.png";
import Video from "../assets/multimedia.png";
import Konsultasi from "../assets/psychology.png";
import Group from "../assets/telegram.png";
import Discount from "../assets/discount.png";
import Mail from "../assets/sms.png";
import Call from "../assets/call.png";
import Time from "../assets/time-fill.png";
import Fb from "../assets/fb.png";
import Ig from "../assets/ig.png";
import Ln from "../assets/ln.png";
import Tw from "../assets/tw.png";

const Harga = () => {
  return (
    <div className="flex flex-col w-full bg-slate-50 ">
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-orange-100 w-full pt-20 pb-28">
        <p className="font-sans font-bold text-amber-600 text-3xl">
        Mindflow services
        </p>
        <p className="font-sans font-medium text-gray-600 text-lg mt-[5px]">
        Discover the Mindflow services that suit you.
        </p>
      </div>
      <div className="flex items-center justify-around gap-2 w-full  relative">
        <div className="flex items-center justify-around gap-2 w-full absolute top-[-50px] px-[120px]">
          <div className="flex flex-col bg-white pt-[20px] pl-[30px] pr-[30px] items-center rounded-md drop-shadow-xl  pb-[40px] hover:drop-shadow-2xl">
            <p className="font-sans font-semibold text-black text-3xl mb-[15px]">
              Webinar
            </p>
            <p className="font-sans font-medium text-gray-600 text-xs text-center">
            Live learning activities through  <br />  the Zoom platform with skilled {" "}
              <br /> mentors and competent <br />
              Mindflow psychologistsg 
            </p>
            <p className="font-sans font-medium text-amber-400 text-sm text-center mt-[20px]">
              {" "}
              Start From{" "}
            </p>
            <p className="font-sans font-medium text-black text-2xl text-center mt-[5px]">
              {" "}
              Rp 100.000
            </p>
            <div className="flex px-[20px] py-[4px] bg-amber-400 rounded-xl justify-center items-center mt-[30px]">
              <p className="font-sans font-semibold text-white text-md">
                Register Now
              </p>
            </div>
            <p className="font-sans font-semibold text-black text-lg text-center my-[20px]">
              {" "}
              BENEFIT
            </p>
            <div className="flex w-full gap-2">
              <div className="flex rounded-full items-start justify-around gap-4 ">
                <img src={Group} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                   Telegram Community Group
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Engage in discussions with webinar speakers, mentors, and other participants after the webinar has concluded.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mt-[20px]">
              <div className="flex rounded-full items-start justify-around gap-4">
                <img src={Certificate} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                    Certificate
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Proof of Participation   
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mt-[20px]">
              <div className="flex rounded-full items-start justify-around gap-4">
                <img src={Test} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                  Psychological Tests
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Psychological tests that can help you know yourself better  
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mt-[20px]">
              <div className="flex rounded-full items-start justify-around gap-4">
                <img src={Discount} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                  60% Discount
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Get attractive discounts on other MindFlow services 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white pt-[20px] pl-[30px] pr-[30px] items-center rounded-md drop-shadow-xl  pb-[40px] hover:drop-shadow-2xl">
            <p className="font-sans font-semibold text-black text-3xl mb-[15px]">
              Online
            </p>
            <p className="font-sans font-medium text-gray-600 text-xs text-center">
            Kegiatan pembelajaran online <br /> bersama mentor dan psikolog <br />handal Satu Persen secara <br /> praktis dan fleksibel
            </p>
            <p className="font-sans font-medium text-amber-400 text-sm text-center mt-[20px]">
              {" "}
              Mulai dari{" "}
            </p>
            <p className="font-sans font-medium text-black text-2xl text-center mt-[5px]">
              {" "}
              Rp 180.000
            </p>
            <div className="flex px-[20px] py-[4px] bg-amber-400 rounded-xl justify-center items-center mt-[30px]">
              <p className="font-sans font-semibold text-white text-md">
                Daftar Sekarang
              </p>
            </div>
            <p className="font-sans font-semibold text-black text-lg text-center my-[20px]">
              {" "}
              BENEFIT
            </p>
            <div className="flex w-full gap-2">
              <div className="flex rounded-full items-start justify-around gap-4 ">
                <img src={Group} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                    Grup Komunitas Telegram
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Berdiskusi dengan pembicara webinar, mentor, dan peserta webinar lainnya setelah webinar berlangsung
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mt-[20px]">
              <div className="flex rounded-full items-start justify-around gap-4">
                <img src={Certificate} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                    Sertifikat
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Bukti keikutsertaan   
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mt-[20px]">
              <div className="flex rounded-full items-start justify-around gap-4">
                <img src={Test} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                    Tes Psikologi
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Psikotes yang dapat membantumu mengenal diri.  
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mt-[20px]">
              <div className="flex rounded-full items-start justify-around gap-4">
                <img src={Discount} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                    Diskon 60%
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Dapatkan diskon menarik ke layanan Satu Persen lainnya. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white pt-[20px] pl-[30px] pr-[30px] items-center rounded-md drop-shadow-xl  pb-[40px] hover:drop-shadow-2xl">
            <p className="font-sans font-semibold text-black text-3xl mb-[15px]">
              Mentoring
            </p>
            <p className="font-sans font-medium text-gray-600 text-xs text-center">
            Layanan konsultasi 1-on-1 <br />bersama Mentor Satu Persen <br />          <br />             <br />
            </p>
            <p className="font-sans font-medium text-amber-400 text-sm text-center mt-[20px]">
              {" "}
              Mulai dari{" "}
            </p>
            <p className="font-sans font-medium text-black text-2xl text-center mt-[5px]">
              {" "}
              Rp 100.000
            </p>
            <div className="flex px-[20px] py-[4px] bg-amber-400 rounded-xl justify-center items-center mt-[30px]">
              <p className="font-sans font-semibold text-white text-md">
                Daftar Sekarang
              </p>
            </div>
            <p className="font-sans font-semibold text-black text-lg text-center my-[20px]">
              {" "}
              BENEFIT
            </p>
            <div className="flex w-full gap-2">
              <div className="flex rounded-full items-start justify-around gap-4 ">
                <img src={Konsultasi} alt="Konsultasi" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                    Konsultasi 1-on-1
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Berdiskusi dengan pembicara webinar, mentor, dan peserta webinar lainnya setelah webinar berlangsung
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mt-[20px]">
              <div className="flex rounded-full items-start justify-around gap-4">
                <img src={Certificate} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                    Sertifikat
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Bukti keikutsertaan   
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mt-[20px]">
              <div className="flex rounded-full items-start justify-around gap-4">
                <img src={Test} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                    Tes Psikologi
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Psikotes yang dapat membantumu mengenal diri.  
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mt-[20px]">
              <div className="flex rounded-full items-start justify-around gap-4">
                <img src={Discount} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                    Diskon 60%
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Dapatkan diskon menarik ke layanan Satu Persen lainnya. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white pt-[20px] pl-[30px] pr-[30px] items-center rounded-md drop-shadow-xl pb-[40px] hover:drop-shadow-2xl">
            <p className="font-sans font-semibold text-black text-3xl mb-[15px]">
              Konseling
            </p>
            <p className="font-sans font-medium text-gray-600 text-xs text-center">
            Layanan konsultasi 1-on-1 <br />bersama Mentor Satu Persen <br />          <br />             <br />
            </p>
            <p className="font-sans font-medium text-amber-400 text-sm text-center mt-[20px]">
              {" "}
              Mulai dari{" "}
            </p>
            <p className="font-sans font-medium text-black text-2xl text-center mt-[5px]">
              {" "}
              Rp 250.000
            </p>
            <div className="flex px-[20px] py-[4px] bg-amber-400 rounded-xl justify-center items-center mt-[30px]">
              <p className="font-sans font-semibold text-white text-md">
                Daftar Sekarang
              </p>
            </div>
            <p className="font-sans font-semibold text-black text-lg text-center my-[20px]">
              {" "}
              BENEFIT
            </p>
            <div className="flex w-full gap-2">
              <div className="flex rounded-full items-start justify-around gap-4 ">
                <img src={Group} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                    Grup Komunitas Telegram
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Berdiskusi dengan pembicara webinar, mentor, dan peserta webinar lainnya setelah webinar berlangsung
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mt-[20px] ">
              <div className="flex rounded-full items-start justify-around gap-4">
                <img src={Certificate} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                    Sertifikat
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Bukti keikutsertaan   
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mt-[20px]">
              <div className="flex rounded-full items-start justify-around gap-4">
                <img src={Test} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                    Tes Psikologi
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Psikotes yang dapat membantumu mengenal diri.  
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mt-[20px]">
              <div className="flex rounded-full items-start justify-around gap-4">
                <img src={Discount} alt="Grup" className="w-6 h-6 drop-shadow-xl" />
                <div className="flex flex-col w-48 items-start justify-start">
                  <p className="font-sans font-medium text-black text-sm">
                    Diskon 60%
                  </p>
                  <p className="font-sans font-regular text-gray-400 text-xs mt-2">
                  Dapatkan diskon menarik ke layanan Satu Persen lainnya. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[800px]">
      <Footer />
      </div>
     
    </div>
  );
};

export default Harga;
