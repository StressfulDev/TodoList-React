import {useState} from 'react';
import {createTheme, Input, ThemeProvider} from '@mui/material';

const TodoForm = ({addTask, darkMode}) => {

  const [userInput, setUserInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    if (!userInput.trim()) return;
    addTask(userInput);
    setUserInput('');
  };

  const handleChange = e => {
    setUserInput(e.target.value)
  }

  const theme = createTheme({
    components: {
      MuiInput: {
        styleOverrides: {
          root: {
            fontSize: '1.5em',
            width: '70%',
            marginBottom: '20px',
            color: darkMode ? 'black' : 'white',
          },
        },
      },
    },
  });

  return (
      <form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <Input value={userInput}
                 type="text"
                 size='medium'
                 onChange={handleChange}
                 placeholder='Enter task...'
          />
        </ThemeProvider>
      </form>
  );
}

export default TodoForm;