import { cn } from "@/lib/utils"
import Link from "next/link"
import { Section } from "../components/Section"
import { GithubIcon } from "../components/icons/GithubIcon"
import { FacebookIcon } from "./icons/FacebookIcon"
import { LinkedInIcon } from "./icons/LinkedinIcon"
import { buttonVariants } from "./ui/button"

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">Alan Rouillé</h1>
        <div className="flex-1"/>
        <ul className="flex items-center gap-2">
          <Link href="https://github.com/AlanRouille" className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}>
            <GithubIcon size={12} className="text-foreground"/>
          </Link>
          <Link href="https://www.linkedin.com/in/alan-rouilledevdesign/" className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}>
            <LinkedInIcon size={12} className="text-foreground"/>
          </Link>
          <Link href="https://www.facebook.com/AlanRouilleDesignDev" className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}>
            <FacebookIcon size={12} className="text-foreground"/>
          </Link>
        </ul>
      </Section>
    </header>
  )
}