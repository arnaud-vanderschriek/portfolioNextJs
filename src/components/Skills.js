import React, {useState} from "react"
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {
  return (
    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
      py-3 px-6 shadow-dark absolute"
      whileHover={{scale:1.05}}
      initial={{x:0,y:0}}
      whileInView={{x:x, y:y}}
      transition={{duration: 1.5}}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return(
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
          p-8 shadow-dark"
          whileHover={{scale:1.05}}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="15vw" y="-5vw" />
        <Skill name="ReactJs" x="-5vw" y="8vw" />
        <Skill name="NodeJs" x="10vw" y="12vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
        <Skill name="NextJs" x="-20vw" y="-15vw" />
        <Skill name="MongoDB" x="11vw" y="-17vw" />
        <Skill name="Linux" x="-17vw" y="14vw" />
      </div>
    </>
  )
}

export default Skills
