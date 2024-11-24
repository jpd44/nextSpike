import viaductImg from "@/images/viaduct.jpg";
import Image from "next/image";
const imageUrl = "https://www.course-api.com/images/tours/tour-1.jpeg";

// get the image specs
console.log(viaductImg);

export default function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="flex">
        <div className="p-2">
          <Image
            src={viaductImg}
            priority
            alt="viaduct"
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>local image</h2>
        </div>
        <div className="p-2">
          <Image
            src={imageUrl}
            priority
            alt="viaduct"
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>remote image</h2>
        </div>
      </section>
    </div>
  );
}
