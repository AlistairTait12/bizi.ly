import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask2";
import TaskDataService from "../services/task.service.js";
import { Button, TextField, Typography } from "@material-ui/core";

const TaskBuilder = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      console.log(fetchTasks());
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await TaskDataService.getAll();

    return data.data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8080/api/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  const addTask = async (data) => {
    await TaskDataService.create(data)
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

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:8080/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
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
          render={(props) => (
            <Typography>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks To Show"
              )}
            </Typography>
          )}
        />
      </div>
    </Router>
  );
};

export default TaskBuilder;
