import {ColorActionTypes, ColorListActionTypes} from "./ColorActions";

export const ColorReducers = (state = {}, action) => {
    switch(action.type) {
        case ColorActionTypes.ADD_COLOR:
            return {
                ...action.color
            }
        case ColorActionTypes.RATE_COLOR:
            const color = {...state};

            color.rating = action.rating;

            return color;
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
            let removeIndex;

            newState.forEach((item, index) => {
                if (item.id === action.id) {
                    removeIndex = index;
                }
            });

            return !!removeIndex ?
                newState.slice(0, removeIndex).concat(newState.slice(removeIndex + 1)) :
                newState;
    }
}
