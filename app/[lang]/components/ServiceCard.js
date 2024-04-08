import React from 'react'
import Image from "next/image";


const ServiceCard = ({services}) => {
 const {residential} = services
  return (
    <div className="flex p-10 md:w-[400px] md:h-[150px] w-full flex-col flex-wrap gap-2 justify-center items-center border-2 border-gray-400 rounded-lg bg-slate-300 hover:bg-slate-200 text-blue-800 shadow-lg">
      <h2 className='md:text-xl text-md text-center'>{residential}</h2>
    </div>
  );
}

export default ServiceCard