import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";
import { Task } from "../App";

interface TaskItemProps {
  task: Task;
  toggleDone: (task: Task) => void;
  onDelete: (task: Task) => void;
}

const TaskItem = ({ task, toggleDone, onDelete }: TaskItemProps) => {
  function handleToggleDone() {
    toggleDone(task);
  }

  function handleDeleteTask() {
    onDelete(task);
  }

  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        {task.done ? (
          <CheckCircle
            size={24}
            weight="fill"
            color="#5e60ce"
            className={styles.iconCheckCircle}
            onClick={handleToggleDone}
          />
        ) : (
          <Circle
            size={24}
            color="#4ea8de"
            className={styles.iconCircle}
            onClick={handleToggleDone}
          />
        )}
      </div>
      <p
        style={
          task.done
            ? { textDecoration: "line-through", color: "#808080" }
            : { color: "#F2F2F2" }
        }
      >
        {task.name}
      </p>
      <Trash size={24} onClick={handleDeleteTask} />
    </div>
  );
};

export default TaskItem;
