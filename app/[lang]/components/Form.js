"use client";
import { useState} from "react";



const Form = ({ dict }) => {

  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState();

 



  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmitClick = async (ev) => {
    ev.preventDefault();
    if (
      !clientInfo.name ||
      !clientInfo.email ||
      !clientInfo.message ||
      !clientInfo.subject
    ) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clientInfo),
      });
      if (res.ok) {
        setClientInfo({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
      const { message } = await res.json();
      setError(message)
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      {dict && (
        <div className=" w-full p-10">
          <form
            onSubmit={handleSubmitClick}
            className="w-full flex flex-col gap-6 border-2 border-gray-400 p-6 rounded-lg"
            dir={dict.lang === "ar" ? "rtl" : "ltr"}
          >
            {error && (
              <span className="p-4 mb-2 text-lg font-semibold text-red-500 text-center">
                {error}
              </span>
            )}
            <label>
              <span>{dict.form.name}</span>
              <input
                type="text"
                name="name"
                placeholder={dict.form.name}
                value={clientInfo.name}
                onChange={handleChange}
                className="form_input"
              />
            </label>
            <label>
              <span>{dict.form.email}</span>
              <input
                type="email"
                name="email"
                placeholder={dict.form.email}
                value={clientInfo.email}
                onChange={handleChange}
                className="form_input"
              />
            </label>
            <label>
              <span>{dict.form.subject}</span>
              <input
                type="text"
                name="subject"
                placeholder={dict.form.subject}
                value={clientInfo.subject}
                onChange={handleChange}
                className="form_input"
              />
            </label>
            <label>{dict.form.message}</label>
            <textarea
              placeholder={dict.form.message}
              name="message"
              cols={10}
              rows={10}
              value={clientInfo.message}
              onChange={handleChange}
            ></textarea>
            <input
              type="submit"
              value={dict.form.submit}
              className="form_input bg-blue-600 text-white hover:bg-blue-500 cursor-pointer"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
