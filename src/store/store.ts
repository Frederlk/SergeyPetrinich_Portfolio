import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { firebaseAPI } from "./../services/firebaseAPI";
import { bodyLockReducer } from "./slices/bodyLock/bodyLock.slice";
import { menuReducer } from "./slices/menu/menu.slice";
import { petsReducer } from "./slices/pets/pets.slice";

const rootReducer = combineReducers({
    bodyLock: bodyLockReducer,
    menu: menuReducer,
    pets: petsReducer,
    [firebaseAPI.reducerPath]: firebaseAPI.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                getDefaultMiddleware().concat(firebaseAPI.middleware, firebaseAPI.middleware)
            ),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
