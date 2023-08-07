import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import LayananKiri from "../assets/Layanan2.png"
import LayananKanan from "../assets/Layanan1.png"
import Checklist from "../assets/checklist.png"
import Delete from "../assets/delete.png"
import JadwalKiri from "../assets/jadwal1.png"
import JadwalTengah from "../assets/jadwal2.png"
import JadwalKanan from "../assets/jadwal3.png"
import ProfileKiri from "../assets/profile1.jpg"
import ProfileTengah from "../assets/profile2.jpg"
import ProfileKanan from "../assets/profile3.jpg" 


const Layanan = () => {
    return (
        <div className="flex flex-col w-full bg-slate-50">
             <Navbar />
             <div  className="flex flex  px-[80px] justify-around bg-primary w-full h-[500px]">
                <img src={LayananKiri} alt="Layanan" className="w-80 h-96 mt-20" />
                <div className="flex flex-col">
                <p className="mt-20 font-sans font-bold text-6xl text-center text-white"> Consultation with Mentor</p>
                <p className="mt-7 font-sans font-medium text-md text-center text-gray-200">Experiencing Anxiety Issues? Overthinking? Struggling to Manage <br /> Emotions & Haven't Discovered Self-Identity? Just consult with <br /> Mindflow!</p>
                <Link className="transition ease-in-out font-sans font-semibold  px-10 ml-40  mr-40 pb-3 pt-3 text-center hover:bg-amber-400 mt-10  rounded-xl text-white hover:text-black bg-black  text-lg" to="/konsultasi">
                Register for Mentoring
            </Link>
                </div>
                <img src={LayananKanan} alt="Layanan" className="w-80 h-96 mt-20" />
             </div>

             <div  className="flex px-[50px] justify-around bg-bg w-full h-[550px] relative">
                <div className="flex flex-col mr-64">
                    <p className="mt-40 font-sans font-bold text-5xl text-left text-amber-500 ">What's the purpose of <br />consulting with a mentor?</p>
                    <ul className="list-disc mt-10 xl:list-disc">
                        <li><p className="font-sans font-semibold text-amber-900 text-xl">You can talk to a trained Mentor.</p></li>
                        <li><p className="font-sans font-semibold text-amber-900 text-xl">Together, find solutions to the issues you're facing.</p></li>
                        <li><p className="font-sans font-semibold text-amber-900 text-xl">Explore solutions through customized worksheets <br />tailored to your problems.</p></li>
                        <li><p className="font-sans font-semibold text-amber-900 text-xl">Get to know yourself better through various <br /> psychological tests.</p></li>
                    </ul>
                </div>
                <div></div>
                <div className="flex flex-col bg-white h-[470px] w-[400px] absolute bottom-[0px] right-[200px] rounded-tr-[80px]">
                    <div className=" flex flex-col justify-content items-center ">
                    <p  className="font-sans font-semibold text-black text-xl mt-20 text-center">Commonly handled issues <br />include:</p>
                    <div className="bg-gray-200 mt-5 w-[300px] h-[5px] rounded-full"></div>
                    </div>
                    <div className="flex flex-col ml-[50px] mt-5">
                    <p className="font-sans font-medium text-md">Overthinking & Excessive Anxiety</p>
                    <p className="font-sans font-medium text-md mt-2">Lack of Self-Confidence</p>
                    <p className="font-sans font-medium text-md mt-2">Loss of Motivation</p>
                    <p className="font-sans font-medium text-md mt-2">Difficulty Finding a Partner</p>
                    <p className="font-sans font-medium text-md mt-2">Unhealthy Relationships</p>   
                    <p className="font-sans font-medium text-md mt-2">Lack of Self-Identity</p>  
                    </div>
                </div>
                <div className="absolute bg-green-400 w-[120px] h-[120px] top-[50px] left-[860px] rounded-full "></div>
                <div className="absolute bg-red-400 w-[100px] h-[100px] top-[300px] right-[150px] rounded-full "></div>
             </div>

             <div  className="flex flex-col justify-content items-center bg-green-400 w-full h-[950px] relative">
           
                <p className="text-center mt-40 font-sans font-semibold text-5xl text-white">Consultation Packages with Mentor</p>
                
                <div className="flex items-center mt-20 justify-around gap-2 w-full px-[40px]">

                    <div className="flex flex-col bg-white pt-[20px] pl-[30px] pr-[30px] items-center rounded-md drop-shadow-xl  pb-[40px] hover:drop-shadow-2xl mb-40">
                        <div className="flex w-full">
                            <div className="flex flex-col">
                                <p className="mt-5 font-sans font-semibold text-3xl text-black ml-5">PAKET</p>
                                <p className="font-sans font-semibold text-3xl text-green-400 ml-5">Super</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="ml-[140px] mt-10 font-sans font-semibold text-4xl text-blue-500">Rp. 145K</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                        <div className="bg-gray-200 mt-5 w-[380px] h-[5px] rounded-full"></div>
                        <div className="flex w-full  relative">
                            <p className="font-sans font-semibold text-2xl text-black mt-[30px] ml-[50px]">1 SESI</p>
                            <div className="bg-gray-200  h-[100px] w-[5px] rounded-full items-center absolute left-[190px]"></div>
                            <p className=" pl-[90px] font-sans font-semibold text-lg text-green-400 mt-5 "> 50-minute consultation <br />session</p>
                        </div>
                        <div className="bg-gray-200 mt-5 w-[380px] h-[5px] rounded-full"></div>
                       <div className="flex flex-col mt-5">
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Checklist} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">Consultation notes </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Checklist} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">worksheets </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1 ">
                            <img src={Checklist} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black"> psychometric test results sheet </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Checklist} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">mental health assessments </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Delete} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">personality assessments </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Delete} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">career interest tests </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Delete} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">psychological distress tests. </p>
                        </div>
                       </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col bg-white pt-[20px] pl-[30px] pr-[30px] items-center rounded-md drop-shadow-xl  pb-[40px] hover:drop-shadow-2xl mb-40">
                        <div className="flex w-full">
                            <div className="flex flex-col">
                                <p className="mt-5 font-sans font-semibold text-3xl text-black ml-5">PAKET</p>
                                <p className="font-sans font-semibold text-3xl text-green-400 ml-5">Super</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="ml-[140px] mt-10 font-sans font-semibold text-4xl text-blue-500">Rp. 145K</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                        <div className="bg-gray-200 mt-5 w-[380px] h-[5px] rounded-full"></div>
                        <div className="flex w-full  relative">
                            <p className="font-sans font-semibold text-2xl text-black mt-[30px] ml-[50px]">1 SESI</p>
                            <div className="bg-gray-200  h-[100px] w-[5px] rounded-full items-center absolute left-[190px]"></div>
                            <p className=" pl-[90px] font-sans font-semibold text-lg text-green-400 mt-5 "> 50-minute consultation <br />session</p>
                        </div>
                        <div className="bg-gray-200 mt-5 w-[380px] h-[5px] rounded-full"></div>
                       <div className="flex flex-col mt-5">
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Checklist} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">Consultation notes </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Checklist} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">worksheets </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1 ">
                            <img src={Checklist} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black"> psychometric test results sheet </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Checklist} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">mental health assessments </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Delete} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">personality assessments </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Delete} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">career interest tests </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Delete} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">psychological distress tests. </p>
                        </div>
                       </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col bg-white pt-[20px] pl-[30px] pr-[30px] items-center rounded-md drop-shadow-xl  pb-[40px] hover:drop-shadow-2xl mb-40">
                        <div className="flex w-full">
                            <div className="flex flex-col">
                                <p className="mt-5 font-sans font-semibold text-3xl text-black ml-5">PAKET</p>
                                <p className="font-sans font-semibold text-3xl text-green-400 ml-5">Super</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="ml-[140px] mt-10 font-sans font-semibold text-4xl text-blue-500">Rp. 145K</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                        <div className="bg-gray-200 mt-5 w-[380px] h-[5px] rounded-full"></div>
                        <div className="flex w-full  relative">
                            <p className="font-sans font-semibold text-2xl text-black mt-[30px] ml-[50px]">1 SESI</p>
                            <div className="bg-gray-200  h-[100px] w-[5px] rounded-full items-center absolute left-[190px]"></div>
                            <p className=" pl-[90px] font-sans font-semibold text-lg text-green-400 mt-5 "> 50-minute consultation <br />session</p>
                        </div>
                        <div className="bg-gray-200 mt-5 w-[380px] h-[5px] rounded-full"></div>
                       <div className="flex flex-col mt-5">
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Checklist} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">Consultation notes </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Checklist} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">worksheets </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1 ">
                            <img src={Checklist} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black"> psychometric test results sheet </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Checklist} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">mental health assessments </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Delete} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">personality assessments </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Delete} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">career interest tests </p>
                        </div>
                        <div className="flex flex-start justify-content gap-5 py-1">
                            <img src={Delete} alt="" className="w-[20px] h-[20px]" />
                            <p className="font-sans font-medium text-md text-black">psychological distress tests. </p>
                        </div>
                       </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
              
                <div className="absolute bg-red-400 w-[100px] h-[100px] top-[240px] right-[570px] rounded-full ">
                    <p className="font-sans font-bold text-lg text-white rotate-[-30deg] mt-7 ml-4">Populer</p>
                </div>
                <div className="absolute bottom-[50px]">
                <Link className="transition ease-in-out font-sans font-semibold  px-20 ml-40  mr-40 pb-3 pt-3 text-center hover:bg-amber-400 mt-10  rounded-xl text-white hover:text-black bg-black  text-lg" to="/contact">
                Register Now
            </Link>
                </div>
             </div>
             <div  className="flex px-[50px] justify-center bg-slate-100 w-full h-[850px] relative" >
                <div className="flex flex-col mt-20 w-[1500px] h-[700px] bg-white rounded-xl">
                    <div className="flex w-full justify-center ">
                    <p className="font-sans mt-20 font-bold text-3xl text-black items-center text center"> Consultation process</p>
                    </div>
                    <div className="flex w-full mt-20 justify-around gap-2 ">
                        <div className="flex flex-col">
                        <img src={JadwalKiri} alt="jadwal" className="w-50 h-64" />
                        <p className="font-sans font-semibold text-xl text-black mt-5">1. Order Product</p>
                        <p  className="font-sans font-regular text-md text-gray mt-5 text-center">Choose a consultation package with <br />the method  that's most convenient for you</p>
                        </div>
                        <div className="flex flex-col">
                        <img src={JadwalTengah} alt="jadwal" className="w-50 h-64" />
                        <p className="font-sans font-semibold text-xl text-black mt-5">2. Schedule Session</p>
                        <p  className="font-sans font-regular text-md text-gray mt-5 text-center">Choose a consultation package with <br />the method  that's most convenient for you</p>
                        </div>
                        <div className="flex flex-col">
                        <img src={JadwalKanan} alt="jadwal" className="w-50 h-64" />
                        <p className="font-sans font-semibold text-xl text-black mt-5">3. Start Consultation</p>
                        <p  className="font-sans font-regular text-md text-gray mt-5 text-center">Start your session in the <br /> Consultation Room with Mindflow.</p>
                        </div>
                    </div>
                </div>
               
             </div>

             <div className="flex flex-col px-[20px] bg-slate-100 w-full h-[1100px] relative"> 
             <div className="flex w-full justify-center">
             <div className="bg-gray-400 mt-40 w-[1000px] h-[5px] rounded-full"></div>
             </div>
             <div className="flex w-full justify-center">
             <p className="font-sans mt-20 font-bold text-6xl text-black items-center text center"> Testimoni   </p>
             </div>
             <div  className="flex items-center mt-40 justify-around gap-2 w-full px-[40px]">

                <div className="flex flex-col bg-white pt-[20px] pl-[30px] pr-[30px] items-center rounded-md drop-shadow-xl  pb-[80px] hover:drop-shadow-2xl mb-40">
                    <div className="flex w-full justify-center">
                    <img src={ProfileKiri} alt="" className="w-[120px] h-[120px] absolute top-[-50px] rounded-full" />
                    </div>
                    <div className="flex w-full justify-center mt-10">
                    <p className="font-sans mt-5 font-semibold text-2xl text-black items-center text-center">John Smith <br />19 Tahun</p>
                    </div>
                    <div className="flex w-full justify-content">
                        <p className="font-sans mt-5 font-semibold text-md text-gray items-center text-left">Fun and insightful. Able to discuss without fear <br /> of being judged. Glad to be helped in mapping out <br /> issues and given advice to address them. Not only <br /> given solutions, but the mentor also encourages us <br />to think and become aware of our current situation.</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white pt-[20px] pl-[30px] pr-[30px] items-center rounded-md drop-shadow-xl  pb-[80px] hover:drop-shadow-2xl mb-40">
                    <div className="flex w-full justify-center">
                    <img src={ProfileTengah} alt="" className="w-[120px] h-[120px] absolute top-[-50px] rounded-full" />
                    </div>
                    <div className="flex w-full justify-center mt-10">
                    <p className="font-sans mt-5 font-semibold text-2xl text-black items-center text-center">Michael Brown <br />15 Tahun</p>
                    </div>
                    <div className="flex w-full justify-content">
                        <p className="font-sans mt-5 font-semibold text-md text-gray items-center text-left">I've discovered approaches to deal with the  challenges <br /> I'm presently encountering and obtained the  <br /> essential perspectives to address these issues. The <br />systematic   solutions are also effectively organized, <br /> pragmatic, and   naturally , customized to my situation.</p>
                    </div>
                </div>
                <div className="flex flex-col bg-white pt-[20px] pl-[30px] pr-[30px] items-center rounded-md drop-shadow-xl  pb-[80px] hover:drop-shadow-2xl mb-40">
                    <div className="flex w-full justify-center">
                    <img src={ProfileKanan} alt="" className="w-[120px] h-[120px] absolute top-[-50px] rounded-full" />
                    </div>
                    <div className="flex w-full justify-center mt-10">
                    <p className="font-sans mt-5 font-semibold text-2xl text-black items-center text-center"> Emily Johnson <br />17 Tahun</p>
                    </div>
                    <div className="flex w-full justify-content">
                        <p className="font-sans mt-5 font-semibold text-md text-gray items-center text-left">I've found ways to address the issues I'm currently <br /> facing and gained the much-needed point of view <br />to tackle those problems. The step-by-step  <br /> solutions are also well-structured, practical,<br /> and of course, tailored to me.</p>
                    </div>
                </div>
             </div>
             </div>
             <div >
                <Footer/>
             </div>
        </div>
    )
}

export default Layanan;