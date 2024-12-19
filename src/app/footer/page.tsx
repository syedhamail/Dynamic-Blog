"use client";

import Link from "next/link";
import { FaFacebookF, FaHeart, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    //Footer

    <footer className="text-gray-400 bg-slate-800 body-font ">
      <div className="container py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <span className="text-2xl flex text-orange-500 font-bold">
            SHMUQ<p className="text-yellow-500">BLOG</p>
          </span>
        </Link>

        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <h2 className="-ml-10 title-font font-sans text-white  text-sm mb-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
            <br /> been the {`industry's`}
          </h2>
        </div>
        <span className="inline-flex  mt-3 justify-center sm:justify-start">
          <a href="https://www.facebook.com" className="F-icons-F">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" className="F-icons-TYL">
            <RiTwitterXFill />
          </a>
          <a href="https://www.youtube.com" className="F-icons-TYL">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com" className="F-icons-TYL">
            <FaLinkedinIn />
          </a>
        </span>
      </div>

      <div className="bg-slate-900 bg-opacity-75">
        <div className="container mx-auto py-3 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="flex text-white text-sm text-center sm:text-left">
            Designed with <FaHeart className="ml-2 mt-1 mr-2 text-red-500" /> by
            <a
              href="https://github.com/syedhamail"
              className="text-green-300 ml-1"
            >
              Syed Hamail
            </a>
          </p>
          <span className="inline-flex sm:ml-auto justify-center sm:justify-start text-sm font-bold">
            <Link href={"/"}>
              <span className="text-white hover:text-gray-800">Home</span>
            </Link>
            <Link href={"/About"}>
              <span className="ml-5 text-white hover:text-gray-800">About</span>
            </Link>
            <Link href={"/Contact-us"}>
              <span className="ml-5 text-white hover:text-gray-800">
                Contact us
              </span>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
