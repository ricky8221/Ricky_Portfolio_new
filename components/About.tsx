import Image from "next/image";
import React from "react";
import portfolioImage from '../asset/portfolio.jpg'
import { motion } from 'framer-motion'
// import aboutjpg from '../asset/about.jpg'

type Props = {};

export default function About({}: Props) {
  const aboutImg = <Image src={aboutjpg} alt="" />
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      
        <motion.div 
                initial={{
                  x:-200,
                  opacity:0
              }}
              whileInView={{
                  x:0,
                  opacity:1
              }}
              viewport={{
                  once:true
              }}
              transition={{
                  duration:1.2
              }}
        >
        <Image 
        src= {aboutjpg}
        alt="Ricky Picture with Bella"
        className="-mb-20 md: md:mb-0 flex-shrink-0 w-56 rounded-full object cover md:rounded-lg md:w-64 xl:w-[800px]"
        />
        </motion.div> 


        <div 
        className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Here is a {''}
            <span className="underline decoration-[#7AB0A]">little</span>
            {''} background</h4>
            <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, numquam qui itaque nemo nobis, magni sequi, nihil asperiores consectetur praesentium ex facere deserunt sed dignissimos eveniet earum similique possimus ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nemo esse quos at tempore, dicta aut asperiores laboriosam rerum facilis neque sequi nisi exercitationem corrupti amet incidunt itaque numquam sed.</p>
        </div>
    </motion.div>
  );
}
