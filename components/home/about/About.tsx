import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
            <Reveal>
              <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
                I&apos;m a Front End Software Engineer & Soloprenure / Freelance Web Developer based in Brooklyn, NYC.

              </p>
            </Reveal>

          <Reveal>
            <p className={`${styles.aboutText}` }>
             I&apos;ve held a passion for computer technology, art, design, music ever since I was a kid.
             Becoming a Front End Software Engineer has allowed be to explore these interests while having a positive impact on the world.
             I&apos;m a quick & life-long learner who is very curious about the world and our place in it
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m currently working on portfolio projects to help improve my ability to program, design
              & solve real world issues 
            </p>
          </Reveal>
          <Reveal> 
            <p className={styles.aboutText}>
              {/* Text */}
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m actively looking for new positions where I can merge my
              love for code with my love for art & creativity. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
