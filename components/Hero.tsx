import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import portfolioImg from "../asset/portfolio.jpg";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "@/Typing";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo
};

export default function Hero({ pageInfo }: Props) {

  const [text, count] = useTypewriter({
    words: [
      `"Hi! My name is ${pageInfo?.name}"`,
      "Guy who love Next.js & TypeScript",
      "<And always ready for the next challenge!!!/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        src={urlFor(pageInfo?.heroImage).url()}
        alt="Portfolio Image"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="text-5xl lg:6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
