// External Dependencies
import { Card, CardContent, Grid } from '@material-ui/core';
import { lighten, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// Local Variables
const propTypes = {
  pupImgSrc: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  content: {
    '&:last-child': {
      paddingBottom: 0,
    },
    backgroundColor: lighten(theme.palette.action.disabled, 0.8),
    height: 400,
    width: 400,
  },
  image: {
    height: 360,
    width: 360,
    objectFit: 'contain',
  },
}));

// Component Definition
const PupperCard = ({ pupImgSrc }) => {
  const classes = useStyles();

  return (
    <Grid item xs>
      <Card>
        <CardContent className={classes.content}>
          <img
            alt="Random pupper."
            className={classes.image}
            src={pupImgSrc}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

PupperCard.propTypes = propTypes;

export default PupperCard;
