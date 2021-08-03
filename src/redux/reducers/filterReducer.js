const initialState = {
    selectedCategory: {
        type: 100,
        name: "Все",
    },
    selectedSortedBy: {
        type: "popularity",
        name: "по популярности",
    },
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