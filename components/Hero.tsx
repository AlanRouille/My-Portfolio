/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section"

export const Hero = () => {
  return <Section className="flex max-lg:flex-col items-start">
    <div className="flex-[2]"> 
      <h2>Alan Rouillé</h2>
      <h3>
      Developer web and Design consultant
      </h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nulla magnam officiis atque. Velit perferendis eos modi perspiciatis eveniet. Qui enim minima beatae, eaque provident culpa praesentium necessitatibus similique deleniti.</p>
      <div className="flex-1">
      <img src="https://media.licdn.com/dms/image/D4E03AQHzjPKWWBbs4Q/profile-displayphoto-shrink_800_800/0/1676992405536?e=1720656000&v=beta&t=edoZFcvgUWBgd0BiEXxgrauUU3xrVZ2CHx55iIPqQQ4"
      className="w-full h-auto"
      alt="Alan's picture"
      />
      </div>
    </div>
  </Section>
}