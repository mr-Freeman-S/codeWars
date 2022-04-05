function rgb(r, g, b) {
    const hex = [r, g, b].map(el => {
        if (el > 255) {
            return 'FF'
        } else if (el < 0) {
            return '00'
        } else if ((el).toString(16).length === 1) {
            return '0' + (el).toString(16).toUpperCase()
        } else return el.toString(16).toUpperCase()
    }).join('')

    return hex
}

