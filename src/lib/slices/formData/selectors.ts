import { FormDataState } from "@/types/store";

export const getFormValueById = (state: FormDataState, id: string): string | undefined => state[id];

export const getFormData = (state: FormDataState): FormDataState => state;
