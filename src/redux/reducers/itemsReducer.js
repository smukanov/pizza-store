const ininitialState = {
    items: [],
    isLoaded: false,
}

const itemsReducer = (state = ininitialState, action) => {
    if (action.type === "SET_ITEMS"){
        return {
            ...state,
            items: action.payload,
            isLoaded: true,
        }
    }

    return state;
}

export default itemsReducer;