import { createSlice } from "@reduxjs/toolkit";

const initialThemeState = "black";

export const themeSlice = createSlice({
    name: "user",
    initialState: { value: initialThemeState },
    reducers: {

        // Change Color
        changeColor: (state, action) => {
            state.value = action.payload;
        },

    }
});

export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;