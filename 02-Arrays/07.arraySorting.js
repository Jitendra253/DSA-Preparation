//In this program sort using Bubble Sort.
//Bubble Sort is a sorting algorithm that compares two adjacent elements and swaps them if they are in the wrong order, repeating this process until the entire array is sorted.

let data = [40,30,12,25]

for(let i = 0;i<data.length;i++){
    for(let j = 0;j<data.length-1 ; j++){
        if(data[j] > data[j+1]){
            let temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
            // [data[j],data[j+1]] = [data[j+1],data[j]]
        }
    }
}

console.log(data);
