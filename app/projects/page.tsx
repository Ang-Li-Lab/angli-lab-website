import ProjectsComp from "@/components/Projects";
import { projectsData } from "@/lib/projects";

export default function Projects() {
  return (
    <>
      <div className="text-center pb-3">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Projects</h2>
      </div>

      <div className="pb-3 text-left text-gray-800 space-y-2">
        <p>Click on a card to view the corresponding project.</p>
        <p>
          Some of our project source codes are publicly available on our{" "}
          <a
            href="https://github.com/Ang-Li-Lab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub account
          </a>.
        </p>
      </div>

      <ProjectsComp projectsData={ projectsData } />
    </>
  );
}
