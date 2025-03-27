import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<{ id: string; value: string }>) => {
      state[action.payload.id] = action.payload.value;
    },
  },
});

export default formDataSlice;
