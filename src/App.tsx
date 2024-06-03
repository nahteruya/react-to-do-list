import styles from "./App.module.css";
import Logo from "./assets/Logo.png";
import Clipboard from "./assets/Clipboard.png";
import { PlusCircle } from "phosphor-react";
import TaskItem from "./components/TaskItem";
import { useState, ChangeEvent, FormEvent } from "react";

export interface Task {
  name: string;
  done: boolean;
}

function App() {
  const [tasksList, setTasksList] = useState<Task[]>([]);
  const [newTaskValue, setNewTaskValue] = useState("");

  function handleChangeInputTaskValue(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskValue(event.target.value);
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();
    setTasksList([...tasksList, { name: newTaskValue, done: false }]);
    setNewTaskValue("");
  }

  function handleToggleDone(task: Task) {
    setTasksList(
      tasksList.map((currentTaks) =>
        currentTaks.name === task.name
          ? { ...task, done: !task.done }
          : currentTaks
      )
    );
  }

  function handleDeleteTask(task: Task) {
    const tasksListWithoutDeletedOne = tasksList.filter(
      (currentTask) => currentTask.name !== task.name
    );
    setTasksList(tasksListWithoutDeletedOne);
    console.log(tasksList);
  }

  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo ToDo List" width={126} />
      </header>
      <form className={styles.form} onSubmit={handleAddNewTask}>
        <input
          type="text"
          placeholder="Adicione uma tarefa"
          value={newTaskValue}
          onChange={handleChangeInputTaskValue}
        />
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
      <div className={styles.taksInfo}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>{tasksList.length}</span>
        </div>
        <div className={styles.tasksDone}>
          <strong>Concluídas</strong>
          <span>
            {tasksList.filter((task) => task.done).length} de {tasksList.length}
          </span>
        </div>
      </div>
      {tasksList.length === 0 ? (
        <div className={styles.emptyState}>
          <img src={Clipboard} width={56} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      ) : (
        <div className={styles.taskList}>
          {tasksList.map((task) => (
            <TaskItem
              key={task.name}
              task={task}
              toggleDone={handleToggleDone}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
