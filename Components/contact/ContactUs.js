import React from "react";
// import FooterColumn from "./FooterColumn";
import text from "@/public/text.json";
import Button from "@/Components/common/button";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-14 3xl:gap-x-32 items-stretch">
        {/* Left side with Google Map */}
        <div className="flex-1 object-cover h-full w-full mt-6 lg:mt-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2534.560646836502!2d15.904298!3d50.56094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e8c9a9b403f9b%3A0x5c0ce473383fab82!2zxb1pxb5rb3ZhIDUwNCwgNTQxIDAxIFRydXRub3YgMS1Ib3Juw60gUMWZZWRtxJtzdMOtLCBDemVjaGlh!5e0!3m2!1sen!2sus!4v1701797771384!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            height={820}
            referrerPolicy="no-referrer-when-downgrade"
            className="max-w-full w-full h-96 md:h-[500px] lg:h-[820px] 3xl:h-[900px]"
          ></iframe>
        </div>

        {/* Right side with contact form */}
        <div className="flex-1 w-full lg:w-1/2 flex flex-col justify-between">
          <div className="py-10 px-8 space-y-6 border border-[#DAE4F2] rounded-lg shadow-lg">
            <h2 className="text-[30px] 3xl:text-4xl leading-10 font-bold text-center">
              Leave Us a Message
            </h2>

            <form className="grid md:grid-cols-2 text-lg lg:grid-cols-1 gap-4 3xl:gap-y-8 3xl:text-2xl">
              <div className="space-y-2">
                <label className="block font-medium" htmlFor="name">
                  Name
                </label>
                <input
                  className="border border-[#DAE4F2] w-full rounded-lg py-[17px] px-[14px] outline-none"
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="space-y-2">
                <label className="block font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  className="border border-[#DAE4F2] w-full rounded-lg py-[17px] px-[14px] outline-none"
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="space-y-2 md:col-span-2 lg:col-span-1">
                <label className="block font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="border border-[#DAE4F2] w-full rounded-lg py-[17px] px-[14px] outline-none h-40"
                  id="message"
                  placeholder="Write you message"
                ></textarea>
              </div>

              <div className="md:col-span-2 lg:col-span-1">
                <Button variant="gradient">
                  <span className="font-bold">Send</span>
                </Button>
              </div>
            </form>
          </div>

          {/* Contact info visible in large screen only */}
          <div className="hidden 3xl:mt-14 lg:grid grid-cols-2 text-[#717171]">
            <div className="text-sm space-y-4 3xl:text-2xl">
              <h3 className="font-semibold mb-6 text-black">Contact Info</h3>
              <div className="flex gap-2 items-center">
                <FaLocationDot className="text-customblue" />
                <span>{text.footer_loc}</span>
              </div>

              <div className="flex gap-2 items-center">
                <BiSolidPhoneCall className="text-customblue" />
                <a href={`tel:${text.footer_tel}`}>{text.footer_tel}</a>
              </div>
            </div>

            <div className="text-sm 3xl:text-2xl space-y-4">
              <h3 className="font-semibold mb-6 text-black">Emails</h3>
              <div className="flex gap-2 items-center">
                <MdEmail className="text-customblue" />
                <a href={`mailto:${text.mail_1}`}>{text.mail_1}</a>
              </div>

              <div className="flex gap-2 items-center">
                <MdEmail className="text-customblue" />
                <a href={`mailto:${text.mail_2}`}>{text.mail_2}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact info visible in small screen only */}
      <div className="flex lg:hidden space-y-8 items-center justify-center flex-col mt-16 text-[#717171]">
        <div className="text-sm space-y-2">
          <h3 className="font-semibold text-black text-center">Contact Info</h3>
          <div className="flex gap-2 items-center justify-center">
            <FaLocationDot size={22} className="text-customblue" />
            <span>{text.footer_loc}</span>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <BiSolidPhoneCall size={22} className="text-customblue" />
            <a href={`tel:${text.footer_tel}`}>{text.footer_tel}</a>
          </div>
        </div>

        <div className="text-sm space-y-2">
          <h3 className="font-semibold text-black text-center">Emails</h3>
          <div className="flex gap-2 items-center justify-center">
            <MdEmail size={22} className="text-customblue" />
            <a href={`mailto:${text.mail_1}`}>{text.mail_1}</a>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <MdEmail size={22} className="text-customblue" />
            <a href={`mailto:${text.mail_2}`}>{text.mail_2}</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
