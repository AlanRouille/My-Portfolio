/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Section } from '../components/Section';
import { GithubIcon } from '../components/icons/GithubIcon';
import { ThemeToggle } from './ThemeToogle';
import { FacebookIcon } from './icons/FacebookIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { buttonVariants } from './ui/button';

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-center">
        {/* <h1 className="text-lg font-bold text-primary">
          Alanrouille.com
        </h1> */}
        <img src="/images/Logo150px.png" alt="Logo" className=" h-14 w-auto" />
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/AlanRouille"
            className={cn(buttonVariants({ variant: 'outline' }), 'size-6 p-0')}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/alan-rouilledevdesign/"
            className={cn(buttonVariants({ variant: 'outline' }), 'size-6 p-0')}
          >
            <LinkedInIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://www.facebook.com/AlanRouilleDesignDev"
            className={cn(buttonVariants({ variant: 'outline' }), 'size-6 p-0')}
          >
            <FacebookIcon size={12} className="text-foreground" />
          </Link>
        </ul>
        <ThemeToggle />
      </Section>
    </header>
  );
};
