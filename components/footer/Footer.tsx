import {
  FaFacebook,
  FaInstagram,
  FaMailBulk,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { companys, footerLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-7">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] justify-items-center text-sm gap-y-10">

      {footerLinks.map((section, index) => (
        <div key={section.title} className=" flex flex-col gap-5">
          <span className=" font-bold "> {section.title}</span>
          <div className="flex flex-col gap-3">
            {footerLinks.length - 1 === index && (
              <>
                <div className=" flex flex-col gap-7">
                  <div className=" flex flex-row gap-2 items-start">
                    <FaPhoneAlt className=" text-lg leading-[1.5rem] text-slate-700" />
                    <div className=" flex flex-col gap-2">
                      <p className=" font-normal text-2xl leading-[1.5rem] hover:underline">
                        {section.phone}
                      </p>
                      <div className=" text-[12px] text-slate-700">
                        <div className=" flex justify-between gap-2">
                          <span>
                            {section.workingHours?.weekdays.split("|").at(0)}
                          </span>
                          <span>
                            {section.workingHours?.weekdays.split("|").at(1)}
                          </span>
                        </div>
                        <div className=" flex justify-between gap-2">
                          <span>
                            {section.workingHours?.weekends.split("|").at(0)}
                          </span>
                          <span>
                            {section.workingHours?.weekdays.split("|").at(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 ">
                    <div className="flex gap-3 items-center group">
                      <FaMailBulk className="text-slate-700 text-xl" />
                      <a
                        href="mailto:innotech@gmail.com"
                        className="group-hover:underline "
                        >
                        {section.email}
                      </a>
                    </div>
                    <div className="flex gap-3 items-center group">
                      <FaWhatsapp className="text-slate-700 text-xl" />
                      <a
                        href="https://www.whatsapp.com/?lang=pl_PL"
                        target="_blank"
                        className="group-hover:underline "
                        >
                        {section.phone}
                      </a>
                    </div>
                    <div className="flex gap-3 items-center group">
                      <FaMapMarkerAlt className="text-slate-700 text-xl" />
                      <a href="/kontakt" className="group-hover:underline ">
                        {section.innotechSalons}
                      </a>
                    </div>
                  </div>
                  <div className=" justify-evenly text-xl flex text-slate-700 ">
                    <FaFacebook className="hover:text-[#1877F2] transition duration-200 ease-in-out" />
                    <FaInstagram className=" inline-block bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#FD1D1D]  bg-clip-text hover:text-transparent transition duration-200 ease-in-out" />
                    <FaYoutube className="hover:text-[#FF0000] transition duration-200 ease-in-out" />
                    <FaTwitter className="hover:text-[#1DA1F2] transition duration-200 ease-in-out" />
                  </div>
                </div>
              </>
            )}
            {/* linear-gradient(45deg, #833AB4, #E1306C, #FD1D1D) */}
            {section.links?.map((link) => (
              <Link
              key={link.title}
              href={link.url}
              className=" block hover:underline"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
      </div>

      <div className="flex gap-3 justify-center flex-wrap">
  {companys.map((image) => (
    <Image src={image} key={image} alt="company"height={30} width={40} className=" m-1 object-contain"/>
  ))}
</div>
    </footer>
  );
};

export default Footer;
