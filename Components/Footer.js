// components/Footer.js
import text from "../public/text.json";
import imgAPI from "@/public/images/ImageApi";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-footer w-full text-white py-4 pt-8 lg:pt-12 font-urbanist text-sm lg:text-lg 3xl:text-xl">
      <div className="max-w-screen-4xl font-urbanist mx-auto px-4 py-8 lg:px-10 grid sm:grid-cols-2 md:grid-cols-3 lg:mx-auto space-y-12 md:space-y-0">
        {/* First Column */}
        <div className="sm:col-span-2 md:col-span-1">
          <Image
            width={168}
            height={76}
            sizes="100vw"
            src={imgAPI.SVG__ICONS.LOGO_WITH_TAG}
            alt="PENSION ATRIUM logo"
            className="mb-4 3xl:w-52 h-auto"
          />

          {/* Social media icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              className="border p-2.5 rounded-full"
              target="_blank"
              rel="noReferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              className="p-2.5 rounded-full bg-gradient-to-r from-textgrad_1 to-textgrad_2"
              target="_blank"
              rel="noReferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Second Column */}
        <div className="space-y-4">
          <h3 className="font-semibold mb-6">Contact Info</h3>
          <div className="flex gap-2 items-center text-slate-200 hover:text-white">
            <FaLocationDot size={22} />
            <span>{text.footer_loc}</span>
          </div>

          <div className="flex gap-2 items-center text-slate-200 hover:text-white">
            <BiSolidPhoneCall size={22} />
            <a href={`tel:${text.footer_tel}`}>{text.footer_tel}</a>
          </div>
        </div>

        {/* Third Column */}
        <div className="space-y-4">
          <h3 className="font-semibold mb-6">Emails</h3>
          <div className="flex gap-2 items-center text-slate-200 hover:text-white">
            <MdEmail size={22} />
            <a href={`mailto:${text.mail_1}`}>{text.mail_1}</a>
          </div>

          <div className="flex gap-2 items-center text-slate-200 hover:text-white">
            <MdEmail size={22} />
            <a href={`mailto:${text.mail_2}`}>{text.mail_2}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-t-slate-500 mt-10">
        <p className="text-center text-xs 3xl:text-sm text-slate-500 mt-4">
          © 2023 Pension Atrium. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
