function DNAStrand(dna){
    dna.split('').map(el=> {
        switch (el) {
            case 'A':
                return 'C'
            case 'C':
                    return 'A'
                    case 'T':
                        return 'G'
                        case 'G':
                            return 'T'
            default:
                break;
        }
    }).join('')
}