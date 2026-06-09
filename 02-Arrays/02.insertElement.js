
let arr = [12,2,32,12,4,6,7,8,9,21,10];

let elem = 100;
let position = 2;
function insertAtPos(arr){
    for(let i = arr.length-1;i >=position;i--){
        arr[i+1] = arr[i]
        if(i== position){
            arr[i] = elem;
        }
    }
      return arr;
}
let newArray = insertAtPos(arr);
console.log(newArray)


