// External Dependencies
import { Alert } from '@material-ui/lab';
import {
  Box,
  CircularProgress,
  Collapse,
  Grid,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { lighten, makeStyles, useTheme } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import HelpIcon from '@material-ui/icons/Help';
import axios from 'axios';

// External Dependencies
import PupperCard from './shared/PupperCard';

// Local Variables
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      minHeight: '3vh',
    },
    backgroundColor: lighten(theme.palette.secondary.light, 0.9),
    minHeight: '5vh',
    padding: theme.spacing(4),
  },
}));

const apiUrl= 'https://dog.ceo/api/breeds/image/random/8';

// Component Definition
const PupperContent = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [pupperList, setPupperList] = useState([]);

  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState('');

  useEffect(() => {
    async function getPuppers() {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl);
        console.log('axios response', response);

        setPupperList(response.data.message);
        setLoading(false);
      } catch (error) {
        console.error('axios error', error);

        setFetchError(error);
        setLoading(false);
      }
    }

    // Fetch content from DogCeo API
    getPuppers();
  }, []);

  return (
    <main className={classes.root}>
      <Box
        display="flex"
        marginBottom={4}
        justifyContent="center"
      >
        <Typography
          component="h2"
          variant="h5"
        >
          Puppers on Parade
        </Typography>

        <Box
          clone
          marginLeft={1.5}
        >
          <Tooltip
            arrow
            interactive
            title={(
              <Typography>
                The Dog CEO <a href="https://dog.ceo/dog-api/documentation/">API</a> provides free images of doggos. It's neato.
              </Typography>
            )}
          >
            <div>
              <HelpIcon htmlColor={theme.palette.primary.main} />
            </div>
          </Tooltip>
        </Box>
      </Box>

      <Collapse in={Boolean(fetchError)}>
        <Alert>Something went wrong while fetching pupper data.</Alert>
      </Collapse>

      {loading ? <CircularProgress /> : (
        <Grid
          container
          spacing={3}
        >
          {pupperList.map((pupImgSrc) => (
            <PupperCard
              key={pupImgSrc}
              pupImgSrc={pupImgSrc}
            />
          ))}
        </Grid>
      )}
    </main>
  );
};

export default PupperContent;
