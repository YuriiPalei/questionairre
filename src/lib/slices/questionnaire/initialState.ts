import { QuestionnaireState } from "@/types/store";
import { answerAdapter, stepAdapter } from "@/lib/slices/questionnaire/adapters";
import configuration from "@/app/configuration.json";

export const getEntitiesInitialState = () => ({
  steps: stepAdapter.getInitialState(undefined, configuration.steps),
  answers: answerAdapter.getInitialState(),
});

const initialState: QuestionnaireState = {
  id: configuration.id,
  title: configuration.title,
  currentStep: "",
  previousStep: null,
  ...getEntitiesInitialState(),
};

export default initialState;
