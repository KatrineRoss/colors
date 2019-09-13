export const ColorActionTypes = {
    ADD_COLOR: 'ADD_COLOR',
    RATE_COLOR: 'RATE_COLOR'
}

export const ColorListActionTypes = {
    ADD_COLOR: 'ADD_COLOR',
    REMOVE_COLOR: 'REMOVE_COLOR'
}

export const ColorActions = {
    rateColor: (newRating) => ({
        type: ColorActionTypes.RATE_COLOR,
        rating: newRating
    })
}

export const ColorListActions = {
    addColor: (color) => ({
        type: ColorListActionTypes.ADD_COLOR,
        color: {...color}
    }),
    removeColor: (id) => ({
        type: ColorListActionTypes.REMOVE_COLOR,
        id
    })
}