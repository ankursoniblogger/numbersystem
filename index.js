const number = [2,3,4,5,6,7,34,2,2,23,11];

for(let i=0; i<=number.length-1; i++){
    if(number[i]%2 == 0){
        console.log("Even number" , number[i])
    } else{
        console.log("Odd number" , number[i])
    }
}
