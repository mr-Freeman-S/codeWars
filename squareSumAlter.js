    function alternateSqSum(arr){
        return arr.reduce((acc,el,index)=> index% 2 == 1 ? acc + (el)**2 :  acc + el,0)
    }
