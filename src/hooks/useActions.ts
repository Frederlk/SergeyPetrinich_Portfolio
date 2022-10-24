import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

import { menuActions } from "../store/slices/menu/menu.slice";
import { bodyLockActions } from "../store/slices/bodyLock/bodyLock.slice";
import { petsActions } from "../store/slices/pets/pets.slice";

const actions = {
    ...menuActions,
    ...bodyLockActions,
    ...petsActions,
};

const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export default useActions;
