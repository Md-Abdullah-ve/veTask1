import { createSlice } from "@reduxjs/toolkit";

const darkTheme = createSlice({
  name: "darkTheme",
  initialState: {
    theme: true,
  },
  reducers: {
    setTheme: (state, action) => {
      console.log("redux console", action.payload);
      console.log("redux theme", state.theme)
      {state
        ? (state.theme = action.payload)
        : (state.theme = state)}
    },
  },
});

export const { setTheme } = darkTheme.actions;
export default darkTheme.reducer;
