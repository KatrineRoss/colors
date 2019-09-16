import {SortingActionsTypes} from "./SortingActions";

export const SortingReducers = (state = '', action) => {
    const newState = state;

    switch(action.type) {
        case SortingActionsTypes.SORT:
            return newState;
        default:
            return newState;
    }
}