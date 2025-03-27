import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {},
});

export default formDataSlice;
