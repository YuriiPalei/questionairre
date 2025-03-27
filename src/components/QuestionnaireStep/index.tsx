"use client";

import { ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { QuestionnaireStepType } from "@/types";
import RadioGroup from "@/components/RadioGroup";
import { setFormData } from "@/lib/slices/formData/actions";
import { FormDataState } from "@/types/store";

const QuestionnaireStep = ({ id, options, question, screenType, navigation }: QuestionnaireStepType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedValue = useSelector((state: FormDataState) => state[id]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFormData({ [id]: event.target.value }));
    router.push(`/${navigation[event.target.value] ?? navigation.default}`);
  };

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
