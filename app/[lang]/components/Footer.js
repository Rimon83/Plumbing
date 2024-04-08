import React from 'react'
import Link from "next/link";
import { getDictionary } from "../dictionaries/dictionaries";

const Footer = async ({lang}) => {
   
     const dict = await getDictionary(lang)


  return (
    <div className="bg-black">
      <div className="flex sm:flex-row flex-col sm:justify-around justify-center gap-6 text-xs p-[2rem] text-white h-content">
        <div
          className="flex first:flex-col sm:w-1/3 w-full justify-center items-center mt-11"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          <h1 className="mb-4 font-bold md:text-lg text-md tracking-widest">
            {dict.footer.about}
          </h1>
          <p className="tracking-widest">{dict.footer.paragraph}</p>
        </div>
        <div
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="flex flex-col justify-center items-center sm:items-start mb-[2.5rem]"
        >
          <h1 className="mb-4 font-bold md:text-lg text-md tracking-widest">
            {dict.footer.links}
          </h1>
          {dict && (
            <nav className=" flex flex-col sm:items-start justify-center items-center gap-3 uppercase">
              <Link
                className="hover:text-gray-500 tracking-widest"
                href={`/${lang} tracking-widest`}
              >
                {dict.home}
              </Link>
              <Link
                className="hover:text-gray-500 tracking-widest"
                href={`/${lang}/about`}
              >
                {dict.about}
              </Link>
              <Link
                className="hover:text-gray-500 tracking-widest"
                href={`/${lang}/projectList`}
              >
                {dict.projects}
              </Link>
              <Link
                className="hover:text-gray-500 tracking-widest"
                href={`/${lang}/services`}
              >
                {dict.services}
              </Link>
              <Link
                className="hover:text-gray-500 tracking-widest"
                href={`/${lang}/contact`}
              >
                {dict.contact}
              </Link>
            </nav>
          )}
        </div>
        <div
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="flex flex-col justify-center items-center mb-[5.5rem]"
        >
          <h1 className="mb-3 font-bold md:text-lg text-md">
            {dict.footer.contact}
          </h1>
          <p className="tracking-widest">mountainsmechanical@gmail.com</p>
          <p className="tracking-widest">07505355365</p>
        </div>
      </div>

      <div className="mt-6 p-8 flex justify-center items-center text-white">
        <p className="text-sm tracking-widest ">Copyright ©️ 2021 Mountains Mechanical</p>
      </div>
    </div>
  );
}

export default Footer