function ModifiedBubbleSort(vector){
    const ciclo = vector.length;
    let flag = 1;
    for(let i=0; i<ciclo && flag==1; i++)
    {
        flag = 0;
        for(let j=0; j<ciclo; j++)
        {
            if(vector[j] > vector[j+1])
            {
                flag = 1;
                let temp = vector[j];
                vector[j] = vector[j+1];
                vector[j+1] = temp;
            }
        }
    }
    return vector;
}

let vec = new Array(15);
for(let i=0; i<15; i++){
    vec[i] = Math.floor(Math.random()*100);
}

console.log(ModifiedBubbleSort(vec));
