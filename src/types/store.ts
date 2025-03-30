import makeStore from "@/lib/store";
import { getEntitiesInitialState } from "@/lib/slices/questionnaire/initialState";

export type Store = ReturnType<typeof makeStore>;

export type Answer = { id: string; question: string; answer: string; booleanValue?: boolean };

export type QuestionnaireState = {
  id: string;
  title: string;
  currentStep: string;
  previousStep: string | null;
} & ReturnType<typeof getEntitiesInitialState>;

export type SetAnswerPayload = {
  id: string;
  question: string;
  answer: string;
  nextStep: string;
  booleanValue?: boolean;
};
