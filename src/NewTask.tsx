import { useRef } from "react";
import s from "./NewTask.styles";
import { Task } from "./types";

interface Props {
  onNewTask(query: string): void;
}

export const NewTask: React.FC<Props> = ({ onNewTask }) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const handleButtonPress = () => {
    const query = searchInput.current?.value.trim();
    if (query) {
      onNewTask(query);
    }
  };

  return (
    <s.SearchContainer>
      <input
        type="task"
        ref={searchInput}
        placeholder="Add a new task to your to-do list"
      />
      <button aria-label="New task" onClick={handleButtonPress}>
        <span className="material-symbols-outlined">Add New Task</span>
      </button>
    </s.SearchContainer>
  );
};