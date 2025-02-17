import TeamComp from "@/components/Team";
import { peopleData } from "@/lib/people";

export default function About() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
      </div>
      <TeamComp peopleData={ peopleData } />
    </>
  );
}
