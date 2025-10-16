import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";

const Cards = ({ applications, deleteApp }) => {
  return (
    <div className={styles.container}>
      {applications.map((application) => (
        <Card application={application} deleteApp={deleteApp} />
      ))}
    </div>
  );
};

export default Cards;
