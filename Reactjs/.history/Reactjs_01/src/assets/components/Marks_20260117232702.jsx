import React, { useState } from "react";

const Marks = () => {
  const [marks, setMarks] = useState([45, 56, 85, 95, 48, 31, 34, 50]);
  return (
    <div className="text-xl">
      {marks.map((stud, i) => {
        return (
          <h2 key={i}>
            Student {i} Marks : {stud}
          </h2>
        );
      })}
    </div>
  );
};

export default Marks;
