import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineClose } from "react-icons/ai";
const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ghnfwa",
        "template_ilbvupz",
        form.current,
        "66heUM7d5IvEC2RoT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
          setName("");
          setEmail("");
          setMessages("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="flex flex-col items-center md:mx-32 mx-4 md:gap-16 gap-16 pt-7"
    >
      <h1 className="md:text-5xl text-4xl font-bold  leading-tight">
        Ready to take your{" "}
        <span className=" font-light bg-transparent">Business </span>
        to the next level?
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="md:w-[540px] w-11/12 contact-card md:py-9 py-7 md:px-16 px-4 flex flex-col gap-4"
      >
        <h2 className="bg-transparent md:text-4xl text-3xl font-bold text-center">
          Contact Us
        </h2>
        <div className="bg-transparent flex flex-col text-black">
          <label className="bg-transparent text-xl">Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name ..."
            className="bg-white outline-none rounded-xl p-2 text-black px-4 mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="bg-transparent flex flex-col">
          <label className="bg-transparent text-xl">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email-Id ..."
            className="bg-white outline-none rounded-xl p-2 text-black px-4 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="bg-transparent flex flex-col ">
          <label className="bg-transparent text-xl">Message</label>
          <textarea
            placeholder="Your Message ..."
            name="message"
            className=" md:h-44 h-32 resize-none outline-none bg-white rounded-xl p-2 text-black px-4 mt-1"
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
            required
          />
        </div>
        <div className=" bg-transparent flex justify-center">
          <button
            type="submit"
            value="Send"
            className="bg-[#11112B] p-2 px-6 rounded-lg mt-3 w-4/6"
          >
            Send !
          </button>
        </div>
      </form>
      {message && (
        <div className="fixed inset-0 bg-[#969695]/[0.33] z-50 grid place-items-center px-3.5 py-1 border-none">
          <div className="flex flex-col gap-5 h-2/6 md:w-4/12  rounded-xl shadow-2xl bg-[#11112b]">
            <div className="bg-transparent text-center h-full flex flex-col mx-4 my-4 items-center">
              <div className="flex justify-end text-xl font-bold w-full">
                <AiOutlineClose
                  onClick={() => setMessage(false)}
                  className=" cursor-pointer"
                />
              </div>
              <div className="w-full h-full gap-6 flex flex-col mt-6">
                <h2 className=" bg-transparent text-3xl font-bold spacefont mt-6">
                  Thanks for reaching out!
                </h2>
                <div className=" bg-transparent spacefont text-2xl">
                  We will get back to you soon.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
