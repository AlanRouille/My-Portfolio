/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Code } from './Code';
import { Section } from './Section';
import { GithubIcon } from './icons/GithubIcon';
import { IllustratorIcon } from './icons/IllustratorIcon';
import { NextIcon } from './icons/NextIcon';
import { ReactIcon } from './icons/ReactIcon';
import { TailwindcssIcon } from './icons/TailwindcssIcon';
import { VercelIcon } from './icons/VerselIcon';

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-4xl text-primary">
          hey, I am Alan Rouillé👋
        </h2>
        <h3 className="text-2xl font-caption">
          Developer web and Design consultant
        </h3>
        <p className="text-base">
          I am a frontend developer and design consultant, specializing in
          creating interfaces with{' '}
          <Link href="https://nextjs.org/">
            <Code className="inline-flex items-center gap-1 mr-1.5">
              <NextIcon size={16} className="inline" />
              Next
            </Code>
          </Link>
          <Link href="https://fr.legacy.reactjs.org/">
            <Code className="inline-flex items-center gap-1 mr-1.5">
              <ReactIcon size={16} />
              React
            </Code>
          </Link>
          <Link href="https://tailwindcss.com/">
            <Code className="inline-flex items-center gap-1 mr-1.5">
              <TailwindcssIcon size={16} className="inline" />
              Tailwindcss
            </Code>
          </Link>
          <Link href="https://www.adobe.com/fr/products/illustrator.html">
            <Code className="inline-flex items-center gap-1 mr-1.5">
              <IllustratorIcon size={16} className="inline" />
              Illustrator
            </Code>
          </Link>
          . Passionate about innovation and community, I develop aesthetic and
          functional solutions, utilizing the{' '}
          <Link href="https://vercel.com/">
            <Code className="inline-flex items-center gap-1">
              <VercelIcon size={16} className="inline" />
              Vercel
            </Code>
          </Link>{' '}
          platform to optimize the deployment of web applications. You can find
          my work on{' '}
          <Code className="inline-flex items-center gap-1 mr-1.5">
            <GithubIcon size={16} className="inline" />
            GitHub
          </Code>
          .
        </p>
      </div>
      <div className="flex-[2] max:md:mx-auto flex justify-center">
        <img
          src="/images/DSC00844.png"
          className="w-full h-auto"
          alt="Alan's picture "
        />
      </div>
    </Section>
  );
};
