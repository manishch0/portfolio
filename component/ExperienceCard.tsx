import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewpoet={{ once: true }}
        className=" w-32 h-32 rounded-full xl:w-[200] xl:h-[200px] object-cover object-center"
        src="https://github.com/manishch0/portfolio/blob/Portfolio/component/background.png?raw=true"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          Associate Technology L1 Publicis Sapient
        </h4>
        <p className="font-bold text-2xl mt-1">Publicis Sapient</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://github.com/manishch0/portfolio/blob/Portfolio/assests/jslogo.jpg"
            alt=""
          />
        </div>
        <div>Html,css js, c ,c++, Reactjs, nextjs,</div>
      </div>
      <p>Started work... -Ended... </p>
      <ul className="list-disc space-y-4 ml-5 text-lg">
        <li>Summary point</li>
        <li>Summary point</li>
        <li>Summary point</li>
        <li>Summary point</li>
        <li>Summary point</li>
      </ul>
    </article>
  );
}

export default ExperienceCard;
