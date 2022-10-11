import { createSlice } from "@reduxjs/toolkit";

interface menuState {
    menuStatus: boolean;
}

const initialState: menuState = {
    menuStatus: false,
};

export const menuSlice = createSlice({
    name: "@@menu",
    initialState,
    reducers: {
        menuOpened: (state) => {
            state.menuStatus = true;
        },
        menuClosed: (state) => {
            state.menuStatus = false;
        },
    },
});

export const menuActions = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
