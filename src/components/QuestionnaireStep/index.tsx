"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { OptionType, QuestionnaireStepType } from "@/types";
import RadioGroup from "@/components/RadioGroup";
import { QuestionnaireState } from "@/types/store";
import { getAllAnswers, getAnswerById, getIsFirstStep } from "@/lib/slices/questionnaire/selectors";
import configuration from "@/app/configuration.json";
import { formatTemplate } from "@/utils/formatting";
import { setAnswer } from "@/lib/slices/questionnaire/actions";
import styles from "./styles.module.css";

const QuestionnaireStep = ({
  id,
  options,
  question,
  screenType,
  text,
  middleware,
}: QuestionnaireStepType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedValue = useSelector((state: QuestionnaireState) => getAnswerById(state, id));
  const questionnaireState = useSelector(getAllAnswers);
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

  useEffect(() => {
    if (!isFirstStep && Object.keys(questionnaireState).length === 0) {
      router.push(`/${configuration.steps[0].id}`);
    }
  }, []);

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

export default QuestionnaireStep;
