export function findShort(s: string): number {
    return s.split(' ').map((item: string) => item.length).sort((a: number, b: number) => a-b)[0];
};

const testStringCollection: string= 'a este paso nunca llegaremos a la meta'

console.log(findShort(testStringCollection))