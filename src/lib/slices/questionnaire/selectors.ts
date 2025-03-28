import { Answer, QuestionnaireState } from "@/types/store";
import { answerAdapter, stepAdapter } from "@/lib/slices/questionnaire/adapters";
import { QuestionnaireStepType } from "@/types";

const stepsSelectors = stepAdapter.getSelectors();
const answersSelectors = answerAdapter.getSelectors();

export const getStepById = (state: QuestionnaireState, id: string): QuestionnaireStepType | undefined =>
  stepsSelectors.selectById(state.steps, id);

export const getFirstStep = (state: QuestionnaireState): QuestionnaireStepType =>
  stepsSelectors.selectAll(state.steps)[0];

export const getAnswerById = (state: QuestionnaireState, id: string): string | undefined =>
  answersSelectors.selectById(state.answers, id)?.answer;

export const getAnswersLength = (state: QuestionnaireState): number =>
  answersSelectors.selectTotal(state.answers);

export const getAllAnswers = (state: QuestionnaireState): Record<string, Answer> =>
  answersSelectors.selectEntities(state.answers);

export const getIsFirstStep = (state: QuestionnaireState): boolean => !state.previousStep;

export const getCurrentStep = (state: QuestionnaireState): string => state.currentStep;
