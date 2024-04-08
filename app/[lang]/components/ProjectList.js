import React from 'react'

const ProjectList = ({projects}) => {
 const {src, alt, title, desc,status} = projects
 return (
   <div className="flex flex-col gap-3 justify-center border border-gray-600 rounded-lg shadow-lg">
     <div className='md:w-[350px] h-[175px]'>
       <img
         src={src}
         alt={alt}
         className="w-full h-full rounded-tl-lg rounded-tr-lg"
       />
     </div>
     <div className='flex flex-col justify-start items-start p-4'>
       <h2 className='md:text-xl text-sm font-bold text-blue-800'>{title}</h2>
       <p className='md:text-lg text-sm text-gray-700'>{desc}</p>
       <p className='md:text-lg text-sm text-green-600 mt-4 '>{status}</p>
     </div>
   </div>
 );
}

export default ProjectList