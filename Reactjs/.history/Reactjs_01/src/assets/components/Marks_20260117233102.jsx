import React, { useState } from "react";

const Marks = () => {
  const [marks, setMarks] = useState([45, 56, 85, 95, 48, 31, 34, 50]);

  function graceStudents() {
    marks.map((elem) => {
      if (elem < 33) {
        return 33;
      }
      return elem;
    });
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
      <button
        onClick={graceStudents}
        className="active:scale-0.67 bg-[crimson] px-3 py-2 rounded"
      >
        Grace Students
      </button>
    </div>
  );
};

export default Marks;
