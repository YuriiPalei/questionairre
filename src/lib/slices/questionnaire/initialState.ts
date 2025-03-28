import { QuestionnaireState } from "@/types/store";

const initialState: QuestionnaireState = {
  currentStep: "",
  previousStep: null,
  answers: {},
};

export default initialState;
