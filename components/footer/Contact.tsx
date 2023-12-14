import React from "react";

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

const Contact = ({
  phone,

  workingHours,
  email,
  innotechSalons,
}: FooterSectionProps) => {
  return (
    <>
      <li className=" flex flex-col gap-7 max-w-min">
        <div className=" flex flex-row gap-2 items-start">
          <FaPhoneAlt className=" text-lg leading-[1.5rem] text-slate-700" />
          <div className=" flex flex-col gap-2">
            <p className=" font-normal text-2xl leading-[1.5rem] hover:underline">
              {phone}
            </p>
            <div className=" text-[12px] text-slate-700">
              <div className=" flex justify-between gap-2">
                <span>{workingHours?.weekdays.split("|").at(0)}</span>
                <span>{workingHours?.weekdays.split("|").at(1)}</span>
              </div>
              <div className=" flex justify-between gap-2">
                <span>{workingHours?.weekends.split("|").at(0)}</span>
                <span>{workingHours?.weekdays.split("|").at(1)}</span>
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
              {email}
            </a>
          </div>
          <div className="flex gap-3 items-center group">
            <FaWhatsapp className="text-slate-700 text-xl" />
            <a
              href="https://www.whatsapp.com/?lang=pl_PL"
              target="_blank"
              className="group-hover:underline "
            >
              {phone}
            </a>
          </div>
          <div className="flex gap-3 items-center group">
            <FaMapMarkerAlt className="text-slate-700 text-xl" />
            <a href="/kontakt" className="group-hover:underline ">
              {innotechSalons}
            </a>
          </div>
        </div>
        <div className=" justify-evenly text-xl flex text-slate-700 ">
          <FaFacebook className="hover:text-[#1877F2] transition duration-200 ease-in-out" />
          <FaInstagram className=" hover:text-[#E1306C] transition duration-200 ease-in-out" />
          <FaYoutube className="hover:text-[#FF0000] transition duration-200 ease-in-out" />
          <FaTwitter className="hover:text-[#1DA1F2] transition duration-200 ease-in-out" />
        </div>
      </li>
    </>
  );
};

export default Contact;
