let arr = [1,2,3,4,5,6,7,8,9];
let position = 4;
for(i=position;i<arr.length-1;i++){
    arr[i] = arr[i+1]
}
arr.length = arr.length-1;
console.log(arr)
