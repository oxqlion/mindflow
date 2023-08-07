import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../assets/hero.png";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";
import Service from "../assets/support.png";
import People from "../assets/People.png";

const Support = () => {
  const [list, setList] = useState([
    {
      question: "How to purchase consultation services?",
      answer:
        " If you don't already have an account on our platform, you will need to create one. You can do this by visiting our website and clicking on the 'Sign Up' or 'Create Account' button. Fill in the required information, including your name, email address, and password.",
    },
    {
      question:
        "How can I access the meditation feature on the website to help with anxiety?",
      answer:
        "The meditation feature is easily accessible on the website. Once you log in to your account, you will find a dedicated section for meditation. This feature provides a variety of guided meditation sessions designed to alleviate anxiety and promote relaxation. These sessions are tailored to different needs and levels, allowing you to choose sessions that resonate with you the most.",
    },
    {
      question:
        "Can you explain how the journaling with Artificial Intelligence works? How does it assist in managing psychological well-being?",
      answer:
        "Our journaling feature utilizes Artificial Intelligence to enhance your mental well-being journey. When you write in your journal, the AI analyzes your entries to detect patterns and emotions. Over time, it provides insights into your emotional state and offers personalized suggestions based on your journal entries. This process helps you gain deeper self-awareness and a clearer understanding of your feelings.",
    },
    {
      question:
        "What kinds of psychometric tests are available on the website, and how do they contribute to understanding and addressing my anxiety?",
      answer:
        "We offer a range of psychometric tests that can help you gain insights into your mental health and anxiety. These tests are scientifically designed to assess various aspects of your psychological well-being. By completing these tests, you can better understand your anxiety triggers, coping mechanisms, and potential areas of concern. The results can guide you towards targeted resources and techniques.",
    },
    {
      question:
        "Is there a way to track my progress over time while using the platform resources to work on my mental health?",
      answer:
        "The platform provides a comprehensive progress tracking feature. As you engage with the meditation, journaling, and other tools, your activities and improvements are recorded. You can view your progress over time through visualizations and summaries. This feature allows you to observe your journey, celebrate your achievements, and identify areas where you might want to focus more.",
    },
    {
      question:
        "How do the consultations with experts take place on the website? Are these sessions conducted online, and can I choose a specialist based on my specific concerns?",
      answer:
        "Our website offers virtual consultation sessions with experienced mental health experts. These sessions are conducted online, providing you with a convenient and confidential way to discuss your concerns. You can select a specialist based on your specific needs, whether its anxiety, stress, or other psychological matters. During these sessions, you will receive professional guidance, coping strategies, and personalized advice tailored to your situation Feel free to explore these features and resources on our website to embark on your journey towards better mental well-being and managing anxiety effectively",
    },
  ]);
  return (
    <div className="flex flex-col bg-slate-50  ">
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-primary w-full pt-10 pb-10 rounded-bl-[140px]">
        <div className="flex flex-start w-full px-[200px]">
          <div className="flex flex-col w-1/2 pt-10">
            <p className=" flex flex-start font-sans font-bold text-amber-400 text-xl mt-[15px]">
              Welcome to the help page
            </p>
            <p className=" flex flex-start font-sans font-bold text-white text-5xl mt-[15px]">
              {" "}
              How can we assist you?
            </p>
          </div>
          <div></div>
          <div className="flex flex-col ml-[280px] w-1/3">
            <img src={Service} alt="" className="w-[300px] h-[300px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-start w-full px-[100px] mt-20 justify-around ">
        <div className="list flex flex-col ">
          <p className="font-sans font-extrabold text-amber-600 text-2xl mb-10">
            Frequently Asked Questions by Other Users
          </p>
          {/* begin item */}
          {list.map((item, key) => (
            <Accordion key={key} datas={item} />
          ))}
          {/* end item */}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col ml-[100px] mt-10 w-[400px] ">
            <img src={People} alt="" className="w-[400px] h-[400px]" />
          </div>
          <p className="ml-[100px] mt-10 font-sans font-bold text-2xl text-amber-500 ">
            Didn't find what you were <br /> looking for?{" "}
          </p>
          <p className="ml-[100px] mt-5 font-sans font-bold text-xl text-gray-500">
            Feel free to send us a message, and we'll be happy to assist you.
          </p>
          <Link
            className="transition ease-in-out font-sans font-semibold px-10 py-3 ml-[100px] text-center hover:bg-amber-400 mt-5 rounded-xl text-white hover:text-black bg-black  text-lg"
            to="/contact"
          >
            Send Message
          </Link>
        </div>
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default Support;
