import React from 'react';
import Header from "../report/header/Header";
import ResultsDashboard from './resultsDashboard/ResultsDashboard';
import InputTopic from './inputTopic/InputTopic'
import Parameters from './parameters/Parameters'

const ReportDashboard = () => {
  return (
    <>
    <Header/>
    <InputTopic/>
    <ResultsDashboard/>
    <Parameters/>
    </>
  )
}

export default ReportDashboard
