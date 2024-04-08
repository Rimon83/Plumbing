import React from 'react'
import Image from "next/image";
import SwitchLang from './SwitchLang';


export const WorkHours = ({dict}) => {
  return (
    <>
      {dict && (
        <div className="mt-40 flex sm:flex-row sm:justify-around gap-4 flex-col-reverse justify-center items-center">
          <div>
            <table
              className="border-separate border-spacing-3 ml-4 text-blue-800"
              dir={dict.lang === "ar" ? "rtl" : "ltr"}
            >
              <caption className="sm:text-3xl font-bold mb-4 text-black">
                {dict.workHours.title}
              </caption>
              <tbody>
                <tr>
                  <td className="sm:text-lg font-bold text-black">
                    {dict.workHours.saturday}{" "}
                  </td>
                  <td>{dict.workHours.time}</td>
                </tr>
                <tr>
                  <td className="sm:text-lg font-bold text-black">
                    {dict.workHours.sunday}
                  </td>
                  <td>{dict.workHours.time}</td>
                </tr>
                <tr>
                  <td className="sm:text-lg font-bold text-black">
                    {dict.workHours.tuesday}
                  </td>
                  <td>{dict.workHours.time}</td>
                </tr>
                <tr>
                  <td className="sm:text-lg font-bold text-black">
                    {dict.workHours.wednesday}
                  </td>
                  <td>{dict.workHours.time}</td>
                </tr>
                <tr>
                  <td className="sm:text-lg font-bold text-black">
                    {dict.workHours.thursday}
                  </td>
                  <td>{dict.workHours.time}</td>
                </tr>
                <tr>
                  <td className="sm:text-lg font-bold text-black">
                    {dict.workHours.friday}
                  </td>
                  <td>{dict.workHours.time}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex flex-col gap-8'>
            <SwitchLang style="sm:hidden flex flex-col gap-2 self-end" />

            <Image
              src="/images/human.png"
              alt="plumber image"
              width={400}
              height={400}
            />
          </div>
        </div>
      )}
    </>
  );
}
