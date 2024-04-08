"use client";
import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { usePathname } from "next/navigation";
import { getDictionary } from "../dictionaries/dictionaries";
import SwitchLang from "../components/SwitchLang";

const Services = () => {
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
    <div
      className="mt-40 sm:p-24 p-10 flex flex-col gap-10"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <SwitchLang style="sm:hidden flex flex-col gap-2 self-end" />

      {translate && (
        <h1 className="sm:text-3xl font-bold">{translate.serviceTitle}</h1>
      )}
      <div className="w-[60px] h-[5px] bg-blue-800 rounded-lg mb-6" />

      <div className="flex flex-col justify-center items-center">
        {translate && (
          <h2 className="sm:text-2xl font-bold text-md mb-[4rem]">
            {translate.residentialTitle}
          </h2>
        )}
        <div className="flex justify-start items-center sm:flex-row sm:gap-10 flex-col gap-4 flex-wrap">
          {translate &&
            translate.serviceCards.map((service, index) => (
              <ServiceCard key={index} services={service} />
            ))}
        </div>
      </div>

      {translate && (
        <div className="flex flex-col justify-center items-center mt-[4rem] md:text-lg text-md md:p-[2rem] w-full">
          <h2 className="sm:text-2xl font-bold text-md mb-[4rem]">
            {translate.renovationTitle}
          </h2>
          <p className="mb-6">{translate.renovationDesc1}</p>
          <p>{translate.renovationDesc2}</p>
        </div>
      )}
    </div>
  );
};

export default Services;
