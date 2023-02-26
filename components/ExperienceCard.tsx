import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top"
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/sw1ff5oogpocoyrea4do"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">UX Developer</h4>
        <p className="font-bold text-2xl mt-1">JD Logistics</p>
        <div className="flex space-x-2 my-2">
            <img className="h-10 w-10 rounded-full" src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
            <img className="h-10 w-10 rounded-full" src="https://cdn.cdnlogo.com/logos/n/80/next-js.svg" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started work ... - Ended...</p>
        <ul className="list-disc space-y ml-5 text-lg">
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
            <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
