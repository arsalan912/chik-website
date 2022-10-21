import React from "react";
import InstagramImg from "./InstagramImg";
import insta1 from "./images/insta-1.jpg";
import insta2 from "./images/insta-2.jpg";
import insta3 from "./images/insta-3.jpg";
import insta4 from "./images/insta-4.jpg";
import insta5 from "./images/insta-5.jpg";
import insta6 from "./images/insta-6.jpg";

export default function Instagram() {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">follow me on instagram</p>
      <p className="pb-4">@chik</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={insta1} />
        <InstagramImg socialImg={insta2} />
        <InstagramImg socialImg={insta3} />
        <InstagramImg socialImg={insta4} />
        <InstagramImg socialImg={insta5} />
        <InstagramImg socialImg={insta6} />
      </div>
    </div>
  );
}
