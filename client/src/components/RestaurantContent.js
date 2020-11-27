import React from "react";
import { useSelector } from "react-redux";

//M-UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import RestaurantCard from "./RestaurantCard";

const RestaurantContent = () => {
  const { restaurants } = useSelector((state) => state.data);
  const restaurantArray = restaurants.restaurants;

  const getRestaurantCard = (restaurantObj) => {
    return (
      <Grid item xs={12} sm={3} key={restaurantObj._id}>
        <RestaurantCard {...restaurantObj} />
      </Grid>
    );
  };
  return (
    <>
      <Typography
        gutterBottom
        variant="h6"
        color="textPrimary"
        component="p"
        noWrap
      >
        Date el gusto - encuentra tu restaurante favorito
      </Typography>
      <br />
      <Grid container spacing={2}>
        {restaurantArray ? (
          restaurantArray.length > 0 ? (
            restaurantArray.map((restaurant) => getRestaurantCard(restaurant))
          ) : (
            <p>
              Por el momento no tenemos restaurantes registrados en tu ubicación
            </p>
          )
        ) : (
          <p>Tenemos un problema de conexión, por favor vuelve a intentarlo</p>
        )}
      </Grid>
    </>
  );
};

export default RestaurantContent;
