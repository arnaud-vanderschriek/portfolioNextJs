import React, {useRef} from "react"
import {motion, useScroll} from "framer-motion"
import LiIcons from "./LiIcons"

const Details = ({position, company, companyLink, time, address, work}) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcons reference={ref} />
      <motion.div 
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">{position}&nbsp;
          <a 
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">
          {work}
        </p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  return(
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div 
          style={{scaleY: scrollYProgress }} 
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        /> 
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details   
            position="Fullstack developer" 
            company="WebTree.tech"
            companyLink="https://www.webtree.tech"
            time="2022-Present"
            address="St. Petersburg, Florida"
            work="Worked on a team responsible for developing new features for WebTree.tech 
            including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />      
          <Details   
            position="Fullstack developer" 
            company="Putman Group"
            companyLink="http://www.putman.be/"
            time="2022"
            address="Anderlecht, Belgique"
            work="Implementation of a platform for HR, project managers and workers to facilitate 
            internal communication and site monitoring. The platform also allows the monitoring of 
            equipment and requests for additional training for workers."
          />      
          <Details   
            position="Fullstack developer" 
            company="HDM Network"
            companyLink="https://www.hommedemetier.be/"
            time="2021"
            address="Charleroi, Belgique"
            work="Web application that facilitates contact between client and building professional."
          />      
          <Details   
            position="Fullstack developer" 
            company="LaGuimbarde"
            companyLink="https://laguimbarde.be/"
            time="2020"
            address="Bruxelles, Belgique"
            work="Management of equipment and follow-up of equipment for the theater 'La Guimbarde'. 
            Reservation and order linked to stock."
          />      
        </ul>
      </div>
    </div>
  )
}

export default Experience
