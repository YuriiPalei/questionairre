export type OptionType = {
  value: string;
  target: string;
};

export type QuestionnaireStepType = {
  id: string;
  screenType: "radioGroup" | "text";
  question: string;
  text?: string;
  options?: OptionType[];
  middleware?: string;
};
