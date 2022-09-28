import { createSlice } from "@reduxjs/toolkit";

const initialMailState = {
  mailData: [],
};
const MailSlice = createSlice({
  name: "mail",
  initialState: initialMailState,
  reducers: {
    addedMail(state, action) {
      state.mailData = [...state.mailData, action.payload];
    },
  },
});

export default MailSlice.reducer
export const mailAction=MailSlice.actions
