import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import Image from "next/image";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Plant Shop",
    imgSrc: "ss-a.jpeg",
    code: "https://www.github.com",
    projectLink: "https://www.upwork.com/freelancers/~014a1e4965b9a5772b",
    tech: ["Tailwind", "React", "NextJS", "RESTful API", "Typescript"],
    description:
      "Discover the Green Oasis: Your Ultimate Destination for Indoor Plant Enchantment!",
    modalContent: (
      <>
        <p>
        Welcome to the Green Oasis, your haven for all things green and thriving! Step into our botanical 
        wonderland and immerse yourself in a world of lush foliage, 
        captivating scents, and the beauty of nature brought indoors.
        </p>
        <p>
          The tech stack is based on top of Flutter for the mobile app,
          connected to a Python & FastAPI backend, with data stored in Postgres,
          deployed on Heroku.
        </p>
        <p>
        Torquent orci porta ultrices nam dis dolor sapien platea sollicitudin 
        nullam ridiculus egestas interdum elementum
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
  {
    title: "Dentist Landing Page",
    imgSrc: "ss-dental.jpeg",
    code: "https://www.github.com",
    projectLink: "https://www.upwork.com/freelancers/~014a1e4965b9a5772b",
    tech: ["Node", "Express", "Postgres", "Kafka", "Redis"],
    description:
      "Introducing Dental Care Excellence: Your Path to a Radiant Smile!",
    modalContent: (
      <>
        <p>
        Are you longing for a brilliant, confident smile that lights up every room? 
        Look no further than Dental Care Excellence, 
        your trusted partner in dental health and beauty.
        </p>
        <p>
        Mattis mauris egestas pellentesque magnis amet 
        arcu vivamus sem curabitur laoreet donec blandit lacus consectetur
        </p>
        <p>
          The team in total consists of 5 developers. This is a passion project
          for all of us.
        </p>
        <p>
        Torquent orci porta ultrices nam dis dolor sapien platea sollicitudin 
        nullam ridiculus egestas interdum elementum
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          quia officia odio nulla consectetur aperiam ad tempora magni magnam
          nesciunt.
        </p>
        <p>
          Fuga id sapiente facere ipsa eius exercitationem officiis deleniti,
          rerum dolorum. Deserunt soluta modi culpa animi.
        </p>
      </>
    ),
  },
];