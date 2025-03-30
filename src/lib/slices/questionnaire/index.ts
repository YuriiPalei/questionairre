import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetAnswerPayload } from "@/types/store";
import { answerAdapter } from "@/lib/slices/questionnaire/adapters";
import initialState from "./initialState";

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<SetAnswerPayload>) => {
      const {
        payload: { id, answer, question, nextStep, booleanValue },
      } = action;

      answerAdapter.setOne(state.answers, { id, answer, question, booleanValue });

      state.previousStep = id;
      state.currentStep = nextStep;
    },
    resetAnswers: (state) => {
      state.answers = answerAdapter.getInitialState();
    },
  },
});

export default questionnaireSlice;
