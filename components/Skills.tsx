import { Badge } from "@/components/ui/badge"
import { Code } from "./Code"
import { Section } from "./Section"
import { IllustratorIcon } from "./icons/IllustratorIcon"
import { ReactIcon } from "./icons/ReactIcon"
import { TailwindcssIcon } from "./icons/TailwindcssIcon"

export const Skills = () => {
  return (
  <Section className="flex flex-col items-start gap-4">
    <Badge variant={"outline"}>Skills</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        What I love to work on...
    </h2>
    <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2">
              <ReactIcon size={42} className=" animate-spin" style={{animationDuration: "10s"}} />
                <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                <p className="text-sm text-muted-foreground">My main tool is <Code>React</Code>. I also employ <Code>Next.js</Code> as a framework for the backend and frontend.</p>
            </div>
      </div>
      <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2">
              <TailwindcssIcon size={42}  />
                <h3 className="text-2xl font-semibold tracking-tight">Tailwindcss</h3>
                <p className="text-sm text-muted-foreground"> My main framework is <Code>React</Code>. I also <Code>Next.js</Code> as a backend and frontend framework </p>
            </div>
      </div>
      <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2">
              <IllustratorIcon size={42} className=""/>
                <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                <p className="text-sm text-muted-foreground"> My main framework is <Code>React</Code>. I also <Code>Next.js</Code> as a backend and frontend framework </p>
            </div>
      </div>

      
  </Section>
  )
}