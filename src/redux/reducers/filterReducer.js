const initialState = {
    selectedCategory: "all",
    selectedSortedBy: "popularity",
}

const filterReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_CATEGORY":
            return {
                ...state,
                selectedCategory: action.payload,
            }
        case "SET_SORT":
            return {
                ...state,
                selectedSortedBy: action.payload,
            }
        default:
            return state;
    }
}

export default filterReducer;