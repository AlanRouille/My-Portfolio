import { Badge } from "@/components/ui/badge"
import { Code } from "./Code"
import { Section } from "./Section"
import { IllustratorIcon } from "./icons/IllustratorIcon"
import { ReactIcon } from "./icons/ReactIcon"
import { TailwindcssIcon } from "./icons/TailwindcssIcon"

export const Skills = () => {
  return (
  <Section className="flex flex-col items-start gap-4">
    <Badge variant={"outline"} className="text-1xl">Skills</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        What I love to work on...
    </h2>
    <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2 flex-1">
              <ReactIcon size={42} className=" animate-spin" style={{animationDuration: "10s"}} />
                <h3 className="text-2xl font-semibold tracking-tight">React</h3>
                <p className="text-sm text-muted-foreground">My main tool is <Code>React</Code>. I also employ <Code>Next.js</Code> as a framework for the backend and frontend.</p>
            </div>
      
      
            <div className="flex flex-col gap-2 flex-1">
              <TailwindcssIcon size={42} />
                <h3 className="text-2xl font-semibold tracking-tight">Tailwindcss</h3>
                <p className="text-sm text-muted-foreground">Using <Code>TailwindCSS</Code>, I can rapidly craft <u>beautiful</u> applications.</p>
            </div>
      
            <div className="flex flex-col gap-2 flex-1">
              <IllustratorIcon size={42} />
                <h3 className="text-2xl font-semibold tracking-tight">Illustrator</h3>
                <p className="text-sm text-muted-foreground"><Code>Illustrator</Code> enables me to design beautiful logos with <u>expert precision</u>.</p>
            </div>
      </div>

      
  </Section>
  )
}