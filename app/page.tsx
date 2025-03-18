import PhotosComp from "@/components/Photos"
import { photosData } from "@/lib/photos"

export default function Home() {
  return (
    <>
      <div className="text-center pb-3">
        <h2 className="text-3xl  font-bold tracking-tight text-gray-900 sm:text-4xl">About</h2>
      </div>
      <p className="text-left pb-3 text-gray-800">We are interested in conducting clinical epidemiology and health services research using big data, ranging from administrative claims database from public and private payers to electronic health records (EHR) from multiple U.S. hospital systems.</p>
      <div className="flex justify-center">
        <PhotosComp photosData={ photosData } />
      </div>
    </>
  );
}
