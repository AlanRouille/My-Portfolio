/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
import { IllustratorIcon } from "./icons/IllustratorIcon"
import { NextIcon } from "./icons/NextIcon"
import { ReactIcon } from "./icons/ReactIcon"
import { TailwindcssIcon } from "./icons/TailwindcssIcon"
import { VercelIcon } from "./icons/VerselIcon"

const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) => {
  return <span className={cn("bg-accent/30 font-mono hover:bg-accent/50 transition-colors border-spacing-2 border border-accent px-1 py-0.5 text-primary rounded-sm",className)} {...props} />
}

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption font-bold text-4xl text-primary">hey, I'am Alan Rouillé👋</h2>
        <h3 className="text-2xl font-caption">Developer web and Design consultant</h3>
        <p className="text-base">I am a frontend developer and design consultant, specializing in creating interfaces with <Code className="inline-flex items-center gap-1"><NextIcon size={16} className="inline"/>Next</Code>, <Code className="inline-flex items-center gap-1" ><ReactIcon size={16}/>React</Code>, and <Code className="inline-flex items-center gap-1"><TailwindcssIcon size={16} className="inline"/> Tailwindcss</Code>, and in graphic design with{" "} <Code className="inline-flex items-center gap-1"><IllustratorIcon size={16} className="inline"/>Illustrator</Code>. Passionate about innovation and community, I develop aesthetic and functional solutions, utilizing the <Code className="inline-flex items-center gap-1"><VercelIcon size={16} className="inline"/>Vercel</Code>  platform to optimize the deployment of web applications.</p>
      </div>
      <div className="flex-1">
        <img
          src="/images/DSC00844.png"
          className="w-full h-auto max-w-"
          alt="Alan's picture "
        />
      </div>
    </Section>
  )
}