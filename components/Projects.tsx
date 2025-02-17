import Image from "next/image"
import Link from "next/link";
import { FaGlobe } from "react-icons/fa6";
import { StaticImageData } from "next/image";

interface ProjectsProps {
  projectsData: {
    name: string;
    intranetOnly: boolean,
    description: string,
    link: string,
    imageUrl: string | StaticImageData,
  }[];
}

export default function ProjectsComp({ projectsData }: ProjectsProps) {
  return (
    <div className="container mx-auto">
      <div className="grid gap-6 w-full px-10 mt-10 md:grid-cols-2 xl:grid-cols-4">
        {projectsData.map((proj, index) => (
          <Link
            href={proj.link}
            target="blank"
            key={index}
          >
            <div
              className="flex flex-col justify-center px-8 mx-6 my-12 text-center rounded-md shadow-md bg-white text-gray-800"
            >
              <Image className="self-center flex-shrink-0 -mt-12 bg-center bg-cover bg-gray-500 h-24 w-72 shadow-md" src={proj.imageUrl} alt="" height={96} width={288} />
              <div className="flex-1 my-4">
                <p className="text-xl font-bold">{proj.name}</p>
                { proj.intranetOnly ? <p className="text-red-800">(Accessible via BCM Intranet)</p> : "" }
                <p className="text-md text-left">{proj.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}