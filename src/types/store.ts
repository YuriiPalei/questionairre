import makeStore from "@/lib/store";

export type Store = ReturnType<typeof makeStore>;

export type Answers = Record<string, { question: string; answer: string }>;

export type QuestionnaireState = {
  currentStep: string;
  answers: Answers;
  previousStep: string | null;
};

export type SetAnswerPayload = { id: string; question: string; answer: string; nextStep: string };
