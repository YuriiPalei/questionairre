"use client";

import { notFound, useParams, useRouter } from "next/navigation";
import { OptionType } from "@/types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuestionnaireState } from "@/types/store";
import {
  getAllAnswers,
  getAnswerById,
  getFirstStep,
  getIsFirstStep,
  getStepById,
} from "@/lib/slices/questionnaire/selectors";
import { formatTemplate } from "@/utils/formatting";
import { setAnswer } from "@/lib/slices/questionnaire/actions";
import RadioGroup from "@/components/RadioGroup";
import styles from "./page.module.css";

const QuestionnairePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const dispatch = useDispatch();

  const pageData = useSelector((state: QuestionnaireState) => getStepById(state, slug));

  useEffect(() => {
    if (!isFirstStep && Object.keys(questionnaireState).length === 0) {
      router.push(`/${firstStepId}`);
    }
  }, []);

  if (!pageData) {
    notFound();
  }

  const { id, question, text, options, middleware, screenType } = pageData;

  const selectedValue = useSelector((state: QuestionnaireState) => getAnswerById(state, id));
  const questionnaireState = useSelector(getAllAnswers);
  const { id: firstStepId } = useSelector(getFirstStep);
  const isFirstStep = useSelector(getIsFirstStep);

  const dynamicData = {
    gender: questionnaireState["gender"]?.answer ?? "",
    hasChildren:
      (questionnaireState["inRelationshipParent"]?.answer ?? questionnaireState["singleParent"]?.answer) ===
        "Yes" || false,
  };

  const formattedQuestion = formatTemplate(question, dynamicData);

  const handleChange = (option: OptionType) => {
    const { value, target } = option;
    dispatch(setAnswer({ id, answer: value, question, nextStep: target }));

    router.push(`/${middleware ?? target}`);
  };

  return (
    <section className={styles.container}>
      <h1>{formattedQuestion}</h1>
      <p className={styles.container__text}>{text}</p>
      {screenType === "radioGroup" && (
        <RadioGroup name={id} selectedValue={selectedValue} options={options ?? []} onChange={handleChange} />
      )}
    </section>
  );
};

export default QuestionnairePage;
