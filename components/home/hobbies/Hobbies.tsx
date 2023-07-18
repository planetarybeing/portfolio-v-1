import { SectionHeader } from "@/components/utils/SectionHeader";
import { HobbiesItem } from "./HobbiesItem";

export const Hobbies = () => {
  return (
    <section className="section-wrapper" id="hobbies">
      <SectionHeader title="Hobbies" dir="l" />
      {hobbies.map((item, index) => (
        // Props are hidden down below | lines 18 - 24
        <HobbiesItem key={index} description={item.description} />
      ))}
    </section>
  );
};

const hobbies = [
  {
    //title: "Text",
    //position: "Software Engineer",
    description:
      "One of my favorite hobbies is motorcycling. Learning how to ride a motorcycle and pass the road test in two days was on of the most difficult things I've ever done. Along with collecting indoor plants, gaming, building a gaming p.c, photo & videography, bicycling, urban design, sustainable living",
      /*tech: [

      ]*/
  },
]


