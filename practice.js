let data = [2,45,32,23,67,87,90,112];
for(let i = 0;i<data.length -1 ;i++){
    for(let j = 0;j<data.length-1;j++){
        if(data[j]>data[j+1]){
            [data[j+1],data[j]] = [data[j],data[j+1]]
        }
    }
}
console.log(data)