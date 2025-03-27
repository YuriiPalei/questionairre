"use client";

import { ChangeEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { QuestionnaireStepType } from "@/types";
import RadioGroup from "@/components/RadioGroup";
import { setFormData } from "@/lib/slices/formData/actions";
import { FormDataState } from "@/types/store";
import { getFormData, getFormValueById } from "@/lib/slices/formData/selectors";
import configuration from "@/app/configuration.json";

const QuestionnaireStep = ({ id, options, question, screenType, navigation }: QuestionnaireStepType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedValue = useSelector((state: FormDataState) => getFormValueById(state, id));
  const questionnaireState = useSelector(getFormData);

  const isFirstStep = id === configuration.steps[0].id;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFormData({ id, value: event.target.value }));

    const resolvedPath = navigation[event.target.value] ?? navigation.default;

    if (resolvedPath === null) {
      router.push("/done");
      return;
    }

    router.push(`/${resolvedPath}`);
  };

  useEffect(() => {
    if (!isFirstStep && Object.keys(questionnaireState).length === 0) {
      router.push(`/${configuration.steps[0].id}`);
    }
  }, []);

  return (
    <>
      {screenType === "radioGroup" && (
        <RadioGroup
          name={id}
          label={question}
          value={selectedValue}
          options={options ?? []}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default QuestionnaireStep;
