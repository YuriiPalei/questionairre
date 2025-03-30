"use client";

import { useParams, useRouter } from "next/navigation";
import { OptionType } from "@/types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { QuestionnaireState } from "@/types/store";
import { getAllAnswers, getAnswerById, getCurrentStep } from "@/lib/slices/questionnaire/selectors";
import { formatTemplate } from "@/utils/formatting";
import { setAnswer } from "@/lib/slices/questionnaire/actions";
import RadioGroup from "@/components/RadioGroup";
import Header from "@/components/Header";
import usePageData from "@/hooks/usePageData";
import withEmptyAnswersHandling from "@/hoc/StepHoc";
import styles from "./page.module.css";

const QuestionnairePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const dispatch = useDispatch();

  const { id, question, text, options, middleware, screenType, isMiddleware } = usePageData(slug);

  const selectedValue = useSelector((state: QuestionnaireState) => getAnswerById(state, id));
  const questionnaireState = useSelector(getAllAnswers);
  const currentStep = useSelector(getCurrentStep);

  const dynamicData = {
    gender: questionnaireState["gender"]?.answer ?? "",
    hasChildren:
      (questionnaireState["inRelationshipParent"]?.answer ?? questionnaireState["singleParent"]?.answer) ===
        "Yes" || false,
  };

  const formattedQuestion = formatTemplate(question, dynamicData);

  const handleChange = (option: OptionType) => {
    if (isMiddleware) {
      router.push(`/${currentStep}`);
      return;
    }

    const { value, target } = option;
    dispatch(setAnswer({ id, answer: value, question: formattedQuestion, nextStep: target }));
    router.push(`/${middleware ?? target}`);
  };

  return (
    <div
      className={classNames(styles.page, {
        [styles.page__inverted]: isMiddleware,
      })}
    >
      <div className={styles.container}>
        <Header inverted={isMiddleware} />
        <section className={styles.step}>
          <h1>{formattedQuestion}</h1>
          {text && <p className={styles.step__text}>{text}</p>}
          {screenType === "radioGroup" && (
            <RadioGroup
              name={id}
              selectedValue={selectedValue}
              options={options ?? []}
              onChange={handleChange}
            />
          )}
          {screenType === "text" &&
            options.map((option: OptionType) => (
              <button key={option.value} onClick={() => handleChange(option)} className={styles.step__button}>
                {option.value}
              </button>
            ))}
        </section>
      </div>
    </div>
  );
};

export default withEmptyAnswersHandling(QuestionnairePage);
