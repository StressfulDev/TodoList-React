import TodoItem from "./TodoItem/TodoItem";
import {Box, Button} from '@mui/material';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import {useState} from "react";

const TodosList = (props) => {

  const {
    todoList,
    clearCompleted,
    toggleEditState,
    completeTask,
    completeAllTasks,
    removeTask,
    saveEditTask,
    darkMode
  } = props

  const [displayAllTodos, setDisplayAllTodos] = useState(true);
  const [displayCurrentTodos, setDisplayCurrentTodos] = useState(false);
  const [displayCompletedTodos, setDisplayCompletedTodos] = useState(false);
  const [focusAllButton, setFocusAllButton] = useState(false);
  const [focusCurrentButton, setFocusCurrentButton] = useState(false);
  const [focusCompletedButton, setFocusCompletedButton] = useState(false);

  const showAllTodos = () => {
    setDisplayAllTodos(true);
    setDisplayCompletedTodos(false);
    setDisplayCurrentTodos(false);

    setFocusAllButton(true)
    setFocusCompletedButton(false)
    setFocusCurrentButton(false)
  }

  const showCurrentTodos = () => {
    setDisplayAllTodos(false);
    setDisplayCompletedTodos(false);
    setDisplayCurrentTodos(true);

    setFocusAllButton(false)
    setFocusCompletedButton(false)
    setFocusCurrentButton(true)
  }

  const showCompletedTodos = () => {
    setDisplayAllTodos(false);
    setDisplayCompletedTodos(true);
    setDisplayCurrentTodos(false);

    setFocusAllButton(false)
    setFocusCompletedButton(true)
    setFocusCurrentButton(false)
  }

  const todoItem = todoList.map(todo => {
    return (
        <TodoItem key={todo.id}
                  todo={todo}
                  completeState={todo.complete}
                  completeTask={completeTask}
                  removeTask={removeTask}
                  saveEditTask={saveEditTask}
                  toggleEditState={toggleEditState}
                  darkMode={darkMode}
        />
    );
  })
  const completedItems = todoList.filter(task => task.complete === true).map(todo => {
    return (
        <TodoItem key={todo.id}
                  todo={todo}
                  completeState={todo.complete}
                  completeTask={completeTask}
                  removeTask={removeTask}
                  saveEditTask={saveEditTask}
                  toggleEditState={toggleEditState}
        />
    );
  })
  const currentItems = todoList.filter(task => task.complete === false).map(todo => {
    return (
        <TodoItem key={todo.id}
                  todo={todo}
                  completeState={todo.complete}
                  completeTask={completeTask}
                  removeTask={removeTask}
                  saveEditTask={saveEditTask}
                  toggleEditState={toggleEditState}
        />
    );
  })

  const disableDeleteButton = !completedItems.length;
  const disableCompleteButton = !todoItem.length

  return (
      <Box>
        <Box sx={{
          height: '70vh',
          overflowY: 'auto'
        }}>
          <Typography variant="h6"
                      component="h6"
                      gutterBottom
                      display={displayAllTodos ? 'block' : 'none'}
          >
            {todoItem}
          </Typography>
          <Typography variant="h6"
                      component="h6"
                      gutterBottom
                      display={displayCompletedTodos ? 'block' : 'none'}
          >
            {completedItems}
          </Typography>
          <Typography variant="h6"
                      component="h6"
                      gutterBottom
                      display={displayCurrentTodos ? 'block' : 'none'}
          >
            {currentItems}
          </Typography>
        </Box>
        <Stack direction={"row"}
               justifyContent={"center"}
               alignItems={'flex-start'}
               spacing={3}
        >
          <IconButton onClick={completeAllTasks}
                      aria-label="mark-all-completed"
                      color={'success'}
                      size={'medium'}
                      disabled={disableCompleteButton}
          >
            <LibraryAddCheckIcon fontSize="inherit"/>
          </IconButton>
          <Button variant={focusAllButton ? 'contained' : 'outlined'}
                  size={'large'}
                  onClick={showAllTodos}
          >
            All {todoList.length}
          </Button>
          <Button variant={focusCurrentButton ? 'contained' : 'outlined'}
                  color={'info'}
                  size={'large'}
                  onClick={showCurrentTodos}
          >
            Current {currentItems.length}
          </Button>
          <Button variant={focusCompletedButton ? 'contained' : 'outlined'}
                  color="success"
                  size={'large'}
                  onClick={showCompletedTodos}
          >
            Completed {completedItems.length}
          </Button>
          <IconButton onClick={clearCompleted}
                      aria-label="delete-all-completed"
                      color={'error'}
                      size={'medium'}
                      disabled={disableDeleteButton}
          >
            <DeleteIcon fontSize="inherit"/>
          </IconButton>
        </Stack>
      </Box>
  );
};

export default TodosList;