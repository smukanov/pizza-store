const initialState = {
    items: []
}

const orderReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_ORDER":
            return {
                items: [
                    ...state.items,
                    action.payload,
                ]
            }
        case "REMOVE_ORDER":
            return state;
        default:
            return state;
    }
}

export default orderReducer;