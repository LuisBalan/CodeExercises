const getUpperCase = (charString) => {
    return new Promise((resolve, reject) => {
        if (charString === null || charString === undefined || typeof charString !== 'string'){
            reject('there is not a valid string')
        } 
        else if ( charString === ''){
            reject('Type a non empty string')
        }
        
        else if ( typeof charString === 'string') {
            resolve(charString.toUpperCase())
        }
    })
};

const timer = function(time) {
    const timerPromise = new Promise((resolve, reject) => {
        if (typeof time !== 'number') {
            reject('Enter a valid number');
        } else {
            setTimeout(() => {
                resolve('time counting complete!')
            }, time);
        };
    })
    return timerPromise;
};



// getUpperCase('').then( res => console.log('promise resolution: ', res)).catch(err => console.log(err))
// getUpperCase(123).then( res => console.log('promise resolution: ', res)).catch(err => console.log(err))
// getUpperCase(true).then( res => console.log('promise resolution: ', res)).catch(err => console.log(err))

// timer(5000).then(res => console.log(res)).catch( err => console.log(err)); //ok
// timer('valor').then(res => console.log(res)).catch( err => console.log(err));
// timer(false).then(res => console.log(res)).catch( err => console.log(err));



