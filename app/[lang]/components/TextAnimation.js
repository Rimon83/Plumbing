import React from 'react'
import Image from "next/image"
const TextAnimation = ({title}) => {
  return (
    <div className="logoContainer">
      <div className='flex justify-center'>
        <Image src="/images/logo.png" alt="logo" width={100} height={100}/>
      </div>
      <div className="textContainer">
        <h2>
          {title}
        </h2>
        <h2>
          {title}
        </h2>
        <h2>
          {title}
        </h2>
        <h2>
          {title}
        </h2>
      </div>
    </div>
  );
}

export default TextAnimation