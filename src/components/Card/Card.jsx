import React, { useEffect, useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ application, deleteApp, handleClickEditing, isEditing, changeAppInfo }) => {
  const date = application.date.split("-").reverse().join("-");

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {isEditing ? (
          <input className={styles.editInput} type="text" />
        ) : (
          <p>Огрганизация: {application.company}</p>
        )}

        {isEditing ? (
          <input className={styles.editInput} type="text" />
        ) : (
          <p>Ответственный: {application.name}</p>
        )}

        {isEditing ? (
          <input className={styles.editInput} type="text" />
        ) : (
          <p>Вид работы: {application.work}</p>
        )}

        {isEditing ? (
          <input className={styles.editInput} type="text" />
        ) : (
          <p>Зона работ: {application.place}</p>
        )}

        {isEditing ? (
          <input className={styles.editInput} type="text" />
        ) : (
          <p>Дата: {date}</p>
        )}

        {isEditing ? (
          <input className={styles.editInput} type="text" />
        ) : (
          <p>Время: {application.time}</p>
        )}

        {isEditing ? (
          <input className={styles.editInput} type="text" />
        ) : (
          <p>Статус: отправлено инженеру-геодузисту заказчика</p>
        )}
      </div>
      <div className={styles.buttons}>
        {isEditing ? (
          <button className={styles.btn} onClick={changeAppInfo}>submit</button>
        ) : (
          <>
            <button
              className={styles.btn}
              onClick={() => deleteApp(application.id)}
            >
              del
            </button>
            <button className={styles.btn} onClick={handleClickEditing}>
              edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
