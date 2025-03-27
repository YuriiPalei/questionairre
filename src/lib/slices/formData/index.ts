import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { FormDataState } from "@/types/store";

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Partial<FormDataState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export default formDataSlice;
