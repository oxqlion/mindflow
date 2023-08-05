import React, {useState} from "react";

const Accordion = (props) =>{
    const [item, setItem] = useState(props.datas);
    const handletoggleActive= () =>{
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active: newActive});
    };
    return(
        <div className={`bg[#e9e9e9] p-5 mb-5 border border-[#c6c6c655] rounded-md w-[280px] duration-500 group ${item.active === 1 ? 'is-active bg-white' : ''}`} >
        <div className="flex items-center">
            <div className="w-full duration-500 font-sans group-[.is-active]:font-bold">{item.question}</div>
            <div className="text-xl rotate-90 duration-500 cursor-pointer font-sans group-[.is-active]:rotate-[270deg]" onClick={handletoggleActive}>+</div>
        </div>
        <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[1330px] duration-500">
        {item.answer}
        </div>
    </div>
    )
}

export default Accordion;