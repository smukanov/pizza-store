const initialState = {
    categories: [
        {id: 1, name: "all", label: "Все", isActive: true, type: 5},
        {id: 2, name: "meat", label: "Мясные", isActive: false, type: 0},
        {id: 3, name: "vegetarian", label: "Вегетарианская", isActive: false, type: 1},
        {id: 4, name: "grill", label: "Гриль", isActive: false, type: 2},
        {id: 5, name: "hot", label: "Острые", isActive: false, type: 3},
        {id: 6, name: "closed", label: "Закрытые", isActive: false, type: 4},
    ]
}

const categoriesReducer = (state = initialState, action) => {
    if (action.type === "SET_CATEGORY_ACTIVE"){
        return {
            ...state,
            categories: action.payload,
        }
    }
    return state;
}

export default categoriesReducer;