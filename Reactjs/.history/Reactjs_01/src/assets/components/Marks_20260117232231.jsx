import React from "react";

const Marks = () => {
  const [marks, setMarks] = useState([45, 56, 85, 95, 48, 31, 34, 50]);
  return (
    <div>
      {marks.map((stud, i) => {
        return <h2 >Student {i}</h2>;
      })}
    </div>
  );
};

export default Marks;
