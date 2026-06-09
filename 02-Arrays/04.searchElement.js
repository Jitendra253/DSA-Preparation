let data = [1,2,3,4,5,6,7,8,9];
let elem = 9;
for(i=0;i<=data.length-1;i++){
    if(data[i] == elem){
        console.log('item found at position' , i);
        break;
    }
}