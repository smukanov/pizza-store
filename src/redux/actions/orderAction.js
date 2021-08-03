export const addOrder = (order) => {
    return {
        type: "ADD_ORDER",
        payload: order,
    }
}

export const removeOrder = (order) => {
    return {
        type: "REMOVE_ORDER",
        payload: order,
    }
}