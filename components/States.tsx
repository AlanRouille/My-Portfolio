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
      <p className="text-lg text-muted-foreground">Work</p>
        <Card className="p-4 flex-1">Contact me</Card>
      </div>
    </Section>
  );
};

const STATE_PROJECTS = [
  {
    Logo: Scroll,
    title: "Patrick Betheuil",
    description: "Website creation + Logo design"
  },
  {
    Logo: Code,
    title: "Marion Bertin photographe",
    description: "Website creation + Logo design"
  },
  {
    Logo: Ellipsis,
    title: "Sky Picture",
    description: "Website creation + Logo design"
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
