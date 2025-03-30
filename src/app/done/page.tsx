"use client";

import { useSelector } from "react-redux";
import { getAllAnswers } from "@/lib/slices/questionnaire/selectors";
import React from "react";
import Header from "@/components/Header";
import withEmptyAnswersHandling from "@/hoc/StepHoc";
import styles from "./styles.module.css";

const DonePage = () => {
  const answers = useSelector(getAllAnswers);

  return (
    <div className={styles.container}>
      <Header />
      <h1>Done</h1>
      <p>Thank you for submitting the questionnaire. Here is the data you submitted:</p>
      <div className={styles.container__results}>
        {Object.values(answers).map(({ answer, question }) => (
          <p key={question}>
            <strong>{question}</strong>
            <br />
            {answer}
          </p>
        ))}
      </div>
    </div>
  );
};

export default withEmptyAnswersHandling(DonePage);
