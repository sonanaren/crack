import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import "../App.css";
import noImage from "../images/no_image_placeholder.png";

const BikeCard = (props) => {
  const bike = props.bike;

  return (
    <div>
      {bike ? (
        <Card>
          <CardMedia
            style={{
              height: 0,
              paddingTop: "56.25%",
              backgroundSize: "initial",
            }}
            image={bike.images[0].image}
            title={bike.name}
          />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {bike.name}
            </Typography>
            <Typography component="p">{bike.description}</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="primary"
              href={`/show-bike/${bike._id}`}
            >
              Go to Bike
            </Button>
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};

export default BikeCard;
