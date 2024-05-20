/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import { Code, Ellipsis, Scroll } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { StateProjet, StateProjetProps } from "./StateProjet";
import { Work, WorkProps } from "./Work";
import { Card } from "./ui/card";

export const States = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Projects</p>
          <div className="flex flex-col gap-4">
            {STATE_PROJECTS.map((project, index) => (
              <StateProjet
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={project.description}
                url="/"
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
      <Card className="p-4 flex-1">
        <p className="text-lg text-muted-foreground">Work</p>
            <div className="flex flex-col gap-4">
              {WORKS.map((work, index) =>(
                <Work
                  key={index}
                  {...work}
                  />
              ))}
            </div>
      </Card>
        <Card className="p-4 flex-1 flex flex-col gap-1.5"><p className="text-lg text-muted-foreground">Contact me</p>
        <ContactCard
          url="www.linkedin.com/in/alan-rouilledevdesign" 
          name="Alan Rouillé" 
          image="/images/DSC00844.png" 
          mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/144px-LinkedIn_icon.svg.png" description="Linkedin"
          
          />
        <ContactCard
          url="https://x.com/AlanRouille"
          name="@AlanRouille" 
          image="/images/DSC00844.png" 
          mediumImage="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" 
          description="Twitter"
        />
        </Card>
      </div>
    </Section>
  );
};

const STATE_PROJECTS : StateProjetProps [] = [
  {
    Logo: Scroll,
    title: "Patrick Betheuil",
    description: "Website creation + Logo design",
    url: "/",
  },
  {
    Logo: Code,
    title: "Marion Bertin photographe",
    description: "Website creation + Logo design",
    url: "/",
  },
  {
    Logo: Ellipsis,
    title: "Sky Picture",
    description: "Website creation + Logo design",
    url: "/",
  },
  {
    Logo: Ellipsis,
    title: "My Portfolio",
    description: "Website creation",
    url: "/",
  },
  
];

const WORKS : WorkProps [] = [
  {
    image: "./images/Logo150px.png",
    title: "ARDeveloper",
    role: "founder",
    date:"2023 - Present",
    url: "https://www.facebook.com/AlanRouilleDesignDev",
    freelance: true,
  },

];

