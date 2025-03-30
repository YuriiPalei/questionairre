"use client";

import { useSelector } from "react-redux";
import React from "react";
import { getAllAnswers } from "@/lib/slices/questionnaire/selectors";
import withEmptyAnswersHandling from "@/hoc/StepHoc";
import styles from "./styles.module.css";

const DonePage = () => {
  const answers = useSelector(getAllAnswers);

  return (
    <section>
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
    </section>
  );
};

export default withEmptyAnswersHandling(DonePage);
