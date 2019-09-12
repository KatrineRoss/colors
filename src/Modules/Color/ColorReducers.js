import {ColorActionTypes} from "./ColorActions";

export const ColorReducers = (state = {}, action) => {
    switch(action.type) {
        case ColorActionTypes.ADD_COLOR:
            return {
                ...action.color
            }
    }
}
