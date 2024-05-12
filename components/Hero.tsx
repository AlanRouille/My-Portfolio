/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"

const Code = ({className,...props}: ComponentPropsWithoutRef<"span">) => {
  return <span className={cn("bg-accent/30 font-mono hover:bg-accent/50 transition-colors border-spacing-2 border-accent px-1 py-0.5 text-primary rounded-sm",className)} {...props} />
}

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="font-caption font-bold text-4xl text-primary">hey, I'am Alan Rouillé👋</h2>
        <h3 className="text-2xl font-caption">Developer web and Design consultant</h3>
        <p className="text-base">Je suis développeur front-end et consultant en design,</p>
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