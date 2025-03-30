export type OptionType = {
  value: string;
  target: string;
  booleanValue?: boolean;
};

export type QuestionnaireStepType = {
  id: string;
  screenType: "radioGroup" | "text";
  question: string;
  options: OptionType[];
  text?: string;
  valueName?: string;
  middleware?: string;
  isMiddleware?: boolean;
  dynamicData?: string[];
};
