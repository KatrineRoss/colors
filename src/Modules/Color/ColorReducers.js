import {ColorActionTypes, ColorListActionTypes, SelectedColorActionTypes} from "./ColorActions";

export const ColorReducers = (state = {}, action) => {
    switch(action.type) {
        case ColorActionTypes.RATE_COLOR:
            const color = {...state};

            color.rating = action.rating;

            return color;
        default:
            return {...state};
    }
}

export const ColorListReducers = (state = [], action) => {
    const newState = [...state];

    switch(action.type) {
        case ColorListActionTypes.ADD_COLOR:
            return [
                ...newState,
                action.color
            ];
        case ColorListActionTypes.REMOVE_COLOR:
            return newState.filter((item) => item.id !== action.id);
        case ColorListActionTypes.RATE_COLOR:
            return 
        default:
            return newState;
    }
}

export const SelectedColorReducers = (state = [], action) => {
    switch(action.type) {
        case SelectedColorActionTypes.SELECT_COLOR:
            return [...state, action.color];
        default:
            return [...state];
    }
}
