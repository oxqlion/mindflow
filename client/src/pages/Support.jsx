import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/hero.png";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion";

const Support = () =>{
    const [list, setList] = useState([
        {
            question: 'How to purchase consultation services?',
            answer: 'My Name Is Bahar'
        },
        {
            question: 'How can I access the meditation feature on the website to help with anxiety?',
            answer: 'The meditation feature is easily accessible on the website. Once you log in to your account, you will find a dedicated section for meditation. This feature provides a variety of guided meditation sessions designed to alleviate anxiety and promote relaxation. These sessions are tailored to different needs and levels, allowing you to choose sessions that resonate with you the most.'
        },
        {
            question: 'Can you explain how the journaling with Artificial Intelligence works? How does it assist in managing psychological well-being?',
            answer: 'Our journaling feature utilizes Artificial Intelligence to enhance your mental well-being journey. When you write in your journal, the AI analyzes your entries to detect patterns and emotions. Over time, it provides insights into your emotional state and offers personalized suggestions based on your journal entries. This process helps you gain deeper self-awareness and a clearer understanding of your feelings.'
        },
        {
            question: 'What kinds of psychometric tests are available on the website, and how do they contribute to understanding and addressing my anxiety?',
            answer: 'We offer a range of psychometric tests that can help you gain insights into your mental health and anxiety. These tests are scientifically designed to assess various aspects of your psychological well-being. By completing these tests, you can better understand your anxiety triggers, coping mechanisms, and potential areas of concern. The results can guide you towards targeted resources and techniques.'
        },
        {
            question: 'Is there a way to track my progress over time while using the platform resources to work on my mental health?',
            answer: 'The platform provides a comprehensive progress tracking feature. As you engage with the meditation, journaling, and other tools, your activities and improvements are recorded. You can view your progress over time through visualizations and summaries. This feature allows you to observe your journey, celebrate your achievements, and identify areas where you might want to focus more.'
        },
        {
            question: 'How do the consultations with experts take place on the website? Are these sessions conducted online, and can I choose a specialist based on my specific concerns?',
            answer: 'Our website offers virtual consultation sessions with experienced mental health experts. These sessions are conducted online, providing you with a convenient and confidential way to discuss your concerns. You can select a specialist based on your specific needs, whether its anxiety, stress, or other psychological matters. During these sessions, you will receive professional guidance, coping strategies, and personalized advice tailored to your situation Feel free to explore these features and resources on our website to embark on your journey towards better mental well-being and managing anxiety effectively'
        },
    ])
    return(
        <div className="flex flex-col justify-center items-center">
            <Navbar/>
            <div  className="flex flex-col items-center justify-center bg-primary w-full pt-20 pb-20 rounded-bl-[140px]">
                <div className="flex flex-start w-full px-[200px]">
                    <div className="flex flex-col w-1/2">
                    <p className=" flex flex-start font-sans font-bold text-amber-400 text-xl mt-[15px]">Welcome to the help page</p>
                    <p className=" flex flex-start font-sans font-bold text-white text-5xl mt-[15px]"> How can we assist you?</p>
                    </div>
                    <div></div>
                    <div className="flex flex-col ml-[280px] w-1/3">
                     <img src={Hero} alt="" className="w-[180px] h-[180px]" />
                     </div>
                </div>
            </div>
            <div className="flex flex-start mt-20 justify-center items-center" >
            <div className="list flex flex-col ">
                <p className="font-sans font-extrabold text-amber-600 text-2xl mb-10">Frequently Asked Questions by Other Users</p>
                {/* begin item */}
                {
                    list.map((item, key) =>(
                        <Accordion key={key} datas={item}/>
                    ))
                }
                 {/* end item */}
            </div>
            <div className="flex flex-col ml-[280px] w-1/3">
                     <img src={Hero} alt="" className="w-[180px] h-[180px]" />
            </div>
            </div>
           
        </div>
    )
}

export default Support