import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BlogPic from "../blogPic.jpg";


const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background:'rgba(0,0,0,0.5)',

   

  },
  media: {
    height: 400,
  },
  title: {
    fonfFamily: 'Nunito',
    fontWeight:'bold',
    fontSize:'2rem',
    color:'white',
    textAlign:'center',
  },
  desc: {
    fonfFamily: 'Nunito',
    fontSize:'1.1rem',
    color:'white',
    textAlign:'center',
  },
});

export default function ImageCard({card}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={process.env.PUBLIC_URL + BlogPic}
          title="Fishing Friday"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
          Fishing Friday
          </Typography>

          <Typography className={classes.desc}  variant="body2" color="textSecondary" component="p">
           Caught a fish. It was Rad. I should probably not wear a lifejacket and look like a pussy.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="white">
          Share
        </Button>
        <Button size="small" color="white">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}