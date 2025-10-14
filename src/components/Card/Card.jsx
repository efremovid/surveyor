import React from "react";
import styles from "./Card.module.scss";

const Card = ({ application, deleteApp }) => {
  return (
    <div className={styles.container}>
      <p>{application.company}</p>
      <p>{application.name}</p>
      <p>{application.work}</p>
      <p>{application.place}</p>
      <button onClick={() => deleteApp(application.id)}>x</button>
    </div>
  );
};

export default Card;
