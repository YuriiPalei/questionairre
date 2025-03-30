export type OptionType = {
  value: string;
  target: string;
};

export type QuestionnaireStepType = {
  id: string;
  screenType: "radioGroup" | "text";
  question: string;
  options: OptionType[];
  text?: string;
  middleware?: string;
  isMiddleware?: boolean;
};
