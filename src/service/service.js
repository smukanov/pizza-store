const sortingByPopularity = (arr) => { // сортировка по популярности по убыванию
    arr.sort((a, b) => {
        return a.rating - b.rating;
    })
}

const sortingByPrice = (arr) => { // сортировка по популярности по цене по возрастанию
    arr.sort((a, b) => {
        if (a.price[0] === b.price[0]){
            return 0;
        }
        if (a.price[0] > b.price[0]){
            return 1
        }
        else {
            return -1;
        }
    })
}

const sortingByAlphabet = (arr) => { // сортировка по алфавиту с буквы А
    arr.sort((a, b) => {
        if (a.name === b.name){
            return 0;
        }
        if (a.name > b.name){
            return 1;
        }
        else{
            return -1;
        }
    })
}

const sortingByType = (type, arr) => {
    switch (type){
        case "popularity":
            sortingByPopularity(arr);
            break;
        case "price":
            sortingByPrice(arr);
            break;
        case "alphabet":
            sortingByAlphabet(arr);
            break;
        default:
            break;
    }
}

export default sortingByType;
