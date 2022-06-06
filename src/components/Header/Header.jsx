import Typography from '@mui/material/Typography';
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";

const Header = (props) => {

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
      <header>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" component="h1" gutterBottom>
            Todos
          </Typography>
        </ThemeProvider>
      </header>
  );
}

export default Header;