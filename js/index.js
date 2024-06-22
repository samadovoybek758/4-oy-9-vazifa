// forEach metodiga oid masalalar
// 1-masala
// const numbers = [1, 2, 3, 4];
// function a(numbers) {
//     numbers.forEach(function (value) {
//     console.log(value*2);
// })}
// console.log(a(numbers));


// 2-masala
// const words = ['apple', 'banana', 'cherry'];
// function a(words) {
//     words.forEach(function (value) {
//     console.log(value.toUpperCase());
// })}
// console.log(a(words));


// 3-masala
// const numbers = [10, 20, 30, 40];
// function a(numbers) {
//     numbers.forEach(function (value) {
//     console.log(value+5);
// })}
// console.log(a(numbers));



// Map metodiga oid masalalar
// 1-masala
// const numbers = [1, 2, 3, 4];
// function kup(numbers) {
//     let result = numbers.map(function(value) {
//         return value*2
//     })
//     return result
// }
// console.log(kup(numbers));


// 2-masala
// const words = ['apple', 'banana', 'cherry'];
// function bigletter(words) {
//     let result = words.map(function (value) {
//         return value.toUpperCase()
//     })
//     return result
// }
// console.log(bigletter(words));


// 3-masala
// const numbers = [10, 20, 30, 40];
// function add5(numbers) {
//     let res = numbers.map(function (value) {
//         return value+5
//     })
//     return res
// }
// console.log(add5(numbers));



// filter metodiga oid masalalar
// 1-masala
// const numbers = [1, 2, 3, 4, 5, 6];
// function choose(numbers) {
//     let res = numbers.filter(function (value) {
//         return value%2==0
//     })
//     return res
// }
// console.log(choose(numbers));


// 2-masala
// const words = ['apple', 'banana', 'cherry', 'date'];
// function choose(words) {
//     let res = words.filter(function (value) {
//         return value.length>5
//     })
//     return res
// }
// console.log(choose(words));



// 3-masala
// const ages = [12, 17, 18, 19, 21];
// function choose(ages) {
//     let res = ages.filter(function (value) {
//         return value>18
//     })
//     return res
// }
// console.log(choose(ages));



// find metodiga oid masalalar
// 1-masala
// const numbers = [4, 9, 11, 2, 18];
// function choose(numbers) {
//      let res = numbers.find(function (value) {
//         return value>10
//     })
//     return res
// }
// console.log(choose(numbers));


// some/every metodiga oid masalalar
// 1-masala
// const numbers = [-1,-2,3, -4];
// function search(numbers) {
//      let res = numbers.some(function (value) {
//         return value>0
//     })
//    return res
// }
// console.log(search(numbers));


// 2-masala
// const words = ['cat', 'dog', 'elephent'];
// function search(words) {
//     let res = words.some(function (value) {
//        return value.length>5
//    })
//   return res
// }
// console.log(search(words));


// 3-masala
// const numbers = [1, 2, 3, 4];
// function search(numbers) {
//     let res = numbers.every(function (value) {
//        return value>0
//    })
//   return res
// }
// console.log(search(numbers));



// String metodlariga oid masalalar
// 1-masala
let str = "Hello"
// function string(str,index) {
//     return str.charAt(index)
// }
// console.log(string(str,2));


// 2-masala
// function string(str,index) {
//     return str.charCodeAt(index)
// }
// console.log(string(str,1));

// 3-masala
// let str2 = "World"
// function string(str,str2) {
//     let str3 = str.concat(str2)
//     return str3
// }
// console.log(string(str,str2));

// 4-masala
let str2 ="hello, world"
// function string(str2,element) {
//     return str2.includes(element)
// }
// console.log(string(str2,"rld"));


// 5-masala
// function string(str2,element) {
//     return str2.endsWith(element)
// }
// console.log(string(str2,"orld"));



// 6-masala
// function string(str2,element) {
//     return str2.indexOf(element)
// }
// console.log(string(str2,"world"));


// 7-masala
let str3 = "Hello, world! Hello again!"
// function string(str3,element) {
//     return str3.lastIndexOf(element)
// }
// console.log(string(str3,"Hello"));



// 9-masala
// const text = 'Hello'
// function string(text,element) {
//     return text.repeat(element)
// }
// console.log(string(text,3));


// 10-masala
// const text = 'Hello, world!';
// function string(text,element) {
//     return text.replace("world",element)
// }
// console.log(string(text,"everyone"));


// 11-masala
// const text = 'Hello, world!';
// function string(text,element) {
//     return text.search(element)
// }
// console.log(string(text,"world"));


// 12-masala
// const text = 'Hello, world!';
// function string(text,element,element2) {
//     return text.slice(element,element2)
// }
// console.log(string(text,7,12));


// 13-masala
// const text = 'Hello, world!';
// function string(text) {
//     return text.split(" ")
// }
// console.log(string(text,));


// 14-masala
// const text = 'Hello, world!';
// function string(text,element) {
//     return text.startsWith(element)
// }
// console.log(string(text,"Hello"));


// 15-masala
// const text = 'Hello, world!';
// function string(text,element,element2) {
//     return text.substr(element,element2)
// }
// console.log(string(text,7,12));


// 16-masala
// const text = 'Hello, world!';
// function string(text,element,element2) {
//     return text.substring(element,element2)
// }
// console.log(string(text,7,12));


// 17-masala
// const text = 'Hello, world!';
// function string(text) {
//     return text.toLowerCase()
// }
// console.log(string(text));


// 18-masala
// const text = 'Hello, world!';
// function string(text,element,element2) {
//     return text.toUpperCase(element,element2)
// }
// console.log(string(text,7,12));


// 19-masala
// const text = '  Hello, world!     ';
// function string(text) {
//     return text.trim()
// }
// console.log(string(text));

// 20-masala
// const text = '   Hello, world!  ';
// function string(text) {
//     return text.trimStart()
// }
// console.log(string(text));


const text = '   Hello, world!  ';
function string(text) {
    return text.trimEnd()
}
console.log(string(text));


