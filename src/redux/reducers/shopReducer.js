const initialState = {
    sum: 0,
    count: 0,
}

const shopReducer = (state = initialState, action) => {
    switch (action.type){
        case "SET_SUM":
            return {
                ...state,
                sum: action.payload,
            }
        case "SET_COUNT":
            return {
                ...state,
                count: action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;