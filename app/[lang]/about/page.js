"use client"
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { getDictionary } from "../dictionaries/dictionaries";
import SwitchLang from "../components/SwitchLang";
const About = () => {
  const pathname = usePathname();
  const lang = pathname.substring(1, 3);
  const [translate, setTranslate] = useState();
  useEffect(() => {
    const fetchTranslate = async (lang) => {
      const dict = await getDictionary(lang);
      setTranslate(dict);
    };
    fetchTranslate(lang);
  }, [lang]);

  return (
    <>
      {translate && (
        <div
          className={`mt-40 mb-10 sm:p-24 p-4 flex flex-col gap-8 w-full`}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          <SwitchLang style="sm:hidden flex flex-col gap-2 self-end" />

          <h1 className="sm:text-3xl font-bold">{translate.aboutUs.title}</h1>
          <div className="w-[60px] h-[5px] bg-blue-800 rounded-lg mb-6" />

          <p className="sm:text-xl text-sm" style={{ lineHeight: "38px" }}>
            {translate.aboutUs.paragraph1}
          </p>
          <p className="sm:text-xl text-sm" style={{ lineHeight: "38px" }}>
            {translate.aboutUs.paragraph2}
          </p>
          <p className="sm:text-xl text-sm" style={{ lineHeight: "38px" }}>
            {translate.aboutUs.paragraph3}
          </p>
        </div>
      )}
    </>
  );
};

export default About;
