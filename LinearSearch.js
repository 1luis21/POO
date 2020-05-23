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


console.log(LinearSearch(4,[-4,7,9,10,4,8]));