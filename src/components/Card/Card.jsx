import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import styles from "./Card.module.scss";

const Card = ({
  application,
  deleteApp,
  handleClickEdit,
  isEdit,
  handleChangeNewInput,
  changeAppInfo,
  changeTaskData
}) => {
  const date = application.date.split("-").reverse().join("-");

  return (
    <div className={styles.container}>
      {!isEdit ? (
        <div className={styles.main}>
          <p>Огрганизация: {application.company}</p>
          <p>Ответственный: {application.name}</p>
          <p>Вид работы: {application.work}</p>
          <p>Зона работ: {application.place}</p>
          <p>Дата: {date}</p>
          <p>Время: {application.time}</p>
          <p>Статус: {application.status}</p>
        </div>
      ) : (
        <div className={styles.main}>
          <input
            onChange={handleChangeNewInput}
            className={styles.input}
            value={changeAppInfo.company}
            type="text"
            name="company"
          />
          <input
            onChange={handleChangeNewInput}
            className={styles.input}
            value={changeAppInfo.name}
            type="text"
            name="name"
          />
          <textarea
            onChange={handleChangeNewInput}
            className={styles.textarea}
            value={changeAppInfo.work}
            type="text"
            name="work"
          />
          <input
            onChange={handleChangeNewInput}
            className={styles.input}
            value={changeAppInfo.place}
            type="text"
            name="place"
          />
          <div className={styles.time}>
            <input
              onChange={handleChangeNewInput}
              className={styles.containerItem}
              value={changeAppInfo.date}
              type="date"
              name="date"
              placeholder="Дата"
            />
            <input
              onChange={handleChangeNewInput}
              className={styles.containerItem}
              type="time"
              name="time"
              placeholder="Время"
              value={changeAppInfo.time}
            />
          </div>
        </div>
      )}

      <div className={styles.buttons}>
        <button
          className={styles.btn}
          onClick={() => deleteApp(application.id)}
        >
          <MdDeleteForever className={styles.image} />
        </button>

        {!isEdit ? (
          <button onClick={() => handleClickEdit(application)}>ред</button>
        ) : (
          <button onClick={(e) => changeTaskData(e, changeAppInfo.id)}>sub</button>
        )}
      </div>
    </div>
  );
};

export default Card;
