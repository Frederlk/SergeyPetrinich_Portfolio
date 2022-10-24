import { IPet } from "./../../../models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface petsState {
    petsList: IPet[];
}

const initialState: petsState = {
    petsList: [],
};

export const petsSlice = createSlice({
    name: "@@pets",
    initialState,
    reducers: {
        fetchPets: (state, action: PayloadAction<IPet[]>) => {
            state.petsList = action.payload;
        },
    },
});

export const petsActions = petsSlice.actions;
export const petsReducer = petsSlice.reducer;
