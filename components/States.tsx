/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight, Code, Ellipsis, LucideIcon, Scroll } from "lucide-react";
import Link from "next/link.js";
import { Section } from "./Section";
import { Badge } from "./ui/badge";
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
        <ContactCard name="Alan Rouillé" image="/images/DSC00844.png" mediumImage="data:image/png;base64,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" description="Linkedin"/>
        <ContactCard name="@AlanRouille" image="/images/DSC00844.png" mediumImage="data:image/png;base64,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" description="Twitter"/>
        </Card>
      </div>
    </Section>
  );
};

const ContactCard = (props:{image: string; mediumImage: string; name: string; description: string;

}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
      <div className="relative">
        <img src={props.image} alt= {props.name} className="w-10 h-10 rounded-full object-contain" />
        <img src={props.mediumImage} alt= {props.name} className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain" /> 
      </div>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg text-primary font-semibold">{props.name}</p>
        </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      <ArrowUpRight className="group-hover:translate-x-2 mr-4 group-hover:-translate-y-2 transition-transform" size={16}/>
    </Card>
  )
}

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

const WORKS : WorkProps [] = [
  {
    image: "https://scontent.fcdg3-1.fna.fbcdn.net/v/t39.30808-6/391589987_628114522824713_1843163460124779404_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BzJ03ynF8ikQ7kNvgFHxE8V&_nc_ht=scontent.fcdg3-1.fna&oh=00_AYCOCRDjgF_T0ZRm5XEiwCom2V7vxiE1h8hFb2Wz_4LaaQ&oe=664B937F",
    title: "ARDeveloper",
    role: "founder",
    date:"2023 - Present",
    url: "https://www.facebook.com/AlanRouilleDesignDev",
    freelance: true,
  },

];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean
};

const Work = (props: WorkProps) => {
  return (
    <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
        <img src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md"/>
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg text-primary font-semibold">{props.title}</p>
          {props.freelance && <Badge variant="outline">Freelance</Badge>}
        </div>
          <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-muted-foreground">{props.date}</p>
    </Link>
  );
};