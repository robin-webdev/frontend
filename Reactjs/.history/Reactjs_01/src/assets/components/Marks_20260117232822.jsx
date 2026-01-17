import React, { useState } from "react";

const Marks = () => {
  const [marks, setMarks] = useState([45, 56, 85, 95, 48, 31, 34, 50]);

    function graceStudents(){
        marks.map(elem => {
            if ()
        })
    }
  return (
    <div className="text-2xl">
      {marks.map((stud, i) => {
        return (
          <h2 key={i} className="py-5">
            Student {i} Marks : {stud}
          </h2>
        );
      })}
    </div>
  );
};

export default Marks;
