import { QuestionnaireState } from "@/types/store";
import { answerAdapter, stepAdapter } from "@/lib/slices/questionnaire/adapters";
import configuration from "@/app/configuration.json";
import { QuestionnaireStepType } from "@/types";

export const getEntitiesInitialState = () => ({
  steps: stepAdapter.getInitialState(undefined, configuration.steps as QuestionnaireStepType[]),
  answers: answerAdapter.getInitialState(),
});

const initialState: QuestionnaireState = {
  id: configuration.id,
  title: configuration.title,
  currentStep: configuration.steps[0].id,
  previousStep: null,
  ...getEntitiesInitialState(),
};

export default initialState;
