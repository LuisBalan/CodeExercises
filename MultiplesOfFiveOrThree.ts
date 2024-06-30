export class Challenge {
    static solution(number: number) {
        let numberArray: Array<number> = [];
        let i = 1;
        do {
            numberArray.push(i);
            i++;
        } while (i < number );

        let sum = numberArray.reduce((accum: number, curr: number): number => {
            if (curr%3 === 0 || curr%5 === 0) {
                accum = accum + curr;
            };
            return accum;
        }, 0)
        return sum;
    };
};

console.log(Challenge.solution(10));

