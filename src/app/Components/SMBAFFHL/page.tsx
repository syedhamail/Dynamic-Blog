"use client";

import Header from "@/app/header/page";
import Footer from "@/app/footer/page";
import CommentSection from "@/app/CommentSection/CommentSection";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
  FaUser,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { MdAccessTimeFilled, MdOutlineEmail } from "react-icons/md";

export default function SMBAFFHL() {
  return (
    <main className="">
      <Header />

      {/*Blog Section*/}

      <section className="flex mt-20">
        {/*Left Section*/}

        <div className="ml-5">
          <div className="w-full">
            <div className="border-t-2 border-l-2 border-r-2 pt-2 bg-gray-50 text-gray-400 pb-2 pl-3.5">
              <h1 className="flex items-center font-sans text-sm">
                <Link href={"/"} className="hover:text-blue-500">Home</Link>
                <IoIosArrowForward className="w-3 h-3 mt-0.5" /> 
                Set May Bearing and Female Fourth Heaven Lesser
              </h1>
            </div>

            <div className="border-2">
              <h1 className="font-medium font-serif text-3xl mt-3 mb-3 ml-3.5 mr-3.5 leading-[1.4] ">
              Set May Bearing and Female Fourth Heaven Lesser
              </h1>
              <div className="flex items-center ml-3.5">
                <Link
                  href="/Components/TWITBWS"
                  className="flex items-center mb-3 mr-5"
                >
                  <FaUser className="mr-2 text-gray-700" />{" "}
                  <p className="font-semibold mt-1 text-gray-500">
                    Hamail Blogging
                  </p>
                </Link>
                <span className="flex items-center mb-3">
                  <MdAccessTimeFilled className="mr-2 w-4 h-4 text-gray-700" />{" "}
                  <p className="font-semibold mt-1 text-gray-500">
                    Dec 2, 2024
                  </p>
                </span>
              </div>
            </div>

            <div className="border-b-2 border-l-2 border-r-2 text-gray-600 pt-4 pb-5 pl-3.5 pr-3.5 ">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimx2-uW3IFmiL3-srMy2AmdJQOaB-0cNaDuERru74JjDPcJG7gsgZvv4sohEww4zzFPe9YOnMhXZ9ngKwXDBgEHrmzdvcQBZ2e_uMct_lx7hwH9FmrEDMFqUUtIguXlh3KeRlXVW3AyXZCtFOAQrEoZA-TKOrLHH1x8gYuwrvBFhSkc_er6AiG-PI9/s16000/6.jpg=w1020-h680-p-k-no-nu"
                alt=""
                className="BLS-img"
              />

              <p className=" font-sans mt-14">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the {`industry's`} standard <br />
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen <br />
                book
              </p>

              <p className="flex bg-gray-100 font-sans py-5 pl-5 text-black border-l-4 border-blue-700 leading-[1.6] mt-7 rounded">
                “Lorem Ipsum has been the {`industry's`} standard dummy text ever
                since the 1500s, when an unknown printer took a <br />
                galley of type and scrambled it to make a type specimen book.
              </p>

              <p className=" font-sans mt-7">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with{" "}
                <br />
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>

              <div className=" font-sans mt-7 ml-5">
                <span className="flex items-center">
                  <p className="bg-gray-700 w-1.5 h-1.5 rounded"></p>
                  <p className="ml-2">Lorem Ipsum has been the {`industry's`}</p>
                </span>
                <span className="flex items-center mt-1">
                  <p className="bg-gray-700 w-1.5 h-1.5 rounded"></p>
                  <p className="ml-2">
                    The generated Lorem Ipsum is therefore always
                  </p>
                </span>
                <span className="flex items-center mt-1">
                  <p className="bg-gray-700 w-1.5 h-1.5 rounded"></p>
                  <p className="ml-2">Making this the first true generator</p>
                </span>
              </div>

              <p className=" font-sans mt-8">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The <br />
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using {`'`}Content here,{" "}
                <br />
                content here{`'`}, making it look like readable English.
              </p>

              <p className=" font-sans mt-6">
                It uses a dictionary of over 200 Latin words, combined with a
                handful of model sentence structures, to generate Lorem <br />
                Ipsum which looks reasonable. The generated Lorem Ipsum is
                therefore always free from repetition, injected humour, or non-{" "}
                <br />
                characteristic words etc.
              </p>

              <p className=" font-sans mt-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by{" "}
                <br />
                injected humour, or randomised words which {`don't`} look even
                slightly believable. If you are going to use a passage of Lorem{" "}
                <br />
              </p>
            </div>

            <div className="flex justify-center bg-gray-50 pt-6 pb-6 space-x-20 border-l-2 border-b-2 border-r-2">
              <span>
                <a href="https://www.facebook.com/" className="text-blue-800 ">
                  <FaFacebook />
                </a>
              </span>
              <span>
                <a href="https://www.twitter.com/" className="text-blue-400">
                  <FaTwitter />
                </a>
              </span>
              <span>
                <a href="https://www.pinterest.com/" className="text-red-600">
                  <FaPinterest />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/" className="text-blue-700">
                  <FaLinkedinIn />
                </a>
              </span>
              <span>
                <a href="https://www.whatsapp.com/" className="text-green-500">
                  <FaWhatsapp />
                </a>
              </span>
              <span>
                <a href="https://www.gmail.com/" className="text-gray-500">
                  <MdOutlineEmail />
                </a>
              </span>
            </div>

            <div className=" border-2 pl-3.5 pr-3.5 pt-2.5 mt-10">
              <h1 className="font-bold font-sans text-sm">
                YOU MAY LIKE THESE POSTS
              </h1>

              <div className="flex space-x-3">
                <span className="">
                  <Link
                    href={"/Components/LDMTLGF"}
                    className=""
                  >
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOY-xtWO6ci9nFW9ufouCiqMETnuSc_cvQt_xWAxgFTCAxxZz44m2_dwY18d4nzJSk77UYtUZ4o5_3iHspt27YwYtLMCwdTefhnBsSw_ja70BfZXq0mXQ6WqmmAwm6jpXTSvon-b_BllfJ5z6EkfriyDz2NEx1YTgpvXoHUv-Qb1MU7Y-93VNwMWl6/w326-h132-p-k-no-nu/1.jpg=w72-h72-p-k-no-nu"
                      alt=""
                      className="w-72 h-28 mt-5 rounded"
                    />
                    <h1 className="font-serif font-medium mt-2 hover:text-blue-400">
                      Land Deep Male Two Living Give Fruit
                    </h1>
                  </Link>
                  <span className="flex items-center mb-3 mt-1">
                    <MdAccessTimeFilled className="mr-2 w-3.5 h-3.5 text-gray-700" />{" "}
                    <p className="font-semibold text-xs mt-0.5 text-gray-500">
                      Dec 2, 2024
                    </p>
                  </span>
                </span>

                <span className="">
                  <Link
                    href={"/Components/ETHADHS"}
                    className=""
                  >
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGxODdnYgOAPZ3p423sQ9IMd9RD7DoUbr6_4AfWr4rUETSq9eWMf4Py6LK95eHJ5xXQpaPkDwzzGXo9Jk1C2tUQ13shzuqSxZJDy4NhoYcrvPt61a0om9PQmyCoVP9zoKBn0xrOkP_JcPak0yuWICojeLis5c_maeUcPAiGOYrEXnUlYb1P7OtyHAn/w326-h132-p-k-no-nu/2.jpg=w72-h72-p-k-no-nu"
                      alt=""
                      className="w-72 h-28 mt-5 rounded"
                    />
                    <h1 className="font-serif font-medium mt-2 hover:text-blue-400">
                      Every Them Herb Air Deep Had Stars <br /> Man
                    </h1>
                  </Link>
                  <span className="flex items-center mb-3 mt-1">
                    <MdAccessTimeFilled className="mr-2 w-3.5 h-3.5 text-gray-700" />{" "}
                    <p className="font-semibold text-xs mt-0.5 text-gray-500">
                      Dec 2, 2024
                    </p>
                  </span>
                </span>

                <span className="">
                  <Link
                    href={"/Components/CMGFDH"}
                    className=""
                  >
                    <img
                      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-OFrykozkWm9M7v4srw0xkpszfV5tfrWDcHbIBtFMTThT6rvn8ml2c9WUhQUoimRhxfK4ncdZ816uCCe2rDkk89ls5h-VNtUjFbs8N7OQS8SiGtqIKeOqKbuqoThLQJnXjhCoezz3tIx-RR4hnZF5JVyRQs5VMwd2rlPO6p6FnlWsPQ8H5kc10oay/w326-h132-p-k-no-nu/3.jpg=w72-h72-p-k-no-nu"
                      alt=""
                      className="w-72 h-28 mt-5 rounded"
                    />
                    <h1 className="font-serif font-medium mt-2 hover:text-blue-400">
                      Creeping Moved God Fourth Darkness <br /> Hath
                    </h1>
                  </Link>
                  <span className="flex items-center mb-3 mt-1">
                    <MdAccessTimeFilled className="mr-2 w-3.5 h-3.5 text-gray-700" />{" "}
                    <p className="font-semibold text-xs mt-0.5 text-gray-500">
                      Dec 2, 2024
                    </p>
                  </span>
                </span>
              </div>
            </div>

            <div className="border-2 mt-10">
              <CommentSection />
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
                <a href="https://www.facebook.com" >
                  <FaFacebook className="text-blue-800 w-5 h-5"/>
                </a>
                <a href="https://www.twitter.com/">
                    <FaTwitter className="text-blue-400 w-5 h-5"/>
                </a>
                <a href="https://www.instagram.com/">
                <FaInstagram className="text-pink-600 w-5 h-5"/>
                </a>
                <a href="https://www.youtube.com/">
                <FaYoutube className="text-red-500 w-5 h-5"/>
                </a>
                <a href="https://www.skype.com/">
                <FaSkype className="text-blue-500 w-5 h-5"/>
                </a> 
            </span>
          </div>

            {/*Subscribe Section*/}
          <div className="mt-9">
            <h1 className="font-bold font-sans text-sm border-t-2 border-l-2 border-r-2 pl-3.5 pt-1.5 pb-1.5 w-80">
                SUBSCRIBE US
            </h1>
            <span className="flex justify-center border-2 w-80 pt-4 pb-4">
            <iframe width="280" height="160" src="https://www.youtube.com/embed/4POWiiB1iLg" frameBorder="0" allowFullScreen> 
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
                        Team Work is The Best <br /> Work Solution Of the Fast <br /> Work to Grow a Better <br /> World
                      </p>
                    </Link>
                      <p className="flex items-center text-xs text-gray-500 font-sans text-blue-900 mt-1">
                      <MdAccessTimeFilled className="mr-1 w-3.5 h-3.5 text-gray-700" /> Dec 2, 2024{" "}
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
                      <MdAccessTimeFilled className="mr-1 w-3.5 h-3.5 text-gray-700" /> Dec 2, 2024{" "}
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
                      Set May Bearing and <br /> Female Fourth Heaven <br /> Lesser
                      </p>
                    </Link>
                      <p className="flex items-center text-xs text-gray-500 font-sans text-blue-900 mt-1">
                      <MdAccessTimeFilled className="mr-1 w-3.5 h-3.5 text-gray-700" /> Dec 2, 2024{" "}
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
        <Footer/>
      </div>

    </main>
  );
}
