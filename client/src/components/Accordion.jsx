import React, {useState} from "react";

const Accordion = (props) =>{
    const [item, setItem] = useState(props.datas);
    const handletoggleActive= () =>{
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active: newActive});
    };
    return(
        <div className={`bg[#e9e9e9] px-5 py-5 mb-5 border border-[#c6c6c655] drop-shadow-lg hover:drop-shadow-2xl rounded-md w-[550px] duration-300 group ${item.active === 1 ? 'is-active bg-white' : ''}`} >
        <div className="flex items-center">
            <div className="w-full duration-500 font-sans group-[.is-active]:font-bold">{item.question}</div>
            <div className="text-xl rotate-90 duration-500 cursor-pointer font-sans group-[.is-active]:rotate-[230deg]" onClick={handletoggleActive}>+</div>
        </div>
        <div className="overflow-hidden font-sans font-regular max-h-0 group-[.is-active]:max-h-[1330px] duration-500">
        {item.answer}
        </div>
    </div>
    )
}

export default Accordion;