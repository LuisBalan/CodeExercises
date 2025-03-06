function minBy( array, iterateee ) {
    let mappedArray = array.map(iterateee);
    if ( mappedArray !==  null || mappedArray !== undefined ) {
        return mappedArray.sort((a, b) => a - b )[0];
    };
};

console.log(minBy([],  o => o.a ))