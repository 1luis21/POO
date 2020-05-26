function LinearSearch(value, list){
    let found = false;
    let position = -1;
    let index = 0;

    while(!found && index < list.length){
        if(list[index] == value){
            found = true;
            position = index;
        } else{
            index += 1;
        }
    }
    return position;
}


console.log(LinearSearch(10,[4,7,9,10,4,8,1,66,7,2,45,2,89,23,6,2,721,6,1]));
