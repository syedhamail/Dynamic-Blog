"use client";

import React from "react";
import { useState } from "react";
import Header from "./header/page";
import Footer from "./footer/page";
import Link from "next/link";

import { FaUser } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  return (
    <main className="relative h-full w-full bg-gradient-to-r from-blue-500 to-purple-500">
      <Header />

      {/*Hero Section*/}

      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <Link
            href={"/Components/TWITBWS"}
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10"
          >
            <img
              className="object-cover object-center rounded-xl"
              alt="hero"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUwG_baS5c_IyPrzYu1vT2LauhKlZIve0qqAfODV8UyOcTAm4gg0oDCAgJ0KL-hB6xW99YOIENx7NgPDRdO2609p7_yTEXIMgkO5cmTByK5sKQNGY3P7gkVrq-0ZWNOvem9mUAX1gSl5MuNBcUR6FrhZcYPb5-_qs-LkgkcCqwDYpBzsmH6WtJ9dOy/w726-h528-p-k-no-nu/5.jpg=w72-h72-p-k-no-nu"
            />
          </Link>

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <Link
              href={"/Components/TWITBWS"}
              className="title-font sm:text-4xl text-6xl mb-4 font-bold text-white"
            >
              <p className="HS-H-L1">Team Work is The Best Work</p>
              <p className="HS-H-L2">Solution Of the Fast Work to Grow a</p>
              <p className="HS-H-L3">Better World</p>
            </Link>

            <div className="flex items-center">
              <Link href="/Components/TWITBWS" className="flex items-center mb-3 mr-5">
                <FaUser className="mr-2" />{" "}
                <p className="font-semibold mt-1">Hamail Blogging</p>
              </Link>
              <span className="flex items-center mb-3">
                <MdAccessTimeFilled className="mr-2 w-4 h-4" />{" "}
                <p className="font-semibold mt-1">Dec 2, 2024</p>
              </span>
            </div>

            <p className="mb-8 leading-relaxed relative ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {`industry's`} standard dummy text
              ever since the 1500s, when an unknown printer took a galley of…
            </p>

            <Link href={"/Components/TWITBWS"} className="flex justify-center ">
              <button className="inline-flex text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg -mt-2">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/*Blog Post's*/}

      <section className="">
        <div className="container px- py-14 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/*1st line*/}
            <div className="flex">

              {/*1st*/}
              <div
                style={{
                  position: "relative",
                  width: "420px",
                  height: "400px",
                }}
              >
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOY-xtWO6ci9nFW9ufouCiqMETnuSc_cvQt_xWAxgFTCAxxZz44m2_dwY18d4nzJSk77UYtUZ4o5_3iHspt27YwYtLMCwdTefhnBsSw_ja70BfZXq0mXQ6WqmmAwm6jpXTSvon-b_BllfJ5z6EkfriyDz2NEx1YTgpvXoHUv-Qb1MU7Y-93VNwMWl6/w462-h396-p-k-no-nu/1.jpg=w72-h72-p-k-no-nu"
                  alt="Sample Image"
                  className="object-cover object-center h-96 block rounded-sm opacity-80"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "3%",
                    color: "white",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <Link
                    href={"/Components/LDMTLGF"}
                    style={{
                      fontSize: "26px",
                      margin: "10px 0",
                      fontWeight: "bold",
                      letterSpacing: "1.5px",
                    }}
                    className="hover:text-indigo-300 transition:transform-0.5s ease-in-out"
                  >
                    Land Deep Male Two Living Give Fruit
                  </Link>

                  <div className="flex items-center mt-3">
                    <Link
                      href="/Components/LDMTLGF"
                      className="flex items-center mb-3 mr-5 hover:text-indigo-300"
                    >
                      <FaUser className="mr-2 text-black" />{" "}
                      <p className="font-semibold mt-1">Hamail Blogging</p>
                    </Link>
                    <span className="flex items-center mb-3">
                      <MdAccessTimeFilled className="mr-2 w-4 h-4 text-black" />{" "}
                      <p className="font-semibold mt-1">Dec 2, 2024</p>
                    </span>
                  </div>

                  <p
                    style={{
                      letterSpacing: "1px",
                      fontSize: "13px",
                    }}
                    className="mt-2"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    <br />
                    typesetting industry. Lorem Ipsum has been the
                    <br />
                    {`industry's`} standard dummy text ever since the 1500s...
                  </p>
                </div>
              </div>

              {/*2nd*/}
              <div
                style={{
                  position: "relative",
                  width: "420px",
                  height: "400px",
                  marginLeft: "24px",
                }}
              >
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGxODdnYgOAPZ3p423sQ9IMd9RD7DoUbr6_4AfWr4rUETSq9eWMf4Py6LK95eHJ5xXQpaPkDwzzGXo9Jk1C2tUQ13shzuqSxZJDy4NhoYcrvPt61a0om9PQmyCoVP9zoKBn0xrOkP_JcPak0yuWICojeLis5c_maeUcPAiGOYrEXnUlYb1P7OtyHAn/w462-h396-p-k-no-nu/2.jpg=w72-h72-p-k-no-nu"
                  alt="Sample Image"
                  className="object-cover object-center h-96 block rounded-sm opacity-80"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "3%",
                    color: "white",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <Link
                    href={"/Components/ETHADHSM"}
                    style={{
                      fontSize: "26px",
                      margin: "10px 0",
                      fontWeight: "bold",
                      letterSpacing: "1.5px",
                    }}
                    className="hover:text-indigo-300 transition:transform-0.5s ease-in-out"
                  >
                    Every Them Herb Air Deep Had Stars Man
                  </Link>

                  <div className="flex items-center mt-3">
                    <Link
                      href="/Components/ETHADHSM"
                      className="flex items-center mb-3 mr-5 hover:text-indigo-300"
                    >
                      <FaUser className="mr-2 text-black" />{" "}
                      <p className="font-semibold mt-1">Hamail Blogging</p>
                    </Link>
                    <span className="flex items-center mb-3">
                      <MdAccessTimeFilled className="mr-2 w-4 h-4 text-black" />{" "}
                      <p className="font-semibold mt-1">Dec 2, 2024</p>
                    </span>
                  </div>

                  <p
                    style={{
                      letterSpacing: "1px",
                      fontSize: "13px",
                    }}
                    className="mt-2"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    <br />
                    typesetting industry. Lorem Ipsum has been the
                    <br />
                    {`industry's`} standard dummy text ever since the 1500s...
                  </p>
                </div>
              </div>

              {/*3rd*/}
              <div
                style={{
                  position: "relative",
                  width: "420px",
                  height: "400px",
                  marginLeft: "24px",
                }}
              >
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj-OFrykozkWm9M7v4srw0xkpszfV5tfrWDcHbIBtFMTThT6rvn8ml2c9WUhQUoimRhxfK4ncdZ816uCCe2rDkk89ls5h-VNtUjFbs8N7OQS8SiGtqIKeOqKbuqoThLQJnXjhCoezz3tIx-RR4hnZF5JVyRQs5VMwd2rlPO6p6FnlWsPQ8H5kc10oay/w462-h396-p-k-no-nu/3.jpg=w72-h72-p-k-no-nu"
                  alt="Sample Image"
                  className="object-cover object-center h-96 block rounded-sm opacity-80"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "3%",
                    color: "white",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <Link
                    href={"/Components/CMGFDH"}
                    style={{
                      fontSize: "26px",
                      margin: "10px 0",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                    }}
                    className="hover:text-indigo-300 transition:transform-0.5s ease-in-out"
                  >
                    Creeping Moved God Fourth Darkness Hath
                  </Link>

                  <div className="flex items-center mt-3">
                    <Link
                      href="/Components/CMGFDH"
                      className="flex items-center mb-3 mr-5 hover:text-indigo-300"
                    >
                      <FaUser className="mr-2 text-black" />{" "}
                      <p className="font-semibold mt-1">Hamail Blogging</p>
                    </Link>
                    <span className="flex items-center mb-3">
                      <MdAccessTimeFilled className="mr-2 w-4 h-4 text-black" />{" "}
                      <p className="font-semibold mt-1">Dec 2, 2024</p>
                    </span>
                  </div>

                  <p
                    style={{
                      letterSpacing: "1px",
                      fontSize: "13px",
                    }}
                    className="mt-2"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    <br />
                    typesetting industry. Lorem Ipsum has been the
                    <br />
                    {`industry's`} standard dummy text ever since the 1500s...
                  </p>
                </div>
              </div>

            </div>

            {/*2nd line*/}

            <div className="flex mt-5">

              {/*4th*/}
              <div
                style={{
                  position: "relative",
                  width: "420px",
                  height: "400px",
                }}
              >
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5WjAeO5fMcb_K0muNNmfzTrTEI9PpWtuNpdF_E9ikqQOvKlGYKw_Xc0Y5bvUMpElzJUNN8TQEvvMAk0kaF8yxU-Kw_ZBKK1DGBj0KovCXGzTu2IUK9i4CCkPo5NCwu9afOPJY6AoQpkx5sK-xL5eRqKG6xh9iZfIbgZryNEyNR56qozT8DvVtmanl/w462-h396-p-k-no-nu/4.jpg=w72-h72-p-k-no-nu"
                  alt="Sample Image"
                  className="object-cover object-center h-96 block rounded-sm opacity-80"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "3%",
                    color: "white",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <Link
                    href={"/Components/BTDAVL"}
                    style={{
                      fontSize: "26px",
                      margin: "10px 0",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                    }}
                    className="hover:text-indigo-300 transition:transform-0.5s ease-in-out"
                  >
                    Beginning Two {`Don't`} A Very Likeness
                  </Link>

                  <div className="flex items-center mt-3">
                    <Link
                      href="/Components/BTDAVL"
                      className="flex items-center mb-3 mr-5 hover:text-indigo-300"
                    >
                      <FaUser className="mr-2 text-black" />{" "}
                      <p className="font-semibold mt-1">Hamail Blogging</p>
                    </Link>
                    <span className="flex items-center mb-3">
                      <MdAccessTimeFilled className="mr-2 w-4 h-4 text-black" />{" "}
                      <p className="font-semibold mt-1">Dec 2, 2024</p>
                    </span>
                  </div>

                  <p
                    style={{
                      letterSpacing: "1px",
                      fontSize: "13px",
                    }}
                    className="mt-2"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    <br />
                    typesetting industry. Lorem Ipsum has been the
                    <br />
                    {`industry's`} standard dummy text ever since the 1500s...
                  </p>
                </div>
              </div>

               {/*5th*/}   
              <div
                style={{
                  position: "relative",
                  width: "420px",
                  height: "400px",
                  marginLeft: "24px",
                }}
              >
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUwG_baS5c_IyPrzYu1vT2LauhKlZIve0qqAfODV8UyOcTAm4gg0oDCAgJ0KL-hB6xW99YOIENx7NgPDRdO2609p7_yTEXIMgkO5cmTByK5sKQNGY3P7gkVrq-0ZWNOvem9mUAX1gSl5MuNBcUR6FrhZcYPb5-_qs-LkgkcCqwDYpBzsmH6WtJ9dOy/w462-h396-p-k-no-nu/5.jpg=w72-h72-p-k-no-nu"
                  alt="Sample Image"
                  className="object-cover object-center h-96 block rounded-sm opacity-80"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "31%",
                    left: "3%",
                    color: "white",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <Link
                    href={"/Components/TWITBWS"}
                    style={{
                      fontSize: "26px",
                      margin: "10px 0",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                    }}
                    className="hover:text-indigo-300 transition:transform-0.5s ease-in-out"
                  >
                    Team Work is The Best Work Solution Of the Fast Work to Grow
                    a Better World
                  </Link>

                  <div className="flex items-center mt-3">
                    <Link
                      href="/Components/TWITBWS"
                      className="flex items-center mb-3 mr-5 hover:text-indigo-300"
                    >
                      <FaUser className="mr-2 text-black" />{" "}
                      <p className="font-semibold mt-1">Hamail Blogging</p>
                    </Link>
                    <span className="flex items-center mb-3">
                      <MdAccessTimeFilled className="mr-2 w-4 h-4 text-black" />{" "}
                      <p className="font-semibold mt-1">Dec 2, 2024</p>
                    </span>
                  </div>

                  <p
                    style={{
                      letterSpacing: "1px",
                      fontSize: "13px",
                    }}
                    className="mt-2"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    <br />
                    typesetting industry. Lorem Ipsum has been the
                    <br />
                    {`industry's`} standard dummy text ever since the 1500s...
                  </p>
                </div>
              </div>

              {/*6th*/}
              <div
                style={{
                  position: "relative",
                  width: "420px",
                  height: "400px",
                  marginLeft: "24px",
                }}
              >
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimx2-uW3IFmiL3-srMy2AmdJQOaB-0cNaDuERru74JjDPcJG7gsgZvv4sohEww4zzFPe9YOnMhXZ9ngKwXDBgEHrmzdvcQBZ2e_uMct_lx7hwH9FmrEDMFqUUtIguXlh3KeRlXVW3AyXZCtFOAQrEoZA-TKOrLHH1x8gYuwrvBFhSkc_er6AiG-PI9/w462-h396-p-k-no-nu/6.jpg=w72-h72-p-k-no-nu"
                  alt="Sample Image"
                  className="object-cover object-center h-96 block rounded-sm opacity-80"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "3%",
                    color: "white",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <Link
                    href={"/Components/SMBAFFHL"}
                    style={{
                      fontSize: "26px",
                      margin: "10px 0",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                    }}
                    className="hover:text-indigo-300 transition:transform-0.5s ease-in-out"
                  >
                    Set May Bearing and Female Fourth Heaven Lesser
                  </Link>

                  <div className="flex items-center mt-3">
                    <Link
                      href="/Components/SMBAFFHL"
                      className="flex items-center mb-3 mr-5 hover:text-indigo-300"
                    >
                      <FaUser className="mr-2 text-black" />{" "}
                      <p className="font-semibold mt-1">Hamail Blogging</p>
                    </Link>
                    <span className="flex items-center mb-3">
                      <MdAccessTimeFilled className="mr-2 w-4 h-4 text-black" />{" "}
                      <p className="font-semibold mt-1">Dec 2, 2024</p>
                    </span>
                  </div>

                  <p
                    style={{
                      letterSpacing: "1px",
                      fontSize: "13px",
                    }}
                    className="mt-2"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    <br />
                    typesetting industry. Lorem Ipsum has been the
                    <br />
                    {`industry's`} standard dummy text ever since the 1500s...
                  </p>
                </div>
              </div>
            </div>

            {/*3rd line*/}

            <div className="flex mt-5">

              {/*7th*/}
              <div
                style={{
                  position: "relative",
                  width: "420px",
                  height: "400px",
                }}
              >
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhltIsa2MCG8zQ9_9Sn9eh7Asi52VfPfBvL7TOi65Ymr8q2W4lDRY4DLVtZQAgL5Vf6068SE9WEbRzPJbuswl9KRZmDoITMaHeS87VuFnkiPY7_FjVM-gLX6f4DnHOwHD2Z_Xln4ejbdrPGh0RNOy65rBKbVkx2qK4N4rcGHkcoIO7g3dTP1fNikIqG/w462-h396-p-k-no-nu/7.jpg=w72-h72-p-k-no-nu"
                  alt="Sample Image"
                  className="object-cover object-center h-96 block rounded-sm opacity-80"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "3%",
                    color: "white",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <Link
                    href={"/Components/WLIAFSGM"}
                    style={{
                      fontSize: "26px",
                      margin: "10px 0",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                    }}
                    className="hover:text-indigo-300 transition:transform-0.5s ease-in-out"
                  >
                    Whales Lesser {`isn't`} Abundantly Form Spirit Grass Moving
                  </Link>

                  <div className="flex items-center mt-3">
                    <Link
                      href="/Components/WLIAFSGM"
                      className="flex items-center mb-3 mr-5 hover:text-indigo-300"
                    >
                      <FaUser className="mr-2 text-black" />{" "}
                      <p className="font-semibold mt-1">Hamail Blogging</p>
                    </Link>
                    <span className="flex items-center mb-3">
                      <MdAccessTimeFilled className="mr-2 w-4 h-4 text-black" />{" "}
                      <p className="font-semibold mt-1">Dec 2, 2024</p>
                    </span>
                  </div>

                  <p
                    style={{
                      letterSpacing: "1px",
                      fontSize: "13px",
                    }}
                    className="mt-2"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    <br />
                    typesetting industry. Lorem Ipsum has been the
                    <br />
                    {`industry's`} standard dummy text ever since the 1500s...
                  </p>
                </div>
              </div>

              {/*8th*/}
              <div
                style={{
                  position: "relative",
                  width: "420px",
                  height: "400px",
                  marginLeft: "24px",
                }}
              >
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2RQD4upJXSNvA0j4qw_ygJgl7akCk8bMzdSQYxgCFKSX98xeD6e0cgwMUVczCcR8BNUYxnJYbh4l_hYaZNhmUVKxqN3rbtj4GWjoUtyMiY_Mfn1wPMBrm4VYW8mCelQAPWv3eVAw3qAbubPWyEtDfS71hxZ7tiN3SkZL_Kbb04Nil1PLrropJWanl/w462-h396-p-k-no-nu/8.jpg=w72-h72-p-k-no-nu"
                  alt="Sample Image"
                  className="object-cover object-center h-96 block rounded-sm opacity-80"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "3%",
                    color: "white",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <Link
                    href={"/Components/HWLHOYM"}
                    style={{
                      fontSize: "26px",
                      margin: "10px 0",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                    }}
                    className="hover:text-indigo-300 transition:transform-0.5s ease-in-out"
                  >
                    Hath Wherein Light Had Over Years Man
                  </Link>

                  <div className="flex items-center mt-3">
                    <Link
                      href="/Components/HWLHOYM"
                      className="flex items-center mb-3 mr-5 hover:text-indigo-300"
                    >
                      <FaUser className="mr-2 text-black" />{" "}
                      <p className="font-semibold mt-1">Hamail Blogging</p>
                    </Link>
                    <span className="flex items-center mb-3">
                      <MdAccessTimeFilled className="mr-2 w-4 h-4 text-black" />{" "}
                      <p className="font-semibold mt-1">Dec 2, 2024</p>
                    </span>
                  </div>

                  <p
                    style={{
                      letterSpacing: "1px",
                      fontSize: "13px",
                    }}
                    className="mt-2"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    <br />
                    typesetting industry. Lorem Ipsum has been the
                    <br />
                    {`industry's`} standard dummy text ever since the 1500s...
                  </p>
                </div>
              </div>

              {/*9th*/}
              <div
                style={{
                  position: "relative",
                  width: "420px",
                  height: "400px",
                  marginLeft: "24px",
                }}
              >
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEWHIxFqxE8pol-gPu1Qq6kXgnt5-VzLzCOD9YjcPiUrAId7ijAPaRiNzhfjNY8x4ER5TXoK_xPwcbITtq1FnhqT1tfENQrRR3svdJvEfZoitxep20-4W5Dj7yW0_cAJNQOO5QcgxrH9TcNQNQMtmd2GbiANEuWLZ9M0AD1HY6Np-ibrpysep-Dcui/w462-h396-p-k-no-nu/9.jpg=w72-h72-p-k-no-nu"
                  alt="Sample Image"
                  className="object-cover object-center h-96 block rounded-sm opacity-80"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "3%",
                    color: "white",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <Link
                    href={"/Components/BFHNSSSBM"}
                    style={{
                      fontSize: "26px",
                      margin: "10px 0",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                    }}
                    className="hover:text-indigo-300 transition:transform-0.5s ease-in-out"
                  >
                    Be Female Heaven Night Seas Stars Spirit Brought Moveth
                  </Link>

                  <div className="flex items-center mt-3">
                    <Link
                      href="/Components/BFHNSSSBM"
                      className="flex items-center mb-3 mr-5 hover:text-indigo-300"
                    >
                      <FaUser className="mr-2 text-black" />{" "}
                      <p className="font-semibold mt-1">Hamail Blogging</p>
                    </Link>
                    <span className="flex items-center mb-3">
                      <MdAccessTimeFilled className="mr-2 w-4 h-4 text-black" />{" "}
                      <p className="font-semibold mt-1">Dec 2, 2024</p>
                    </span>
                  </div>

                  <p
                    style={{
                      letterSpacing: "1px",
                      fontSize: "13px",
                    }}
                    className="mt-2"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    <br />
                    typesetting industry. Lorem Ipsum has been the
                    <br />
                    {`industry's`} standard dummy text ever since the 1500s...
                  </p>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="LM-B">
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-white bg-indigo-700 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-5"
              >
                {showMore ? "Show Less" : "Load More"}
              </button>
            </div>

            {/*4th line*/}

            {showMore && (
              <div className="flex mt-10">

                {/*10th*/}
                <div
                  style={{
                    position: "relative",
                    width: "420px",
                    height: "400px",
                  }}
                >
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhExI_npDNvov1F9vCm-PNzw73cqz_N2mHbzP9NB4nG4u39QHWRO7f20aREwgKD2UAJt35iON-KJV83dxrOVCRubSMDc1gCRu0y-l1ZudInub9NoXp5h8PFazhP5l0DA6bprnygKkO8KNc1zRuwaH4nKg5y5_KZJxW05fuIrGy0xheEgCcjYSkidPdS/w462-h396-p-k-no-nu/10.jpg=w72-h72-p-k-no-nu"
                    alt="Sample Image"
                    className="object-cover object-center h-96 block rounded-sm opacity-80"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "40%",
                      left: "3%",
                      color: "white",
                      textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    <Link
                      href={"/Components/GMLFSABE"}
                      style={{
                        fontSize: "26px",
                        margin: "10px 0",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                      }}
                      className="hover:text-indigo-300 transition:transform-0.5s ease-in-out"
                    >
                      Grass Man Lights Face Said and Blessed Every
                    </Link>

                    <div className="flex items-center mt-3">
                      <Link
                        href="/Components/GMLFSABE"
                        className="flex items-center mb-3 mr-5 hover:text-indigo-300"
                      >
                        <FaUser className="mr-2 text-black" />{" "}
                        <p className="font-semibold mt-1">
                          Hamail Blogging
                        </p>
                      </Link>
                      <span className="flex items-center mb-3">
                        <MdAccessTimeFilled className="mr-2 w-4 h-4 text-black" />{" "}
                        <p className="font-semibold mt-1">Dec 2, 2024</p>
                      </span>
                    </div>

                    <p
                      style={{
                        letterSpacing: "1px",
                        fontSize: "13px",
                      }}
                      className="mt-2"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      <br />
                      typesetting industry. Lorem Ipsum has been the
                      <br />
                      {`industry's`} standard dummy text ever since the 1500s...
                    </p>
                  </div>
                </div>

                {/*11th*/}
                <div
                  style={{
                    position: "relative",
                    width: "420px",
                    height: "400px",
                    marginLeft: "24px",
                  }}
                >
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoLFpQm33qvovsnHKC0nm9eeZEY0YC1e8cDG6SxL9ab0OcTl4kAWtLG1XwZpG1wi9Dhe4rCktZHzbe6ttleqwDskdZ8yCjA5BittRRkZDZPSw0B6uJHMrO0IKlyg2pblinnjpEcFgODJcZvpcwlf9za9TyRhgG_cHoAk_Yr5Y_LqBg9efoIS9myK3d/w462-h396-p-k-no-nu/11.jpg=w72-h72-p-k-no-nu"
                    alt="Sample Image"
                    className="object-cover object-center h-96 block rounded-sm opacity-80"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "40%",
                      left: "3%",
                      color: "white",
                      textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    <Link
                      href={"/Components/PTPITW"}
                      style={{
                        fontSize: "26px",
                        margin: "10px 0",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                      }}
                      className="hover:text-indigo-300 transition:transform-0.5s ease-in-out"
                    >
                      Popular Travel Place in The World
                    </Link>

                    <div className="flex items-center mt-3">
                      <Link
                        href="/Components/PTPITW"
                        className="flex items-center mb-3 mr-5 hover:text-indigo-300"
                      >
                        <FaUser className="mr-2 text-black" />{" "}
                        <p className="font-semibold mt-1">
                          Hamail Blogging
                        </p>
                      </Link>
                      <span className="flex items-center mb-3">
                        <MdAccessTimeFilled className="mr-2 w-4 h-4 text-black" />{" "}
                        <p className="font-semibold mt-1">Dec 2, 2024</p>
                      </span>
                    </div>

                    <p
                      style={{
                        letterSpacing: "1px",
                        fontSize: "13px",
                      }}
                      className="mt-2"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      <br />
                      typesetting industry. Lorem Ipsum has been the
                      <br />
                      {`industry's`} standard dummy text ever since the 1500s...
                    </p>
                  </div>
                </div>

                {/*12th*/}
                <div
                  style={{
                    position: "relative",
                    width: "420px",
                    height: "400px",
                    marginLeft: "24px",
                  }}
                >
                  <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEu-htvsd2or2oDaxqmmfqqA2T_4tf2mv8OAoB6L4loEs1nP-aj3Q3I3ReJ5hp3FBAtqPcAHgNtvRwPJytkKBpCBHGvaCT6_kyr9EqCcr-ieUCAx03AisLA6IWktVmrWtyRsa1DqNcazXg87QdiN8ocDdWUB4Ff3-cG8xush3tac6bly6AGDcrJnDj/w462-h396-p-k-no-nu/12.jpg=w72-h72-p-k-no-nu"
                    alt="Sample Image"
                    className="object-cover object-center h-96 block rounded-sm opacity-80"
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "3%",
                      color: "white",
                      textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
                    }}
                  >
                    <Link
                      href={"/Components/PFIB"}
                      style={{
                        fontSize: "26px",
                        margin: "10px 0",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                      }}
                      className="hover:text-indigo-300 transition:transform-0.5s ease-in-out"
                    >
                      Popular Food in Bangladesh
                    </Link>

                    <div className="flex items-center mt-3">
                      <Link
                        href="/Components/PFIB"
                        className="flex items-center mb-3 mr-5 hover:text-indigo-300"
                      >
                        <FaUser className="mr-2 text-black" />{" "}
                        <p className="font-semibold mt-1">
                          Hamail Blogging
                        </p>
                      </Link>
                      <span className="flex items-center mb-3">
                        <MdAccessTimeFilled className="mr-2 w-4 h-4 text-black" />{" "}
                        <p className="font-semibold mt-1">Dec 2, 2024</p>
                      </span>
                    </div>

                    <p
                      style={{
                        letterSpacing: "1px",
                        fontSize: "13px",
                      }}
                      className="mt-2"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      <br />
                      typesetting industry. Lorem Ipsum has been the
                      <br />
                      {`industry's`} standard dummy text ever since the 1500s...
                    </p>
                  </div>
                </div>

              </div>
            )}

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
