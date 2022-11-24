import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import labels from "./labels/labels.json";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Developer", "Designer", "Creator"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col spacey-8 items centre justify-centre text-centre overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://github.com/manishch0/portfolio/blob/Portfolio/assests/IMGB.jpg?raw=true"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[16px] text-center">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 flex justify-center">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5as flex justify-center">
          <Link href="#about">
            <button className="heroButton">{labels?.About}</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">{labels?.Experience}</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">{labels?.Skills}</button>
          </Link>
          <Link href="#project">
            <button className="heroButton">{labels?.Project}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
