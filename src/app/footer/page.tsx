"use client";

import Link from "next/link";
import { FaFacebookF, FaHeart, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
  return (
    //Footer

    <footer className="text-gray-400 bg-slate-800 body-font">
      <div className="container mx-auto py-10 px-5 flex flex-wrap md:flex-nowrap flex-col md:flex-row items-center">
        {/* Logo Section */}
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 md:w-1/3"
        >
          <span className="text-2xl flex text-orange-500 font-bold">
            SHMUQ<p className="text-yellow-500">BLOG</p>
          </span>
        </Link>

        {/* Description Section */}
        <div className="flex-grow md:w-1/3 text-center md:text-left">
          <p className="text-sm text-white sm:text-center leading-relaxed line-clamp-3">
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the <br />
            industry{`'`}s standard dummy text.
          </p>
        </div>

        {/* Social Icons Section */}
        <div className="flex md:w-1/3 justify-center md:justify-end mt-4 md:mt-0">
          <a
            href="https://www.facebook.com"
            className="mx-2 text-xl text-white hover:text-blue-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com"
            className="mx-2 text-xl text-white hover:text-blue-400"
          >
            <RiTwitterXFill />
          </a>
          <a
            href="https://www.youtube.com"
            className="mx-2 text-xl text-white hover:text-red-500"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com"
            className="mx-2 text-xl text-white hover:text-blue-700"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-slate-900 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <p className="text-white text-sm text-center sm:text-left flex justify-center items-center mb-2 sm:mb-0">
            Designed with <FaHeart className="mx-1 text-red-500 " /> by
            <a
              href="https://github.com/syedhamail"
              className="text-green-300 ml-1 hover:underline"
            >
              Syed Hamail
            </a>
          </p>
          <span className="inline-flex sm:ml-auto justify-center sm:justify-start text-sm font-bold mt-2 sm:mt-0">
            <Link href={"/"}>
              <span className="text-white hover:text-gray-500 mx-2">Home</span>
            </Link>
            <Link href={"/About"}>
              <span className="text-white hover:text-gray-500 mx-2">About</span>
            </Link>
            <Link href={"/Contact-us"}>
              <span className="text-white hover:text-gray-500 mx-2">
                Contact us
              </span>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
