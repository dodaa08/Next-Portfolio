"use client";
import React from "react";
import emailjs from "emailjs-com";

function Page() {
  const ServiceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TemplateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_USER_ID;

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const sendEmail = async () => {
    try {
      const response = await emailjs.send(
        ServiceId,
        TemplateId,
        {
          from_name: name,
          message: message,
          email: email,
        },
        publicKey
      );
      console.log(response);
      alert("Email sent successfully");
      // Clear the form fields after successful submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (Error) {
      console.log(Error);
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <>
      <div>
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
    </>
  );
}

export default Page;
