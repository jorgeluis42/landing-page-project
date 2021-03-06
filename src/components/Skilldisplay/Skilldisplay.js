import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Skillcards from '../Skillcards/Skillcards'

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
  }
}));

export default function ComplexGrid(prop) {
  const classes = useStyles();

  return (
    <div  id="userinfo3">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography gutterBottom variant="subtitle1">
                 Technical Skills:
                </Typography>
               <Skillcards skills = {prop.skills}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

