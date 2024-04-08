"use client";
import { useState} from "react";
import {motion} from "framer-motion"


const ImageSlider = ({images}) => {

 const [positionIndex, setPositionIndex] = useState([0,1,2,3,4])

 const handleNext = () =>{
  setPositionIndex ((prevIndexes) =>{
    const updatedIndexes = prevIndexes.map((prevIndex) =>
      (prevIndex + 1) %images.length)
      return updatedIndexes
  })
 }
 const positions = ["center", "left1", "left", "right", "right1"]
 const imageVariants = {
   center: { x: "0%", scale: 1, zIndex: 5 },
   left1: { x: "-50%", scale: 0.7, zIndex: 2 },
   left: { x: "-90%", scale: 0.5, zIndex: 1 },
   right: { x: "90%", scale: 0.5, zIndex: 1 },
   right1: { x: "50%", scale: 0.7, zIndex: 2 },
 };

  return (
    <div className="flex flex-col justify-center items-center h-screen lg:h-[800px] bg-black">
      {images &&
        images.map((image, index) => (
          <div
            className=" w-[150px] h-[200px] md:w-[300px] md:h-[500px] absolute  2xl:w-[800px]" 
            key={index}
          >
            <motion.img
              src={image}
              alt={image}
              className="rounded-[12px] w-[50px]"
              initial="center"
              animate={positions[positionIndex[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              style={{ width: "100%", height: "100%", position: "absolute" }}
            />
          </div>
        ))}
      <button
        className="text-white mt-[300px] bg-indigo-400 rounded py-2 px-4 md:mt-[600px]   "
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
