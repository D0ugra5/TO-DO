import { useState, useEffect } from "react";

import "../styles/tasklist.scss";

import { FiTrash, FiCheckSquare } from "react-icons/fi";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function TaskList() {
 
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  useEffect(() => {
   
  }, [])
  const info = {
    id: getRandomInt(100),
    title: newTaskTitle,
    isComplete: false,
  };
  const Dados = [...tasks];

  function handleCreateNewTask() {
    if (newTaskTitle) {
      Dados.push(info);

      setTasks(Dados);
    } else {
      alert("Title is empty");
    }
  }

  function handleToggleTaskCompletion(id: number) {
    // Dados.filter((dados) =>id == dados.id );
    Dados.map(function(dados){
    if(id ==dados.id){
        return  dados.isComplete = !dados.isComplete
    }


    });
    
    
     
setTasks(Dados)
  



  }

  function handleRemoveTask(id: number) {
    const filtertask = Dados.filter((dados) => id != dados.id);

    setTasks(filtertask);
  }

  return (
    <section className="task-list container">
      <header>
        <h2>Minhas tasks</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="Adicionar novo todo"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button
            type="submit"
            data-testid="add-task-button"
            onClick={handleCreateNewTask}
          >
            <FiCheckSquare size={16} color="#fff" />
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div
                className={task.isComplete ? "completed" : ""}
                data-testid="task"
              >
                <label className="checkbox-container">
                  <input
                  disabled={false}
                    type="checkbox"
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button
                type="button"
                data-testid="remove-task-button"
                onClick={() => handleRemoveTask(task.id)}
              >
                <FiTrash size={16} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
