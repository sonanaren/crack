import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
} from '@material-ui/core';
import {
  Favorite as FavoriteIcon,
  Share as ShareIcon,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  engineCC: {
    marginRight: theme.spacing(8),
  },
}));

const CardView = (props) => {
  const item = props.item;
  const routeUri = props.routeUri;

  const classes = useStyles();

  return (
    <div>
      {item ? (
        <Card>
          <Link to={`${routeUri}/${item._id}`}>
            <CardMedia
              style={{
                height: 0,
                paddingTop: '56.25%',
                backgroundSize: 'contain',
              }}
              image={item.images[0].image}
              title={item.model_name}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {item.model_name}
            </Typography>
            <Typography
              variant="subtitle2"
              display="inline"
              className={classes.engineCC}
            >
              Engine: {item.engine.cc} CC
            </Typography>
            <Typography variant="subtitle2" display="inline">
              Mileage: {item.fuel_consumptions.mileage}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};

export default CardView;
