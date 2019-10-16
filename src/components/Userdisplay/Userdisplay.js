import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Skilldisplay from '../Skilldisplay/Skilldisplay'
import Descriptiondisplay from '../Descriptiondisplay/Descriptiondisplay'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginTop: '30px',
    opacity: .8,
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div id="userinfo1">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="assets/images/1.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Jorge Luis
                </Typography>
                <Typography variant="body2">
                  jorge.luis4212@gmail.com
                </Typography>
                <Typography variant="body2">
                  (305) 720-6352
                </Typography>
                <Typography variant="body2">
                  Miami,FL
                </Typography>
                <Typography variant="body2" gutterBottom>
                github.com/jorgeluis42
                </Typography>
                <Typography variant="body2" gutterBottom>
                linkedin.com/in/jorge-luis42/
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Descriptiondisplay/>
      <Skilldisplay/>
    </div>
  );
}

