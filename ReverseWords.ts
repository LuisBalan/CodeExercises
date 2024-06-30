export function reverseWord(str: string): string {
    let splitString = str.split(' ');
    let revertedWord: string = splitString.map((eachWord: string) => {
        let newString: string = '';
        for (let i = eachWord.length-1; i >= 0 ; i--) {
            newString += eachWord.charAt(i);
        };
        return newString;
    }).join(' ').trim();
    return revertedWord;
};

console.log(reverseWord('mi mama me mi mima'))
console.log('murcielago es tonto ', ' <---> ' ,reverseWord('murcielago es tonto '))