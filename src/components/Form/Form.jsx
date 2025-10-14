import React, { useState } from "react";
import styles from "./Form.module.scss";

const Form = ({ handleChange, addApplication, appInfo }) => {
  return (
    <form onSubmit={addApplication} className={styles.container}>
      <input
        onChange={handleChange}
        className={styles.containerItem}
        type="text"
        name="company"
        value={appInfo.company}
        placeholder="Организация"
      />
      <input
        onChange={handleChange}
        className={styles.containerItem}
        type="text"
        name="name"
        value={appInfo.name}
        placeholder="ФИО"
      />
      <input
        onChange={handleChange}
        className={styles.containerItem}
        type="text"
        name="place"
        value={appInfo.place}
        placeholder="Зона проведения работ"
      />
      <input
        onChange={handleChange}
        className={styles.containerItem}
        type="text"
        name="work"
        value={appInfo.work}
        placeholder="Что нужно сделать?"
      />
      <button className={styles.add} type="submit">Add application</button>
    </form>
  );
};

export default Form;
