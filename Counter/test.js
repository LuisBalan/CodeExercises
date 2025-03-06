let a = 1
let b = {toString(){return 1}}
let c = 1

console.log(typeof undefined === typeof null)

let x = Array.from('123')
console.log(x)

function f() {}
let y = [f._proto_]
console.log(y)

let i = 0
while(i++ < 3){
    console.log(i)
}

console.log(`I'm the one`)
let z = [1, 2, 3]
let yz = [0,...z]
console.log(yz)

const time = () => setTimeout(() => console.log('second'))
time()

function request(name){
    console.log('I need' + name)
}
function get(items, callback){
    callback(items)
}

// get('your clothes, your boots and your motorcycle', request('luis'))

let str = '99'
let secondstr = new String(str)
// console.log(typeof str)
console.log(typeof secondstr)

if (new Boolean(false)){
    console.log('false test')
}else {
    console.log('no false')
}

if (Infinity){
    console.log('inf')
}

if (null){
    console.log('null')
}

let user = {name: 'tim', age: 61, "likes-apples": true, "1": "one"}
console.log(user["1"])

let helloWorld = "Hello \nWorld"
let helloWorld2 = `Hello
World`
console.log(helloWorld === helloWorld2)

let palabra = "widget with id"
console.log(str.indexOf("id", 2))

console.log('nan0' ,Number.isNaN({}))

let employee = function(){}
let programmer = new employee();

programmer.department = "JS"
console.log('dep',programmer.department)

let promise = new Promise((resolve, reject) => {
    setTimeout(( ) => resolve('done'), 1000)

})

result = await promise
console.log(result)