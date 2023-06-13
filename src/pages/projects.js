import React from "react"
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from "@/components/AnimatedText"
import Link from "next/link";
import Image from "next/image";
import {GithubIcon} from "@components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import { motion } from "framer-motion";


const FramerImage = motion(Image)


const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return (
    <article className="w-full mt-16 p-12 flex items-center justify-between rounded-3xl border 
      border-solid border-dark bg-light shadow-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage src={img} alt={title} className="w-full h-auto"
          whileHover={{scale: 1.05}}
          transition={{duration: 0.2}}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Projects = ({title, type, img, link, github}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid 
      border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto"
          whileHover={{scale: 1.05}}
          transition={{duration: 0.2}}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10"><GithubIcon /></Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">
            Visit 
          </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return(
    <>
      <Head>
        <title>Projects page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16" >
          <AnimatedText text="Imagination Trumps knowledge" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div> 
            <div className="col-span-6">
              <Projects
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div> 
            <div className="col-span-6">
              <Projects
                title="Crypto Screener Application"
                img={project1}
                link="/"
                github="/"
                type="Featured Project"
              />
            </div> 
            <div className="col-span-12">
              Features Project
            </div> <div className="col-span-6">
              Project-3
            </div> 
            <div className="col-span-6">
              Project-4
            </div> 
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
