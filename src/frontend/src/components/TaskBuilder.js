import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import TaskDataService from "../services/task.service.js";


const TaskBuilder = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await getUserNotCompleteTasks();
      setTasks(tasks);

      getTasks();
    };
  }, []);

  const getUserNotCompleteTasks = async () => {
    const data = await TaskDataService.getUserNotCompleteTasks();

    return data.data;
  };

  const addTask = async (task) => {
    await TaskDataService.add(task)
      .then((response) => {
        setTasks([...tasks, response.data]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteTask = async (id) => {
    await TaskDataService.delete(id)
      .then((response) => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const markComplete = async (id) => {
    await TaskDataService.update(id)
      .then((response) => {
        setTasks(tasks.filter((task) => task.id !== id));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path="/tasks"
          exact
          render={() => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={markComplete}
                />
              ) : (
                "No Tasks To Show"
              )}
            </>
          )}
        />
      </div>
    </Router>
  );
};

export default TaskBuilder;
