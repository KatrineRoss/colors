export const ColorActionTypes = {
    ADD_COLOR: 'ADD_COLOR'
}

export const ColorActions = {
    addColor: ({id, name, code, rating}) => ({
        type: ColorActionTypes.ADD_COLOR,
        color: {id, name, code, rating}
    })
}