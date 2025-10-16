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
    time: "",
    status: "отправлено инженеру-геодузисту",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [changeAppInfo, setChangeAppInfo] = useState({});

  const handleChangeNewInput = (e) => {
    setChangeAppInfo({ ...changeAppInfo, [e.target.name]: e.target.value });
  };

  const handleClickEdit = (application) => {
    setChangeAppInfo({ ...application });
    setIsEdit(!isEdit);
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
      time: "",
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

  const changeTaskData = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://6862c75696f0cc4e34baf165.mockapi.io/applications/${id}`,
        changeAppInfo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.data;
      console.log(result);
    } catch (err) {
      console.error("Ошибка загрузки данных:", err.message);
    }

    setIsEdit(!isEdit);
  };

  return (
    <div className={styles.container}>
      <Form
        handleChange={handleChange}
        addApplication={addApplication}
        appInfo={appInfo}
      />

      {isLoading ? (
        <Preloader />
      ) : applications.length === 0 ? (
        <p>Нет задач</p>
      ) : (
        <Cards
          applications={applications}
          deleteApp={deleteApp}
          handleClickEdit={handleClickEdit}
          isEdit={isEdit}
          handleChangeNewInput={handleChangeNewInput}
          changeAppInfo={changeAppInfo}
          changeTaskData={changeTaskData}
        />
      )}
    </div>
  );
};

export default Main;
