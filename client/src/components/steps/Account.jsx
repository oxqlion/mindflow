import {useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext'

export default function Account() {
    const {userData, setUserData} = useContext(StepperContext);
    const handleChange = (e) =>{
        const {name, value}= e.target;
        setUserData({... userData, [name]: value});
    }
  return (
    <div className="flex flex-col">
      <div className="flex w-full gap-20">
      <div className="w-full my-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            {""}
            Username
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="Username"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
        </div>
      </div>
      <div className="w-full my-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            {""}
            Email
        </div>
        <div className="bg-white my-2 p-1  flex border border-gray-200 rounded">
            <input
            onChange={handleChange}
            value={userData["email"] || ""}
            name="email"
            placeholder="Your Email"
            type="email"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
        </div>
      </div>
      </div>
      <div className="flex w-full gap-20">
      <div className="w-full my-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            {""}
            Password
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            type="password"
            placeholder="Password"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
        </div>
      </div>
      <div className="w-full my-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            {""}
            Phone Number
        </div>
        <div className="bg-white my-2 p-1  flex border border-gray-200 rounded">
            <input
            onChange={handleChange}
            value={userData["phone"] || ""}
            name="phone"
            placeholder="Your Phone"
            type="tel"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
        </div>
      </div>
      </div>
      <div className="flex w-full gap-20">
      {/* <div className="w-full my-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            {""}
            Username
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
            onChange={handleChange}
            value={userData["username"] || ""}
            name="username"
            placeholder="Username"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
        </div>
      </div> */}
      {/* <div className="w-full my-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            {""}
            Password
        </div>
        <div className="bg-white my-2 p-1  flex border border-gray-200 rounded">
            <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="Your Password"
            type="password"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
        </div>
      </div> */}
      </div>
      
    </div>
  )
}

