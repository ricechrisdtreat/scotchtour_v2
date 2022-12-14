import { Typography, Grid } from "@mui/material";
import React from "react";
import styles from "../styles/FullPage.module.css";

export default function FullPage(props) {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h1" className={styles.header}>
          {props.title}
        </Typography>
      </Grid>
      <Grid item lg={5}>
        <img src={props.hero} className={styles.image} />
      </Grid>
      <Grid item xs={12} lg={5} className={styles.paragraphBlock}>
        {props.mainText.map((p) => p)}
      </Grid>
    </Grid>
  );
}
