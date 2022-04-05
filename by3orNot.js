function divisibleByThree(str){
    return [...str].reduce((acc,e)=> +e + acc,0)%3===0;
}

console.log(divisibleByThree('123'))