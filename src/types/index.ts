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
