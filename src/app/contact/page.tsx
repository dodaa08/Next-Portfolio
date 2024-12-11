"use client";
import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const dynamic = 'force-dynamic';
function Page() {
  const ServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string | undefined;
const TemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string | undefined;
const PublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string | undefined;


  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

 
  const sendEmail = async () => {
    try {
      if (!ServiceId || !TemplateId || !PublicKey) {
        throw new Error("Missing EmailJS configuration. Check your environment variables.");
      }
  
      const response = await emailjs.send(
        ServiceId,
        TemplateId,
        {
          from_name: name,
          message: message,
          email: email,
        },
        PublicKey // Pass the PublicKey here
      );
  
      console.log(response);
      toast.success("Email sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (Error) {
      console.error(Error);
      toast.error("Failed to send email. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  

  return (
    <div>
      {/* Toast container */}
      <ToastContainer />
      
      <div className="flex justify-center">
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name"
            className="bg-black text-white rounded-xl py-3 w-72 px-2 border-gray-800 border-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-black text-white rounded-xl py-3 w-72 px-2 border-gray-800 border-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            className="bg-black text-white rounded-xl py-3 w-72 px-2 border-gray-800 border-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className="py-9 flex justify-center">
        <button
          onClick={sendEmail}
          className="bg-blue-400 rounded-xl py-2 px-10 font-mono hover:bg-blue-300 transition duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Page;
