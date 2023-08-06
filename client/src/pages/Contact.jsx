import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Navbar from "../components/Navbar"
import Hero2 from "../assets/hero2.png"
import Admin from "../assets/admin.png"
import Footer from "../components/Footer"

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_asmlua8",
        "template_jab4jhi",
        form.current,
        "VqRtu-tg7O_BsujO0"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center">
            <Navbar/>
            <div className="flex bg-bg border-4 mb-40 mt-20 rounded-xl">
            <div className="bg-bg pt-20 w-1/2">
              <img src={Admin} alt=""  className=""/>
            </div>
            <div className="border-2 py-10 px-10 bg-teal-500 rounded-lg w-1/2">
            <h1 className="font-sans font-bold text-4xl text-white">Contact Us</h1>
        <StyledContactForm>  
      <form ref={form} onSubmit={sendEmail}>
        <label className="font-sans font-semibold text-lg text-white">Name</label>
        <input type="text" name="user_name" />
        <label className="font-sans font-semibold text-lg text-white">Email</label>
        <input type="email" name="user_email" />
        <label className="font-sans font-semibold text-lg text-white">Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="font-sans font-semibold text-md text-black hover:"/>
      </form>
    </StyledContactForm>
            </div>
            </div>
            <div className="w-full">
              <Footer/>
            </div>
    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #000000;
      color: white;
      border: none;
      transition: background-color 0.2s ease-in-out;
      font-weight: bold;
      font-size: 16px;

      &:hover {
        background-color: #BFA5A5;
    }
  }
`;