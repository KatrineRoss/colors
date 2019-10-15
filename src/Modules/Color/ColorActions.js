export const ColorActionTypes = {
    RATE_COLOR: 'RATE_COLOR'
}

export const ColorListActionTypes = {
    ADD_COLOR: 'ADD_COLOR',
    REMOVE_COLOR: 'REMOVE_COLOR',
    RATE_COLOR: 'RATE_COLOR'
}

export const SelectedColorActionTypes = {
    SELECT_COLOR: 'SELECT_COLOR'
}

export const ColorActions = {
    rateColor: (newRating) => ({
        type: ColorActionTypes.RATE_COLOR,
        rating: newRating
    })
}

export const ColorListActions = {
    addColor: (code, name, rating) => ({
        type: ColorListActionTypes.ADD_COLOR,
        color: {
            code,
            name,
            rating,
            id: [...code].splice(1, code.length - 1).join(''),
            timestamp: new Date()
        }
    }),
    removeColor: (id) => ({
        type: ColorListActionTypes.REMOVE_COLOR,
        id
    }),
    rateColor: (id, rating) => ({
        type: ColorListActionTypes.RATE_COLOR,
        id,
        rating
    })
}

export const SelectedColorActions = {
    selectColor: (color) => ({
        type: SelectedColorActionTypes.SELECT_COLOR,
        color
    })
}