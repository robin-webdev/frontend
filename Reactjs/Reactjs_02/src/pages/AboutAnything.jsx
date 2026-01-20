import React from "react";
import { useParams } from "react-router-dom";

const AboutAnything = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="capitalize text-5xl font-semibold ">
      About What? {params.id}
    </div>
  );
};

export default AboutAnything;
