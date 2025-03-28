import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SetAnswerPayload } from "@/types/store";
import initialState from "./initialState";

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<SetAnswerPayload>) => {
      const {
        payload: { id, answer, question, nextStep },
      } = action;

      state.answers[id] = {
        question,
        answer,
      };

      state.previousStep = id;
      state.currentStep = nextStep;
    },
  },
});

export default questionnaireSlice;
