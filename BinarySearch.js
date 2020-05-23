function BinarySearch(value, list){
    let first = 0;
    let last = list.length - 1;
    let found = false;
    let position = -1;
    let middle;

    while(!found && first <= last){
        middle = Math.floor((first + last)/2);

        if(list[middle] == value){
            found = true;
            position = middle;
        } else if(list[middle] > value) {
            last = middle-1;
        } else {
            first = middle + 1;
        }
    }
    return position;
}

console.log(BinarySearch(78,[4,7,9,10,4,8,19,44,78,90,34,56,32]));