/* eslint-disable @next/next/no-img-element */
import { Code, Ellipsis, LucideIcon, Scroll } from "lucide-react";
import Link from "next/link.js";
import { Section } from "./Section";
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
                  image={work.image}
                  title={work.title}
                  role={work.role}
                  date={work.date}
                  url= {work.url}
                  />
              ))}
            </div>
      </Card>
        <Card className="p-4 flex-1">Contact me</Card>
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
  
];

type StateProjetProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const StateProjet = (props: StateProjetProps) => {
  return (
    <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS :WorkProjetProps[] = [{
  image: "https://scontent.fcdg3-1.fna.fbcdn.net/v/t39.30808-6/391589987_628114522824713_1843163460124779404_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BzJ03ynF8ikQ7kNvgFHxE8V&_nc_ht=scontent.fcdg3-1.fna&oh=00_AYCOCRDjgF_T0ZRm5XEiwCom2V7vxiE1h8hFb2Wz_4LaaQ&oe=664B937F",
  title:"Alan Rouillé",
  role:"Founder",
  date:"2023 - Present",
  url:"https://www.facebook.com/AlanRouilleDesignDev",
}] 

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

const Work = (props: WorkProps) => {
  return (
    <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
        <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md"/>
      
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
      <p className="text-sm text-muted-foreground">{props.date}</p> 
      </div>
    </Link>
  );
};