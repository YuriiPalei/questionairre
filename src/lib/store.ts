import { configureStore } from "@reduxjs/toolkit";
import formDataReducer from "@/lib/slices/formData/reducer";

const makeStore = () => {
  return configureStore({ reducer: formDataReducer });
};

export default makeStore;
