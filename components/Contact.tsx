import { Badge } from "@/components/ui/badge"
import { ContactCard } from "./ContactCard"
import { Section } from "./Section"

export const Contact = () => {
  return (
  <Section className="flex flex-col items-start gap-4">
    <Badge variant={"outline"} className="text-1xl">Contact me</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Working with you will be a great experience...
    </h2>
    <div className="flex max-md:flex-col w-full gap-4">
        <ContactCard
        className="flex-1"
          url="https://linkedin.com/in/alan-rouilledevdesign" 
          name="Alan" 
          image="/images/DSC00844.png" 
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/144px-LinkedIn_icon.svg.png" description="Linkedin"
          
          />
        <ContactCard
        className="flex-1"
          url="https://x.com/AlanRouille"
          name="@AlanRouille" 
          image="/images/DSC00844.png" 
          mediumImage="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" 
          description="Twitter"
        />
        <ContactCard
        className="flex-1" 
          url="mailto:alanrouilledev@gmail.com"
          name="Alanrouilledev" 
          image="/images/DSC00844.png" 
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png" description="Feel free to email me for any inquiries"
        />
      </div>

  </Section>
  )
}