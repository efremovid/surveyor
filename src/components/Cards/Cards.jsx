import React from "react";
import Card from "../Card/Card";
import styles from "./Cards.module.scss";

const Cards = ({ applications, deleteApp, handleClickEdit, isEdit, handleChangeNewInput, changeAppInfo , changeTaskData}) => {
  return (
    <div className={styles.container}>
      {applications.map((application) => (
        <Card
          application={application}
          deleteApp={deleteApp}
          handleClickEdit={handleClickEdit}
          isEdit={isEdit}
          handleChangeNewInput={handleChangeNewInput}
          changeAppInfo={changeAppInfo}
          changeTaskData={changeTaskData}
        />
      ))}
    </div>
  );
};

export default Cards;
