// let fullName = 'Ulfat Zakirli Rovshen';

// let lettersArray = fullName.split('');
// console.log(lettersArray);


// let nameParts = fullName.split(' ');
// let reversedName = [nameParts[nameParts.length - 1], ...nameParts.slice(0, nameParts.length - 1)].join(' ');
// console.log( reversedName);

// let nameParts = fullName.split(' ');
// let reversedName = [nameParts[nameParts.length - 1], ...nameParts.slice(0, nameParts.length - 1)];

// let reversedNameString = reversedName.join(' ');
// console.log(reversedNameString);

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 5) {
//         count++;
//     }
// }


// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log( + sum);

// let counts = {};

// arr.forEach(num => {
//     if (counts[num]) {
//         counts[num]++;
//     } else {
//         counts[num] = 1;
//     }
// });

// let repeatingNumbers = Object.keys(counts)
//     .filter(num => counts[num] > 1)
//     .sort((a, b) => a - b)
//     .map(Number);

// console.log(repeatingNumbers);


// let maxNumber = Math.max(...arr);

// let count = arr.reduce((acc, curr) => curr === maxNumber ? acc + 1 : acc, 0);

// console.log( 7+ maxNumber);
// console.log(3 + count + 2);

// let name = "Narmin";
// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// let nameLength = name.length;

// if (arr.includes(nameLength)) {
//     console.log( ${name} ${nameLength});
// } else {
//     console.log(${name} ${nameLength});
// }


// let firstThreeNumbers = arr.slice(0, 3);

// let remainder = firstThreeNumbers.reduce((acc, curr) => acc % curr);
// let index = arr.indexOf(remainder);

// console.log(remainder);
// console.log( index);


// let sumOfIndexes = arr.reduce((acc, curr, index) => {
//     if (curr === 7) {
//         return acc + index;
//     }
//     return acc;
// }, 0);

//  console.log(sumOfIndexes);
