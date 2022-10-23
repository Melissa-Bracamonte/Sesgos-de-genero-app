import React, { useState } from "react";
import styles from "./InputTopic.module.css";
import { useForm } from "react-hook-form";

const InputTopic = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  // const [Theme, setData] = useState(null);
  // const [print, setTheme] = useState(false);

  // function getInput(val) {
  //   setData(val.target.value);
  //   setTheme(false);
  // }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    // <form className={styles.input} onSubmit={handleSubmit(onSubmit)}>
    <section className={styles.input}>
      <h1 className={styles.text}>
        Danos un tema de tu interes que se esté tratando en Twitter y nosotros
        analizaremos si existen sesgos de género
      </h1>

      {/* <section className={styles.fieldnbutton}> */}
      <form className={styles.fieldnbutton} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            // onChange={getInput}
            type="text"
            className={styles.inputTopic}
            placeholder="Ingresa un tema"
            {...register("topic", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
          {errors.topic && (
            <p className={styles.errorMessage}>{errors.topic.message}</p>
          )}
        </div>

        <button
          // onClick={() => setTheme(true)}
          type="submit"
          className={styles.button}
        >
          Ver resultados
        </button>
        
        {/* </section> */}
      </form>
      {/* </form> */}
    </section>
  );
};
export default InputTopic;
