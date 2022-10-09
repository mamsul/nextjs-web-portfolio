import SectionHead from "../utils/SectionHead";
import SectionSubHead from "../utils/SectionSubHead";
import SkillItem from "../utils/SkillItem";

export default function Skills() {
  const skills = [
    {
      image: "/static/js-icon.png",
      skill: "Javascript",
      level: "Lanjutan",
    },
    {
      image: "/static/react-icon.png",
      skill: "React JS",
      level: "Beginner",
    },
    {
      image: "/static/node-icon.png",
      skill: "Node JS",
      level: "Lanjutan",
    },
    {
      image: "/static/node-icon.png",
      skill: "Node JS",
      level: "Lanjutan",
    },
    {
      image: "/static/react-icon.png",
      skill: "React JS",
      level: "Beginner",
    },
    {
      image: "/static/js-icon.png",
      skill: "Javascript",
      level: "Lanjutan",
    },
    {
      image: "/static/react-icon.png",
      skill: "React JS",
      level: "Beginner",
    },
    {
      image: "/static/js-icon.png",
      skill: "Javascript",
      level: "Lanjutan",
    },
    {
      image: "/static/node-icon.png",
      skill: "Node JS",
      level: "Lanjutan",
    },
  ];

  return (
    <div id="skill" className="bg-bgGray pt-12 md:pt-32 pb-16 md:pb-[183px]">
      <SectionHead>Skills</SectionHead>
      <SectionSubHead>Beberapa Kemampuan Saya.</SectionSubHead>
      <div className="container mx-auto pt-14 md:pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, i) => (
            <SkillItem key={i} item={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
