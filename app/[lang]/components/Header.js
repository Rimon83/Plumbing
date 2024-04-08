import React from 'react'
import Image from 'next/image'
import BurgerMenuIcon from './BurgerMenuIcon';
import Link from 'next/link';
import { getDictionary } from '../dictionaries/dictionaries';
import SwitchLang from './SwitchLang';





const Header =  async ({lang}) => {
 
  const dict = await getDictionary(lang)


  return (
    <header className="w-full flex justify-between items-center p-4 h-content bg-black fixed top-0 left-0 z-10 text-white">
      <div className="flex gap-2">
        <Image src="/images/logo.png" alt="Logo" width={75} height={75} />
        <span className="mt-6 sm:text-1xl text-sm whitespace-nowrap tracking-widest">
          Mountains Mechanical
        </span>
      </div>
      <div dir={lang === "ar" ? "rtl" : "ltr"}>
        {dict && (
          <nav className="hidden lg:flex gap-8 text-sm md:text-sm uppercase text-center">
            <Link
              className="hover:text-gray-500 tracking-widest text-md"
              href={`/${lang}`}
            >
              {dict.home}
            </Link>
            <Link
              className="hover:text-gray-500 tracking-widest text-md"
              href={`/${lang}/about`}
            >
              {dict.about}
            </Link>
            <Link
              className="hover:text-gray-500 tracking-widest text-md"
              href={`/${lang}/projectList`}
            >
              {dict.projects}
            </Link>
            <Link
              className="hover:text-gray-500 tracking-widest text-md"
              href={`/${lang}/services`}
            >
              {dict.services}
            </Link>
            <Link
              className="hover:text-gray-500 tracking-widest text-md"
              href={`/${lang}/contact`}
            >
              {dict.contact}
            </Link>
          </nav>
        )}
      </div>
      <SwitchLang style="hidden sm:flex flex-col gap-2" />

      <BurgerMenuIcon lang={lang} />
    </header>
  );
};

export default Header