import React from "react";
import Image from "next/image";
import work1 from "./images/work-1.jpg";
import work2 from "./images/work-2.jpg";
import work3 from "./images/work-3.jpg";
import work4 from "./images/work-4.jpg";
import work5 from "./images/work-5.jpg";

export default function Portfolio() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4">travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src={work1}
            alt="/"
            layout="responsive"
            width="677"
            height="451"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={work2}
            width="215"
            height="217"
            objectFit="cover"
            layout="responsive"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={work3}
            width="215"
            height="217"
            objectFit="cover"
            layout="responsive"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={work4}
            width="215"
            height="217"
            objectFit="cover"
            layout="responsive"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={work5}
            width="215"
            height="217"
            objectFit="cover"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
