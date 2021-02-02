
var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;

console.log('lalalala');
console.log(null);
console.log(undefined);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name);
console.log(persone["name"]);

let arr = ['plum.png', 'orange.png', 'apple.jpg']
console.log(arr[1])

// alert('Hello');

// let answer = confirm('Are you here?');
// console.log(answer);
// let answer = prompt('Are you here?', 'Yes');
console.log(typeof(answer));
console.log(4 + ' answer');

let incr = 10, decr = 10;
// incr++;
// decr--;
// console.log(++incr)
// console.log(--decr)

console.log(incr++)
console.log(decr--)

console.log('2' == 2)
console.log('2' === 2)

if (2*4 == 8) {
    console.log("Verno")
}

let num = 50;
if (num < 49) {
    console.log("No!")
} else if (num > 100) {
    console.log("Many!")
} else {
    console.log('YES!')
}

(num == 50) ? console.log('YES!') : console.log('NO!')

switch (num) {
    case num < 49:
        console.log('NO!');
        break;
    case num > 100:
        console.log('Many!');
        break;
    case 50:
        console.log('YEAAAAAAAAAS!');
        break;
}

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while(num < 55)

for(let i = 1;i < 8;i++) {
    
}