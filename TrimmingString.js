function trim(str, size) {
    if (str.length <= size){
        return str
    } else  if (size <= 3){
        return str.substring(0,size) + '...'
    }
    return str.substring(0,size-3) + '...'
}