import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
      <div class="grid-container">
      <div class="item1">
    <Card className={classes.card} >
      <CardHeader
        title="Project Title"
        subheader="Project Link"
      />
      <CardMedia
        className={classes.media}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        title="image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        I identify myself as a problem solver and creator who seeks the opportunity to use any resources or tools to build effective business
solution. My objective is to utilize my skills and knowledge to create websites and applications that will be enjoyed by thousands of users.
I’m looking forward to being part of a talented team that I can contribute to and grow with professionally.
        </Typography>
      </CardContent>
      </Card>
      </div>
      <div class="item1">
      <Card className={classes.card}>
      <CardHeader
        title="Project Title"
        subheader="Project Link"
      />
      <CardMedia
        className={classes.media}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        title="image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        I identify myself as a problem solver and creator who seeks the opportunity to use any resources or tools to build effective business solution. My objective is to utilize my skills and knowledge to create websites and applications that will be enjoyed by thousands of users. I’m looking forward to being part of a talented team that I can contribute to and grow with professionally
        </Typography>
      </CardContent>
      </Card>
      </div>
      <div class="item1">
      <Card className={classes.card}>
      <CardHeader
        title="Project Title"
        subheader="Project Link"
      />
      <CardMedia
        className={classes.media}
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        title="image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        I identify myself as a problem solver and creator who seeks the opportunity to use any resources or tools to build effective business solution. My objective is to utilize my skills and knowledge to create websites and applications that will be enjoyed by thousands of users. I’m looking forward to being part of a talented team that I can contribute to and grow with professionally
        </Typography>
      </CardContent>
      </Card>
      </div>
      </div>
  );
}