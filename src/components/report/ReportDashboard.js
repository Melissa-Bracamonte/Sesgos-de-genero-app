import React from "react";
import Header from "../report/header/Header";
import InputTopic from "./inputTopic/InputTopic";
import ResultsDashboard from "./resultsDashboard/ResultsDashboard";
import Parameters from "./parameters/Parameters";
// import WaitingInformation from "./waitingInformation/WaitingInformation";
import styles from "./ReportDashboard.module.css";

const ReportDashboard = () => {
  return (
    <>
      <section className={styles.resultBody}>
        <div className={styles.headerContainer}>
          <Header />
        </div>
        <div className={styles.inputTopic}>
          <InputTopic />
        </div>
        <div className={styles.resultsDashboard}>
          <ResultsDashboard />
        </div>
        <div className={styles.parameters}>
          <Parameters />
        </div>
        {/* <div>
        <WaitingInformation/>
        </div> */}
      </section>
    </>
  );
};

export default ReportDashboard;
