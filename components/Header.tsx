import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";


type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex sm:items-start justify-between max-w-7xl mx-auto z-20
    xl: items-center">
      <motion.div 
      initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
      className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/ricky8221"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/qi-chen-fullstack/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      
      <motion.div 
      initial={{
        x:500,
        opacity:0.5,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5
      }}
      className="flex flex-row items-center text-grey-300 cursor-pointer">
        <SocialIcon 
        // url="rickychen.fullstack@gmail.com" 
        className="cursor-pointer"
        network="email"
        fgColor="grey"
        bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-grey-400">
          get In Touch
        </p>
      </motion.div>
    </header>
  );
}
