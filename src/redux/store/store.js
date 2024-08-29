import { configureStore } from "@reduxjs/toolkit";
import darkTheme from "../slices/Theme"

export  const store = configureStore({
 reducer:{
    darkTheme:darkTheme,
 },
}) 