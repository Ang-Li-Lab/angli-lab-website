import Image from "next/image"
import Link from "next/link";
import { FaGlobe } from "react-icons/fa6";

interface TeamProps {
  peopleData: { [key: string]: string }[];
}

export default function TeamComp({ peopleData }: TeamProps) {
  return (
    <div className="container mx-auto">
      <div className="grid gap-6 w-full px-10 mt-10 md:grid-cols-2 xl:grid-cols-4">
        {peopleData.map((person, index) => (
          <div
            className="flex flex-col justify-center px-8 mx-6 my-12 text-center rounded-md shadow-md bg-white text-gray-800"
            key={ index }
          >
            <Image className="self-center flex-shrink-0 -mt-12 bg-center bg-cover bg-gray-500 rounded-full h-24 w-24" src={ person.imageUrl } alt="" width={ 96 } height={ 96 } />
            <div className="flex-1 my-4">
              <p className="text-xl font-bold">
                { person.name }
                { person.title ? <span>, { person.title }</span> : "" }
              </p>
              <p className="text-md">{ person.role }</p>
            </div>
            <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
              <Link
                href={ person.website }
                target="blank"
                className="bg-blue-800 flex items-center justify-center shadow rounded-full h-8 w-8 text-white"
              >
                <FaGlobe />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}