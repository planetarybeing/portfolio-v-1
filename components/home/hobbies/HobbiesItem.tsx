import { Reveal } from "@/components/utils/Reveal";
import styles from "./hobbies.module.scss";

interface Props {
  description: string;
}

export const HobbiesItem = ({
  description
}: Props) => {
  return (
    <div className={styles.hobbies}>
      <div className={styles.heading}>
     {/* Reveal components go here */}
      </div>

      <div className={styles.heading}>
        {/* Reveal components go here */}
      </div>
      <Reveal>
        <p className={styles.description}>{description}</p>
      </Reveal>
     <Reveal>
        <div className={styles.tech}>
          {/*{tech.map((item) => (
            <span key={item} className="chip">
          {item}
            </span>
          ))}*/}
        </div>
      </Reveal>
    </div>
  );
};