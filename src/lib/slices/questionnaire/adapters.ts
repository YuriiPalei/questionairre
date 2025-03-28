import { createEntityAdapter } from "@reduxjs/toolkit";
import { QuestionnaireStepType } from "@/types";
import { Answer } from "@/types/store";

export const stepAdapter = createEntityAdapter<QuestionnaireStepType>();

export const answerAdapter = createEntityAdapter<Answer>();
