"use client"
import {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Link from 'next/link'
import { getDictionary } from '../dictionaries/dictionaries'

const BurgerMenuIcon = ({lang}) => {
   const [menuIcon, setMenuIcon] = useState(false);
   const [translate, setTranslate] = useState("")
//  const dict = translationContent(lang)
useEffect (() =>{
  const fetchTranslate = async () =>{
const dict = await getDictionary(lang);
setTranslate(dict)
  }
  fetchTranslate()
},[lang])

  
  

 const handleMenuClick = () =>{
  setMenuIcon(!menuIcon)

 }
  return (
    <div>
      <div className="flex lg:hidden" onClick={handleMenuClick}>
        {menuIcon ? (
          <AiOutlineClose size={25} className="cursor-pointer" />
        ) : (
          <AiOutlineMenu size={25} className="cursor-pointer" />
        )}
      </div>
      <div
        className={
          menuIcon
            ? "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center w-full h-screen bg-slate-800 text-white ease-in duration-300 pt-10"
            : "md:hidden absolute top-[100px] right-0 left-[-100%] bottom-0 flex justify-center w-full h-screen bg-slate-800 text-white ease-in duration-300 pt-10"
        }
      >
        {translate && (
          <nav className="flex flex-col md:flex gap-6 text-sm md:text-md uppercase  text-center">
            <Link
              className="hover:text-gray-500"
              href="/"
              onClick={handleMenuClick}
            >
              {translate.home}
            </Link>
            <Link
              className="hover:text-gray-500"
              href={`/${lang}/about`}
              onClick={handleMenuClick}
            >
              {translate.about}
            </Link>
            <Link
              className="hover:text-gray-500"
              href={`/${lang}/projectList`}
              onClick={handleMenuClick}
            >
              {translate.projects}
            </Link>
            <Link
              className="hover:text-gray-500"
              href={`/${lang}/services`}
              onClick={handleMenuClick}
            >
              {translate.services}
            </Link>
            <Link
              className="hover:text-gray-500"
              href={`/${lang}/contact`}
              onClick={handleMenuClick}
            >
              {translate.contact}
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}

export default BurgerMenuIcon