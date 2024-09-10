import Projectinfo from "./Projectinfo";
import { projects } from "./Projects";

const ProjectsGrid = () => {
  return (
    <section className="py-12  border-2 border-gray-900 border-x-0 border-b-0 bg-[#040406] ">
      <div className="container mx-auto  ">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#ff2301] to-[#feba00] bg-clip-text text-transparent">
          Our Work
        </h2>

        <Projectinfo projects={projects} title={"Adobe Pr Projects"} />
        <Projectinfo projects={projects} title={"VFX Projects"} />
        <Projectinfo projects={projects} title={"Youtube Projects"} />
      </div>
    </section>
  );
};

export default ProjectsGrid;
