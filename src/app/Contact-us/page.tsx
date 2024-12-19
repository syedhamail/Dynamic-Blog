"use client";

import Header from "../header/page";
import Footer from "../footer/page";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

export default function ContactUs() {
  return (
    <main>
      <Header />

      {/*ContactUs Section*/}

      <section className="flex mt-20">
        {/*Left Section*/}

        <div className="ml-5">
          <div className="w-full">
            <div className="border-2 mt-0.5">
              <h1 className="font-medium font-serif text-3xl mt-3 mb-3 ml-3.5 mr-3.5 leading-[1.4] ">
                Contact Us
              </h1>
            </div>

            <div className="border-b-2 border-l-2 border-r-2 text-gray-600 pt-1 pb-8 pl-10 pr-20 ">
              <div className="flex mt-7">
                <span className="flex items-center mt-3 ">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-96 h-10 pl-3 text-sm font-sans bg-white border-2 border-gray-300 text-black rounded"
                  />
                </span>

                <span className="flex items-center mt-3 ml-5">
                  <input
                    type="text"
                    placeholder="E-mail*"
                    className="w-96 h-10 pl-3 text-sm font-sans bg-white border-2 border-gray-300 text-black rounded"
                  />
                </span>
              </div>

              <span className="flex items-center mt-5">
                <input
                  type="text"
                  placeholder="Message*"
                  className="CU-S-M h-28 pb-16 pl-3 text-sm flex items-center font-sans bg-white border-2 border-gray-300 text-black rounded"
                />
              </span>

              <button className="bg-blue-700 text-white CU-S-M py-1 font-medium mt-5 rounded hover:bg-blue-800">
                Send
              </button>
            </div>
          </div>
        </div>

        {/*Right Section*/}

        <div className="ml-8">
          {/*Search Section*/}
          <div className="mt-0.5">
            <h1 className="font-bold font-sans text-sm border-t-2 border-l-2 border-r-2 pl-3.5 pt-1.5 pb-1.5 w-80">
              SOCIAL PLUGIN
            </h1>
            <span className="flex justify-center items-center border-2 w-80 pt-7 pb-7 space-x-6">
              <a href="https://www.facebook.com">
                <FaFacebook className="text-blue-800 w-5 h-5" />
              </a>
              <a href="https://www.twitter.com/">
                <FaTwitter className="text-blue-400 w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram className="text-pink-600 w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube className="text-red-500 w-5 h-5" />
              </a>
              <a href="https://www.skype.com/">
                <FaSkype className="text-blue-500 w-5 h-5" />
              </a>
            </span>
          </div>

          {/*Subscribe Section*/}
          <div className="mt-9">
            <h1 className="font-bold font-sans text-sm border-t-2 border-l-2 border-r-2 pl-3.5 pt-1.5 pb-1.5 w-80">
              SUBSCRIBE US
            </h1>
            <span className="flex justify-center border-2 w-80 pt-4 pb-4">
              <iframe
                width="280"
                height="160"
                src="https://www.youtube.com/embed/4POWiiB1iLg"
                frameBorder="0"
                allowFullScreen
              >
                {/*This video is just like a dummy, you can use your own video*/}
              </iframe>
            </span>
          </div>

          {/*Most Popular Section*/}
          <div className="mt-8">
            <h1 className="font-bold font-sans text-sm border-t-2 border-l-2 border-r-2 pl-3.5 pt-1.5 pb-1.5 w-80">
              MOST POPULAR
            </h1>

            <div className="border-2 w-80">
              {/*Blog 1*/}
              <div className="-mt-3 ml-4">
                <span className=" flex items-center">
                  <Link href={"/Components/TWITBWS"}>
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUwG_baS5c_IyPrzYu1vT2LauhKlZIve0qqAfODV8UyOcTAm4gg0oDCAgJ0KL-hB6xW99YOIENx7NgPDRdO2609p7_yTEXIMgkO5cmTByK5sKQNGY3P7gkVrq-0ZWNOvem9mUAX1gSl5MuNBcUR6FrhZcYPb5-_qs-LkgkcCqwDYpBzsmH6WtJ9dOy/s16000/5.jpg=w1020-h681-p-k-no-nu"
                      alt="Product 1"
                      className="rounded mr-4 w-20 h-16"
                    />
                  </Link>
                  <div>
                    <Link href={"/Components/TWITBWS"}>
                      <p className="font-medium text-sm font-serif hover:text-blue-700 pt-7">
                        Team Work is The Best <br /> Work Solution Of the Fast{" "}
                        <br /> Work to Grow a Better <br /> World
                      </p>
                    </Link>
                    <p className="flex items-center text-xs text-gray-500 font-sans text-blue-900 mt-1">
                      <MdAccessTimeFilled className="mr-1 w-3.5 h-3.5 text-gray-700" />{" "}
                      Dec 2, 2024{" "}
                    </p>
                  </div>
                </span>
              </div>

              {/*Blog 2*/}
              <div className="mt-5 ml-4">
                <span className=" flex items-center">
                  <Link href={"/Components/BTDAVL"}>
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5WjAeO5fMcb_K0muNNmfzTrTEI9PpWtuNpdF_E9ikqQOvKlGYKw_Xc0Y5bvUMpElzJUNN8TQEvvMAk0kaF8yxU-Kw_ZBKK1DGBj0KovCXGzTu2IUK9i4CCkPo5NCwu9afOPJY6AoQpkx5sK-xL5eRqKG6xh9iZfIbgZryNEyNR56qozT8DvVtmanl/w83-h66-p-k-no-nu/4.jpg=w72-h72-p-k-no-nu"
                      alt="Product 1"
                      className="rounded mr-4 w-20 h-16"
                    />
                  </Link>
                  <div>
                    <Link href={"/Components/BTDAVL"}>
                      <p className="font-medium text-sm font-serif hover:text-blue-700 -mt-2">
                        Beginning Two {`Don't`} A <br /> Very Likeness
                      </p>
                    </Link>
                    <p className="flex items-center text-xs text-gray-500 font-sans text-blue-900 mt-1">
                      <MdAccessTimeFilled className="mr-1 w-3.5 h-3.5 text-gray-700" />{" "}
                      Dec 2, 2024{" "}
                    </p>
                  </div>
                </span>
              </div>

              {/*Blog 3*/}
              <div className="mt-4 mb-5 ml-4">
                <span className=" flex items-center">
                  <Link href={"/Components/SMBAFFHL"}>
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimx2-uW3IFmiL3-srMy2AmdJQOaB-0cNaDuERru74JjDPcJG7gsgZvv4sohEww4zzFPe9YOnMhXZ9ngKwXDBgEHrmzdvcQBZ2e_uMct_lx7hwH9FmrEDMFqUUtIguXlh3KeRlXVW3AyXZCtFOAQrEoZA-TKOrLHH1x8gYuwrvBFhSkc_er6AiG-PI9/w83-h66-p-k-no-nu/6.jpg=w72-h72-p-k-no-nu"
                      alt="Product 1"
                      className="rounded mr-4 w-20 h-16"
                    />
                  </Link>
                  <div>
                    <Link href={"/Components/SMBAFFHL"}>
                      <p className="font-medium text-sm font-serif hover:text-blue-700 mt-2">
                        Set May Bearing and <br /> Female Fourth Heaven <br />{" "}
                        Lesser
                      </p>
                    </Link>
                    <p className="flex items-center text-xs text-gray-500 font-sans text-blue-900 mt-1">
                      <MdAccessTimeFilled className="mr-1 w-3.5 h-3.5 text-gray-700" />{" "}
                      Dec 2, 2024{" "}
                    </p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
