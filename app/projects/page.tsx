import ProjectsComp from "@/components/Projects";
import { projectsData } from "@/lib/projects";

export default function Projects() {
  return (
    <>
      <div className="text-center pb-3">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Projects</h2>
      </div>
      <p className="text-left pb-3 text-gray-800">Click on a card to view the corresponding project.</p>

      <ProjectsComp projectsData={ projectsData } />
    </>
  );
}
