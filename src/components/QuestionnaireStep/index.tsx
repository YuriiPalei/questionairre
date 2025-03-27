"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { OptionType, QuestionnaireStepType } from "@/types";
import RadioGroup from "@/components/RadioGroup";
import { setFormData } from "@/lib/slices/formData/actions";
import { FormDataState } from "@/types/store";
import { getFormData, getFormValueById } from "@/lib/slices/formData/selectors";
import configuration from "@/app/configuration.json";
import styles from "./styles.module.css";

const QuestionnaireStep = ({ id, options, question, screenType, text }: QuestionnaireStepType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedValue = useSelector((state: FormDataState) => getFormValueById(state, id));
  const questionnaireState = useSelector(getFormData);

  const isFirstStep = id === configuration.steps[0].id;
  const formatterQuestion = question.replace("{gender}", questionnaireState["gender"]);

  const handleChange = (option: OptionType) => {
    const { value, target } = option;
    dispatch(setFormData({ id, value }));

    router.push(`/${target}`);
  };

  useEffect(() => {
    if (!isFirstStep && Object.keys(questionnaireState).length === 0) {
      router.push(`/${configuration.steps[0].id}`);
    }
  }, []);

  return (
    <section className={styles.container}>
      <h1>{formatterQuestion}</h1>
      <p className={styles.container__text}>{text}</p>
      {screenType === "radioGroup" && (
        <RadioGroup name={id} selectedValue={selectedValue} options={options ?? []} onChange={handleChange} />
      )}
    </section>
  );
};

export default QuestionnaireStep;
