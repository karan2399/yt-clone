import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LVIE_CHAT } from "../utils/constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length >= OFFSET_LVIE_CHAT) {
        state.messages.shift();
      }
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
