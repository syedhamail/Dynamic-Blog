"use client";

import Header from "../header/page";
import Footer from "@/app/footer/page";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

export default function About() {
  return (
    <main>
      <Header />

      {/*About Section*/}

      <section className="flex mt-20">
        {/*Left Section*/}

        <div className="ml-5">
          <div className="w-full">
            <div className="border-2 mt-0.5">
              <h1 className="font-medium font-serif text-3xl mt-3 mb-3 ml-3.5 mr-3.5 leading-[1.4] ">
                About
              </h1>
            </div>

            <div className="border-b-2 border-l-2 border-r-2 text-gray-600 pt-4 pb-5 pl-3.5 pr-3.5 ">
              <p className=" font-sans mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the {`industry's`} standard{" "}
                <br />
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen <br />
                book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It{" "}
                <br />
                was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with <br />
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>

              <p className="font-sans mt-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The <br />
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using {`'`}Content here,{" "}
                <br />
                content here{`'`}, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem{" "}
                <br />
                Ipsum as their default model text, and a search for {`'`}lorem
                ipsum{`'`} will uncover many web sites still in their infancy.
                Various <br />
                versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like). <br />
              </p>

              <p className="font-sans mt-6">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 <br />
                BC, making it over 2000 years old. Richard McClintock, a Latin
                professor at Hampden-Sydney College in Virginia, looked up{" "}
                <br />
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in <br />
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of {`"`}de Finibus{" "}
                <br />
                Bonorum et Malorum{`"`} (The Extremes of Good and Evil) by
                Cicero, written in 45 BC. This book is a treatise on the theory
                of <br />
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, {`"`}Lorem ipsum dolor sit amet..{`"`}, comes from
                a line <br />
                in section 1.10.32.
              </p>

              <p className="font-sans mt-6">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and{" "}
                <br />
                1.10.33 from {`"`}de Finibus Bonorum et Malorum{`"`} by Cicero
                are also reproduced in their exact original form, accompanied by{" "}
                <br />
                English versions from the 1914 translation by H. Rackham. <br />
              </p>

              <p className="font-sans mt-6">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by{" "}
                <br />
                injected humour, or randomised words which {`don't`} look even
                slightly believable. If you are going to use a passage of Lorem{" "}
                <br />
                Ipsum, you need to be sure there {`isn't`} anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on{" "}
                <br />
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a{" "}
                <br />
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which <br />
                looks reasonable. The generated Lorem Ipsum is therefore always
                free from repetition, injected humour, or non- <br />
                characteristic words etc. <br />
              </p>
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

      {/* Footer */}

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
