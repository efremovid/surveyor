import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import styles from "./Card.module.scss";

const Card = ({ application, deleteApp }) => {
  const date = application.date.split("-").reverse().join("-");

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>Огрганизация: {application.company}</p>
        <p>Ответственный: {application.name}</p>
        <p>Вид работы: {application.work}</p>
        <p>Зона работ: {application.place}</p>
        <p>Дата: {date}</p>
        <p>Время: {application.time}</p>
        <p>Статус: отправлено инженеру-геодузисту заказчика</p>
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.btn}
          onClick={() => deleteApp(application.id)}
        >
          <MdDeleteForever className={styles.image}/>
        </button>
      </div>
    </div>
  );
};

export default Card;
