// let arr = [1, 2, 3, 4, 5];

// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");


// console.log(arr.length);
// console.log(arr);
// // for( let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key);
// }


// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(",");
// console.log(arr);

// let arr = ["aaa", "dwqqwd", "qwfqw", "eryer"],
//     i = arr.join(", ");

// console.log(i)

let arr = ["aaa", "dwqqwd", "qwfqw", "eryer"],
    i = arr.sort();

function compareNum(a, b) {
    return a-b;
}

console.log(i);
let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);