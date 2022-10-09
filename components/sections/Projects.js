import ProjectItem from "../utils/ProjectItem";
import SectionHead from "../utils/SectionHead";
import SectionSubHead from "../utils/SectionSubHead";

export default function Projects() {
  return (
    <div id="project" className="bg-white pt-12 pb-16 md:pt-[135px] md:pb-[183px]">
      <SectionHead>Projects</SectionHead>
      <SectionSubHead>Beberapa proyek bikinan saya.</SectionSubHead>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12 pt-12 md:pt-20">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </div>
  );
}
