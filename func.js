// function showFirstMessage(text) {
//     alert(text);
// }
// let num = 20;
// showFirstMessage('jkgk');
// console.log(num);

// let calc =  function(a, b) {
//     return (a + b);
// }

let calc = (a,b) => a+b;

console.log(calc(1, 2));

function retVar() {
    let num = 50;
    return num;

}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());

let twelve = "12.2";
console.log(Math.round(twelve));