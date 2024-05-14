import { Section } from "./Section"
import { Card } from "./ui/card"

export const States = () => {
  return  <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3]">
      <Card className="w-full p-4 flex flex-col gap-2">
        Side projet
    </Card>
      </div>
      <div className="flex-[2] flex flex-col gap-4">
        <Card className="p-4 flex-1">Work</Card>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
  </Section> 
}