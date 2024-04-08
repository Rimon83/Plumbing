"use client";
import { useEffect, useState } from "react";
import ProjectList from "../components/ProjectList";
import { usePathname } from "next/navigation";
import { getDictionary } from "../dictionaries/dictionaries";
import SwitchLang from "../components/SwitchLang";

const Project = () => {
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
        <h1 className="sm:text-3xl font-bold">
          {translate.projectListTitle}
        </h1>
      )}
      <div className="w-[60px] h-[5px] bg-blue-800 rounded-lg mb-6" />

      <div className="flex justify-around sm:flex-row sm:gap-10 flex-col gap-6 flex-wrap">
        {translate &&
          translate.projectList.map((project, index) => (
            <ProjectList key={index} projects={project} />
          ))}
      </div>
    </div>
  );
};

export default Project;
