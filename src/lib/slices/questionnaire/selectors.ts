import { Answers, QuestionnaireState } from "@/types/store";

export const getAnswerById = (state: QuestionnaireState, id: string): string | undefined =>
  state.answers[id]?.answer;

export const getAllAnswers = (state: QuestionnaireState): Answers => state.answers;

export const getIsFirstStep = (state: QuestionnaireState): boolean => !state.previousStep;

export const getCurrentStep = (state: QuestionnaireState): string => state.currentStep;
