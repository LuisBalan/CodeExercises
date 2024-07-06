export function comp(a1: number[] | null, a2: number[] | null): boolean{
    // declare boolean variable that will be returned by the function
    // compare two array in the next way:
    let areTheSame!: boolean;
    if ((a1 === null || a2 === null) || a1.length !== a2.length) {
        areTheSame = false;
        return areTheSame;
    };

    if ((a1 as Array<number>).length !== (a2 as Array<number>).length) {
        areTheSame = false;
        return areTheSame;
    };

    const squareA1 = (a1 as Array<number>).map((elem: number) => elem**2);

    // for (let i = 0; i < (a2 as number[]).length ; i++) {
    //     areTheSame = (squareA1 as number[]).includes((a2 as number[])[i]) ? true : false;

    //     if (areTheSame === false) { break };
    // };

    for(let i = 0; i < (a1 as number[]).length ; i++){
        areTheSame = (a2 as number[]).includes(a1[i]**2) ? true : false;
        a1.splice(i, 0);

        if ( areTheSame === false) {
            break;
        };

    }; 


    return areTheSame;
};