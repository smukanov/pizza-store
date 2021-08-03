const initialState = {
    categories: [
        {id: 1, name: "Все", type: 100},
        {id: 2, name: "Мясные", type: 0},
        {id: 3, name: "Вегетарианские", type: 1},
        {id: 4, name: "Гриль", type: 2},
        {id: 5, name: "Острые", type: 3},
        {id: 6, name: "Закрытые", type: 4},
    ],
    sortTypes: [
        {id: 1, name: "по популярности", type: "popylarity"},
        {id: 2, name: "по цене", type: "price"},
        {id: 3, name: "по алфавиту", type: "alphabet"},
    ]
}

const categoriesReducer = (state = initialState) => {
    return state;
}

export default categoriesReducer;