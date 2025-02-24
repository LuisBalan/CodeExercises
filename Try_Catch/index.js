// try {
//     alert ("Start of try runs");
//     alert ("End of try runs");
// } catch  (err) {
//     alert ("Catch is ignored, because there are no errors");
// }

/** Example with error */

// try {
//     alert ("Start of try runs...");
//     lalala;
//     alert ("End of try (never reached)");
// } catch (err) {
//     alert ("Error has ocurred!");
// }

// try {
//     setTimeout(function () {noSuchVariable}, 1000)
// } catch (err) {
//     alert ("won´t work!")
// }


// setTimeout( function () {
//     try {
//         noSuchVariable
//     } catch {
//         alert ("error is caught here!")
//     }
// }, 1000)

/** the error object */

// try {
//     asdfasdfasd
// } catch (err) {
//     alert (err)
// }

/** the stack error */

// try {
//     lalala
// } catch (err){
//     // alert(err.name);
//     // alert(err.message);
//     // alert(err.stack);
//     alert(err)
// }

/** Real life example using json parse */
// let json = '{"name": "Jhon", "age": "30"}';
// let user = JSON.parse(json);

// alert(user.name);
// alert(user.age);

/** Real life using json */

// let json = '{ "name": "bad", "lastName": "json" }';

// try {
//     let user = JSON.parse(json);
//     alert (user.name);
//     alert (user.lastName);
// } catch (err) {
//     alert ("Our apologies, the data has errors, we'll try to request it one more time.")
//     alert (err.name);
//     alert (err.message);
// }

/** Throwing our own errors */

// let jsonTwo = '{ "age" : 30}'

// try {
//     let user = JSON.parse(jsonTwo);
//     // alert ( user.name ) ;
// } catch (err) {
//     let error = new Error("Things happen!");
//     alert ("doesn't execute correctly");
// }

/** Custom errors */

// try {
//     JSON.parse("{ bad_json }");
// } catch (err) {
//     alert (err.name);
//     alert (err.message);
// }

/** New custom error */

// let json = '{"age": 30, "name": "John"}';

// try {
//     let user = JSON.parse(json);
//     if (!user.name) {
//         throw new SyntaxError("Incomplete data: no name");
//     }

//     alert(user.name);
// } catch (err) {
//     alert ("JSON Error: " + err.message );
    
// }

/** Rethrowing technique */

// try {
//     user = {};
// } catch(err) {
//     if (err instanceof ReferenceError) {
//         alert ('ReferenceError')
//     }
// }

// let json = '{"age": 30}';
// try {
//      let user = JSON.parse(json);
//     if (!user.name) {
//         throw new SyntaxError("Incomplete data: no name");
//     }

//     balb();
//     alert (user.name)
// } catch (err) {
//     if (err instanceof ) {
//         alert ("JSON Error: " + err.message );
//     } else {
//         throw err;
//     }
// }

function readData() {
    let json = '{"age": 30}';

    try {
        blablabla();
    } catch (err) {
        if (!(err instanceof SyntaxError)) {
            throw err;
        }
    }
}

try {
    readData();
} catch (err) {
    alert ("External catch got: " + err);
}