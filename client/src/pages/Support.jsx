import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion";

const Support = () =>{
    const [list, setList] = useState([
        {
            question: 'Whats Your Name?',
            answer: 'My Name Is Bahar'
        },
        {
            question: 'What do You do?',
            answer: 'Fullstack'
        }
    ])
    return(
        <div className="flex flex-col justify-center items-center">
            <Navbar/>
            <div className="flex flex-col h-screen justify-center items-center" >
            <div className="list">
                {/* begin item */}
                {
                    list.map((item, key) =>(
                        <Accordion key={key} datas={item}/>
                    ))
                }
                 {/* end item */}
            </div>
            </div>
           
        </div>
    )
}

export default Support