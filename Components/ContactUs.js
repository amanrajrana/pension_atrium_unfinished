import React from "react";
// import FooterColumn from "./FooterColumn";
import text from "../public/text.json";
import imgAPI from "@/public/images/ImageApi";

const ContactUs = () => {
  return (
    <div>
      <p className="md:text-2x text-2xl font-bold text-center mt-12 mb-8">
        Contact Us
      </p>

      <div className="flex flex-col-reverse lg:flex-row justify-center mx-10 mb-20 items-stretch">
        {/* Left side with Google Map */}
        <div className="flex-1 w-full mt-6 lg:mt-0 lg:w-4/5 p-4">
          <iframe
            title="Google Map"
            className="w-full h-full"
            src="https://www.google.com/maps/embed/v1/place?q=Žižkova+504,+541+01+Trutnov+1-Horní+Předměstí,+Czechia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right side with contact form */}
        <div className="flex-1  w-full lg:w-1/2 p-4 ">
          <div className="border rounded shadow p-9 py-10">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2 text-center">
                Leave Us a Message
              </h2>
            </div>

            <form className="h-full flex flex-col justify-between" id="form">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm  mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm  mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm  mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <div className="flex items-center justify-center">
                <button
                  className=" w-full  text-white font-bold py-2 px-4 rounded bg-gradient-to-r from-btngrad_1 to-btngrad_2 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
