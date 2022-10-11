import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface bodyLockState {
    lockStatus: boolean;
}

const initialState: bodyLockState = {
    lockStatus: false,
};

export const bodyLockSlice = createSlice({
    name: "@@bodyLock",
    initialState,
    reducers: {
        setBodyLock: (state, action: PayloadAction<boolean>) => {
            state.lockStatus = action.payload;
        },
    },
});

export const bodyLockActions = bodyLockSlice.actions;
export const bodyLockReducer = bodyLockSlice.reducer;
