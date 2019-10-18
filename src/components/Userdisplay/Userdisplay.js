import React, { useState } from 'react';
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
  const [userdata, setUserData] = useState({
    firstName: '',
    lastName: '',
    image: '',
    email: '',
    phoneNumber: '',
    City: '',
    github: '',
    linkedin: '',
    description: '',
    skills: []

  })

  return (
    <div id="userinfo1">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={userdata.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {userdata.firstName} {userdata.lastName}
                </Typography>
                <Typography variant="body2">
                {userdata.email}
                </Typography>
                <Typography variant="body2">
                {userdata.phoneNumber}
                </Typography>
                <Typography variant="body2">
                {userdata.city}
                </Typography>
                <Typography variant="body2" gutterBottom>
                {userdata.github}
                </Typography>
                <Typography variant="body2" gutterBottom>
                {userdata.linkedin}
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

