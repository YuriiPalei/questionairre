"use client";

import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { QuestionnaireState } from "@/types/store";
import { getAnswerById, getCurrentStep } from "@/lib/slices/questionnaire/selectors";
import RadioGroup from "@/components/RadioGroup";
import usePageData from "@/hooks/usePageData";
import withEmptyAnswersHandling from "@/hoc/StepHoc";
import useFormatting from "@/hooks/useFormatting";
import useQuestionnaireHandler from "@/hooks/useQuestionnaireHandler";
import ButtonsGroup from "@/components/ButtonsGroup";
import styles from "./page.module.css";

const QuestionnairePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const {
    id,
    question,
    text,
    options = [],
    middleware,
    screenType,
    isMiddleware,
    valueName,
    dynamicData,
  } = usePageData(slug);

  const formattedQuestion = useFormatting({ template: question, dynamicData: dynamicData ?? [] });
  const selectedValue = useSelector((state: QuestionnaireState) => getAnswerById(state, valueName ?? id));
  const currentStep = useSelector(getCurrentStep);

  const { handleSelect } = useQuestionnaireHandler({
    id,
    valueName,
    formattedQuestion,
    middleware,
    isMiddleware,
    currentStep,
  });

  return (
    <section className={styles.step}>
      <h1>{formattedQuestion}</h1>
      {text && <p className={styles.step__text}>{text}</p>}
      {screenType === "radioGroup" ? (
        <RadioGroup name={id} selectedValue={selectedValue} options={options ?? []} onChange={handleSelect} />
      ) : (
        <ButtonsGroup options={options} onClick={handleSelect} />
      )}
      {/* ...might be enhanced with other screens types line DateInput */}
    </section>
  );
};

export default withEmptyAnswersHandling(QuestionnairePage);
