import { Section } from "../components/Section"
import { GithubIcon } from "../components/icons/GithubIcon"
import { Button } from "./ui/button"

export const Header = () => {
  return (
    <header className="sticky top-0">
      <Section className="flex items-baseline">
        <h1 className="text-4xl font-bold text-primary-foreground">Alan Rouillé</h1>
        <div className="flex-1"/>
        <ul>
          <Button className="size-6">
            <GithubIcon size={16} className="text-foreground"/>
          </Button>
        </ul>
      </Section>
    </header>
  )
}