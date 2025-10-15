import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import axios from "axios";
import Cards from "../../components/Cards/Cards";
import Form from "../../components/Form/Form";
import Preloader from "../../components/Preloader/Preloader";

const Main = () => {
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [appInfo, setAppInfo] = useState({
    company: "",
    name: "",
    place: "",
    work: "",
    date: "",
  });
  const [updatedAppInfo, setUpdatedAppInfo] = useState({ ...appInfo });
  const [isEditing, setIsEditing] = useState(false);

  const handleClickEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setAppInfo({ ...appInfo, [e.target.name]: e.target.value });
  };

  const addApplication = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://6862c75696f0cc4e34baf165.mockapi.io/applications",
        appInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.data;
      console.log(result);
      setApplications([...applications, result]);
    } catch (err) {
      console.error("Ошибка загрузки данных:", err.message);
    }
    setAppInfo({
      company: "",
      name: "",
      place: "",
      work: "",
      date: "",
    });
  };

  const deleteApp = async (id) => {
    try {
      await axios.delete(
        `https://6862c75696f0cc4e34baf165.mockapi.io/applications/${id}`
      );
      setApplications((prevItems) =>
        prevItems.filter((item) => item.id !== id)
      );
      console.log("Элемент успешно удален");
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  };

  const changeAppInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://6862c75696f0cc4e34baf165.mockapi.io/applications/${updatedAppInfo.id}`,
        updatedAppInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.data;
      console.log(result);
      setApplications((prev) =>
        prev.map((appInfo) => (appInfo.id === result.id ? result : appInfo))
      );
    } catch (err) {
      console.error("Ошибка загрузки данных:", err.message);
    } finally {
      setIsEditing(!isEditing);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://6862c75696f0cc4e34baf165.mockapi.io/applications")
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <Form
        handleChange={handleChange}
        addApplication={addApplication}
        appInfo={appInfo}
      />

      {isLoading && <Preloader />}
      {!isLoading && !applications.length && <p>Задач нет</p>}
      {!isLoading && !!applications.length && (
        <Cards
          applications={applications}
          deleteApp={deleteApp}
          handleClickEditing={handleClickEditing}
          isEditing={isEditing}
          changeAppInfo={changeAppInfo}
        />
      )}
    </div>
  );
};

export default Main;
