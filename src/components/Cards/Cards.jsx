import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";

const Cards = ({
  applications,
  deleteApp,
  handleClickEditing,
  isEditing,
  changeAppInfo,
}) => {
  return (
    <div className={styles.container}>
      {applications.map((application) => (
        <Card
          application={application}
          deleteApp={deleteApp}
          handleClickEditing={handleClickEditing}
          isEditing={isEditing}
          changeAppInfo={changeAppInfo}
        />
      ))}
    </div>
  );
};

export default Cards;
