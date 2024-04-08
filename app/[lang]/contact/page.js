"use client"
import Form from "../components/Form";
import ContactInfo from "../components/ContactInfo";
import { usePathname } from "next/navigation";
import{useState, useEffect} from "react"
import { getDictionary } from "../dictionaries/dictionaries";
import { WorkHours } from "../components/WorkHours";


export default function Contact() {
  const pathname = usePathname();
  const lang = pathname.substring(1,3)
  const [translate, setTranslate] = useState()
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
        <div>
          <WorkHours dict={translate} />

          <div className="flex sm:flex-row sm:justify-between flex-col justify-center items-center mt-6 ">
            <Form dict={translate} />
            <ContactInfo dict={translate} />
          </div>
        </div>
      )}
    </>
  );
}
