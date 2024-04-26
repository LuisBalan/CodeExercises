export class Kata {
    static dnaStrand(dna: string) {
        return dna.split('').map(symbol => {
            switch(symbol){
                case 'A':
                    return 'T';
                case 'T':
                    return 'A';
                case 'G':
                    return 'C';
                case 'C':
                    return 'G';
            }
        }).join('');
    }
}

console.log(Kata.dnaStrand('AAAAA'))
console.log(Kata.dnaStrand('TTTTT'))
console.log(Kata.dnaStrand('CCCCC'))
console.log(Kata.dnaStrand('GGGGG'))
console.log(Kata.dnaStrand('AGTCTGAGTACAAGGTTCCA'))



