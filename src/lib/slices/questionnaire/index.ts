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
        payload: { id, answer, question, nextStep },
      } = action;

      answerAdapter.addOne(state.answers, { id, answer, question });

      state.previousStep = id;
      state.currentStep = nextStep;
    },
  },
});

export default questionnaireSlice;
