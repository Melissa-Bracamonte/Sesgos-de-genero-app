import React, { useState } from "react";
import styles from "./InputTopic.module.css";

const InputTopic = () => {
  const [Theme, setData] = useState(null);
  const [print, setTheme] = useState(false);

  function getInput(val) {
    setData(val.target.value);
    setTheme(false);
  }

  return (
    <form className={styles.input}>
      <h1 className={styles.text}>
        Danos un tema de tu interes que se esté tratando en Twitter y nosotros
        analizaremos si existen sesgos de género
      </h1>

      <section className={styles.fieldnbutton}>
        <input
          onChange={getInput}
          type="text"
          className={styles.inputTopic}
          placeholder="Ingresa un tema"
        />
        <button
          onClick={() => setTheme(true)}
          type="button"
          className={styles.button}
        >
          Ver resultados
        </button>
      </section>
    </form>
  );
};
export default InputTopic;
