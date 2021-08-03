export const setSum = (sum) => {
    return {
        type: "SET_SUM",
        payload: sum,
    }
}

export const setCount = (count) => {
    return {
        type: "SET_COUNT",
        payload: count
    }
}