// import { create } from "zustand";

// const useBear = create((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }));

// export default useBear;

import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useTaskStore = create(
  devtools(
    (set) => ({
      tasks: [],
      addTask: (task) =>
        set(
          (state) => ({ tasks: [...state.tasks, task] }),
          false,
          "tasks/addTask", // Action name for devtools
        ),
      removeTask: (id) =>
        set(
          (state) => ({ tasks: state.tasks.filter((t) => t.id !== id) }),
          false,
          "tasks/removeTask",
        ),
    }),
    { name: "TaskStore" }, // Store name in devtools
  ),
);    

export default useTaskStore;
