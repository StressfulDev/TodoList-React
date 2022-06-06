import {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import TodoForm from "./components/TodosForm/TodoForm";
import TodosList from "./components/TodosList/TodosList";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import {Box} from "@mui/material";
import {v4 as uuid} from 'uuid';

const classes = {
  root: {
    paddingTop: '15px',
    paddingBottom: '15px',
    textAlign: 'center'
  }
}

const App = () => {

  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [darkMode, setDarkMode] = useState(true);

  const uniqId = uuid();

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    setTodoList(todoList);
  }, [todoList]);

  const editTask = id => {
    const newTodo = [...todoList].filter(task => {
      if (task.id === id) {
        task.edit = !task.edit
      }
      return task;
    })
    setTodoList(newTodo);
  }

  const saveEditTask = (id, userInput) => {
    const newTodo = [...todoList].map(task => {
      if (task.id === id) {
        task.edit = !task.edit
        task.task = userInput;
      }
      return task;
    })
    setTodoList(newTodo);
  }

  const clearCompleted = () => {
    let filtered = todoList.filter(task => {
      return !task.complete;
    });
    setTodoList(filtered);
  };

  const completeTask = id => {
    const newTodo = [...todoList].filter(task => {
      if (task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    })
    setTodoList(newTodo);
  }

  const completeAllTasks = () => {
    const newTodo = [...todoList].map(task => {
      if (task.complete === false) {
        task.complete = true
      }
      return task;
    })
    setTodoList(newTodo);
  }

  const addTask = (userInput) => {
    const newTodo = [...todoList, {
      id: uniqId,
      task: userInput,
      complete: false,
      checked: false,
      edit: false
    }];
    setTodoList(newTodo);
  }

  const removeTask = id => {
    const newTodo = [...todoList].filter(task => task.id !== id);
    setTodoList(newTodo);
  }

  return (
      <Box sx={classes.root}>
        <Header/>
        <ThemeToggle darkMode={darkMode}
                     setDarkMode={setDarkMode}
        />
        <TodoForm addTask={addTask}
                  darkMode={darkMode}
        />
        <TodosList todoList={todoList}
                   toggleEditState={editTask}
                   completeTask={completeTask}
                   completeAllTasks={completeAllTasks}
                   removeTask={removeTask}
                   saveEditTask={saveEditTask}
                   clearCompleted={clearCompleted}
                   darkMode={darkMode}
        />
      </Box>
  );
};

export default App;