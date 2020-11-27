import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import cover from "../images/food_upscaled.png";

const useStyles = makeStyles((theme) => ({
  presentation: {
    display: "flex",
    width: "90%",
    margin: "auto",
    minHeight: "80vh",
    alignItems: "center",
    // eslint-disable-next-line
    ["@media (max-width:1024px)"]: {
      flexDirection: "column",
    },
  },
  introduction: {
    flex: 1,
    paddingLeft: 60,
    height: "340px",
  },
  safeFood: {
    fontSize: 64,
    fontWeight: 400,
  },
  delivery: {
    color: "#157a21",
    fontSize: 64,
    fontWeight: "bold",
    marginTop: -30,
    marginBottom: 20,
  },
  paragraph: {
    width: 400,
    fontSize: 14.5,
  },
  cover: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    height: "72vh",
  },
  coverImg: {
    height: "100%",
  },
  ctaOrder: {
    fontSize: 18,
    backgroundColor: "#f7a692",
    marginTop: 30,
  },
}));

const HomeStart = () => {
  const classes = useStyles();
  return (
    <section className={classes.presentation}>
      <div className={classes.introduction}>
        <Typography className={classes.safeFood} noWrap>
          Los mejores platillos
        </Typography>
        <Typography className={classes.delivery} noWrap>
          HASTA DONDE ESTÉS
        </Typography>
        <Typography variant="body2" className={classes.paragraph}>
          En Vainilla 110 sabemos que la situación ha sido dificil, es por eso que 
          ofrecemos el primer marketplace enfocado en ayudar a todos los pequeños
          y medianos restaurantes que necesitan medios para seguir trabajando a pesar
          de cualquier obstáculo.
        </Typography>
        <Button variant="outlined" className={classes.ctaOrder}>
          COMIENZA AHORA
        </Button>
      </div>
      <div className={classes.cover}>
        <img src={cover} alt="safe-delivery" className={classes.coverImg} />
      </div>
    </section>
  );
};

export default React.memo(HomeStart);
