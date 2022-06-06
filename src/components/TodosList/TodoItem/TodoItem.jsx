import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import {Box, createTheme, Input, ThemeProvider} from '@mui/material';
import {useState} from "react";

const TodoItem = (props) => {

  const {
    todo,
    completeState,
    toggleEditState,
    completeTask,
    removeTask,
    saveEditTask,
    darkMode
  } = props

  const [userInput, setUserInput] = useState(todo.task);

  const toggleEditTodo = (id) => {
    toggleEditState(id)
  }

  const saveEditTodo = (id) => {
    saveEditTask(id, userInput)
  }

  const handleChange = e => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    saveEditTodo(todo.id)
  }

  const strikeCompleted = completeState ? "todo strikeTask" : "todo";
  const deleteCompleted = completeState ? "error" : "default";
  const toggleShowInput = todo.edit ? "showInput" : "hideInput";
  const toggleHideText = todo.edit ? "hideText" : "showText";
  const hideEditButton = todo.edit ? "hideEditButton" : "showEditButton";
  const hideSaveButton = todo.edit ? "showSaveButton" : "hideSaveButton";
  const disableCheckbox = !!todo.edit;
  const disableEditButton = !!completeState;

  const theme = createTheme({
    components: {
      MuiInput: {
        styleOverrides: {
          root: {
            width: '150%',
            color: darkMode ? 'black' : 'white',
          },
        },
      },
    },
  });

  return (
      <Box id={todo.id} className={strikeCompleted}>
        <Checkbox sx={{color: darkMode ? 'gray' : '#A9A9A9'}}
                  checked={completeState}
                  disabled={disableCheckbox}
                  color="success"
                  onClick={() => completeTask(todo.id)
                  }/>
        <Box className={hideEditButton}>
          <IconButton sx={{color: darkMode ? 'gray' : '#A9A9A9'}}
                      aria-label="delete"
                      disabled={disableEditButton}
                      onClick={() => toggleEditTodo(todo.id)
                      }>
            <EditIcon/>
          </IconButton>
        </Box>
        <Box className={hideSaveButton}>
          <IconButton sx={{color: darkMode ? 'gray' : '#A9A9A9'}}
                      aria-label="save"
                      onClick={() => saveEditTodo(todo.id, todo.task)
                      }>
            <DoneIcon/>
          </IconButton>
        </Box>
        <p className={toggleHideText}>
          {todo.task}
        </p>
        <Box className={toggleShowInput}>
          <ThemeProvider theme={theme}>
            <form onSubmit={handleSubmit}>
              <Input value={userInput}
                     type="text"
                     size='small'
                     onChange={handleChange}
              />
            </form>
          </ThemeProvider>
        </Box>
        <Box className={'btnWrap'}>
          <Stack direction="row"
                 spacing={1}>
            <IconButton onClick={() => removeTask(todo.id)}
                        aria-label="delete"
                        color={deleteCompleted}
                        disabled={disableCheckbox}
            >
              <DeleteIcon/>
            </IconButton>
          </Stack>
        </Box>
      </Box>
  );
};

export default TodoItem;