import { createSlice } from "@reduxjs/toolkit";

const initialUserState = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialUserState },
    reducers: {

        // Login
        login: (state, action) => {
            state.value = action.payload;
        },

        // Logout
        logout: (state) => {
            state.value = initialUserState;
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;