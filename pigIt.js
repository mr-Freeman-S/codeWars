function pigIt(str){
    const sepStr = str.split(' ')
    const answer = sepStr.map(el => {
        if(el.match(/[a-zA-Z]+/g)){

            return el.slice(1) + el.slice(0,1) + 'ay'
        }
        return el
    }).join(' ')

    return answer

}

