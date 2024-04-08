"use client"

import ImageSlider from './components/ImageSlider';
import TextAnimation from './components/TextAnimation';
import {useState, useEffect} from 'react'
import SwitchLang from './components/SwitchLang';
import { usePathname } from 'next/navigation';
import { getDictionary } from './dictionaries/dictionaries';
import Image from "next/image"





const Home = () => {
  const [translate, setTranslate] = useState("");

   const pathname = usePathname();
   const lang = pathname.substring(1, 3);
   useEffect(() => {
     const fetchTranslate = async () => {
       const dict = await getDictionary(lang);
       setTranslate(dict);
     };
     fetchTranslate();
   }, [lang]);
  const images = [
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg",
  ];
  return (
    <div className="mt-40 flex flex-col gap-10">
      <SwitchLang style="sm:hidden flex flex-col gap-2 self-end pr-8" />

      <ImageSlider images={images} />
      {translate && <TextAnimation title={translate.title} />}
      <div className="flex md:p-6 md:flex-row md:justify-around flex-col justify-center items-center mb-10">
        <div className="flex-0.8">
          <Image src="/images/human-2.png" alt="human" width={500} height={400} />
        </div>
        {translate && (
          <div className="flex-1 p-6" dir={lang === "ar" ? "rtl" : "ltr"}>
            <p
              className=" md:text-2xl text-sm mb-6"
              style={{ lineHeight: "38px" }}
            >
              {translate.desc1}
            </p>
            <p className="md:text-2xl text-sm" style={{ lineHeight: "38px" }}>
              {translate.desc2}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home