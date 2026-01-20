import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-10">
      Contact
      <button
        className="px-4 py-2 rounded-lg bg-[crimson] active:scale-95 w-fit"
        onClick={() => {
          navigate("/about");
        }}
      >
        Navigate
      </button>
    </div>
  );
};

export default Contact;
