import ProjectsComp from "@/components/Projects";
import { projectsData } from "@/lib/projects";

export default function Projects() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Projects</h2>
      </div>
      <ProjectsComp projectsData={ projectsData } />
    </>
  );
}
