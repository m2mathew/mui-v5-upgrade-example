// External Dependencies
import { Typography } from '@material-ui/core';
import { lighten, makeStyles } from '@material-ui/core/styles';

// Local Variables
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      minHeight: '3vh',
    },
    backgroundColor: lighten(theme.palette.primary.light, 0.7),
    minHeight: '5vh',
    padding: theme.spacing(4),
  },
}));

// Component Definition
const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Typography
        component="h1"
        variant="h2"
      >
        MUI Pupppers
      </Typography>
    </header>
  );
};

export default Header;
