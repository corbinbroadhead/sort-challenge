const sorter = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * (i + 1);
    }
    return arr.sort();
}
console.log(sorter([17, 5, 6, 9, 3]))