import { Answer, QuestionnaireState } from "@/types/store";
import { answerAdapter, stepAdapter } from "@/lib/slices/questionnaire/adapters";
import { QuestionnaireStepType } from "@/types";

const stepsSelectors = stepAdapter.getSelectors();
const answersSelectors = answerAdapter.getSelectors();

export const getStepById = (state: QuestionnaireState, id: string): QuestionnaireStepType | undefined =>
  stepsSelectors.selectById(state.steps, id);

export const getFirstStep = (state: QuestionnaireState): QuestionnaireStepType =>
  stepsSelectors.selectAll(state.steps)[0];

export const getIsFirstStep = (state: QuestionnaireState, slug: string): boolean => {
  const { id } = getFirstStep(state);
  return id === slug;
};

export const getAnswersLength = (state: QuestionnaireState): number =>
  answersSelectors.selectTotal(state.answers);

export const getAnswerById = (state: QuestionnaireState, id: string): string | undefined =>
  answersSelectors.selectById(state.answers, id)?.answer;

export const getAllAnswers = (state: QuestionnaireState): Record<string, Answer> =>
  answersSelectors.selectEntities(state.answers);

export const getAnswersByIds = (state: QuestionnaireState, ids: string[]): Record<string, Answer> => {
  const answers = answersSelectors.selectEntities(state.answers);
  return ids.reduce((acc, id) => ({ ...acc, [id]: answers[id] }), {});
};

export const getCurrentStep = (state: QuestionnaireState): string => state.currentStep;
