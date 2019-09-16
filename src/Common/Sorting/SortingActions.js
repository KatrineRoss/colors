export const SortingActionsTypes = {
    SORT: 'SORT'
}

export const SortingActions = {
    sort: (sortType) => ({
        type: SortingActionsTypes.SORT,
        sortType
    })
}
