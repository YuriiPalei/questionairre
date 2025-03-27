export type Questionnaire = {
  id: string;
  title: string;
  steps: QuestionnaireStepType[];
};

export type QuestionnaireStepType = {
  id: string;
  screenType: "radioGroup" | "text";
  question: string;
  options?: {
    value: string;
    label: string;
  }[];
  navigation: Record<string, string | null>;
};
