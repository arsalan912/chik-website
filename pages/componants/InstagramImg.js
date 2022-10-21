import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function InstagramImg({ socialImg }) {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt="/"
        height={400}
        width={400}
        className="w-full h-full"
        layout="responsive"
      />
      <div className="flex justify-center items-center absolute top-0 left-0 bottom-0 right-0 hover:bg-black/70  group">
        <p className="text-gray-300 hidden group-hover:block">
          <FaInstagram size={30} />
        </p>
      </div>
    </div>
  );
}
