export function descendingOrder(n: number): number {
    // take the arg
    // convert it to string
    const stringfiedNumber = n.toString();
    // split each character
    const stringifiedCollection = stringfiedNumber.split('')
    .map((item: string) => Number(item))
    .sort((a: number, b: number) => b-a)
    .map((eachNumber: number) => eachNumber.toString());
    // convert each one to number again
    // reorder
    // 'paste them again'
    // convert them to number
    const result: number = Number(stringifiedCollection.join(''))
    return result;
};
const randomStrings: number[] = [];
for(let i = 1; i < 6; i++) {
    let randomNumber = Math.floor(Math.random()*1000000);
    console.log('random number ', randomNumber)
    randomStrings.push(randomNumber);
};

export function getDescendingOrder(n: number): number {
    return parseInt(n.toString().split('').sort().reverse().join(''))
};

console.log('random numbers array: ', randomStrings);
console.log('--- test ---')
randomStrings.forEach((item: number) => console.log(`${item} ---> `, descendingOrder(item)));
console.log('--- altern solution ---');
randomStrings.forEach((item: number) => console.log(`${item} ---> `, getDescendingOrder(item)));


