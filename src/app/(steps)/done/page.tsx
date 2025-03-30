"use client";

import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getAllAnswers, getFirstStep } from "@/lib/slices/questionnaire/selectors";
import withEmptyAnswersHandling from "@/hoc/StepHoc";
import ButtonsGroup from "@/components/ButtonsGroup";
import { useRouter } from "next/navigation";
import { resetAnswers } from "@/lib/slices/questionnaire/actions";
import styles from "./styles.module.css";

const DonePage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = useSelector(getFirstStep);
  const answers = useSelector(getAllAnswers);

  const handleClick = () => {
    dispatch(resetAnswers());
    router.push(`/${id}`);
  };

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
      <ButtonsGroup
        options={[{ value: "Go though questionnaire again", target: id }]}
        onClick={handleClick}
      />
    </section>
  );
};

export default withEmptyAnswersHandling(DonePage);
