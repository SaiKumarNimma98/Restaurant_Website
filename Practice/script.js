// let numbers = [1, 2, 3, 4, 5];
// let smallNumbers=[];
// for (const num of numbers) {
//     if(num===4) {
//         continue;
//     }
//     smallNumbers.push(num);
// }
// console.log(smallNumbers);


// function a(a,b, ... rest){
//     console.log(a,b, rest);
// }
// a(1,2,3,4,5,6,7,8,9);

// var arr = [1,1, 2, 3, 4, 5,2,3,5];
// arr.
// arr.sort();
// console.log(arr);


// // HOF, Callback, Closures examples

// Write a function that takes another function as an argument and calls it after 3 seconds.

// write a function that uses closures to create a counter
// function counter(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);
        
//     }
// }
// var fn=counter();
// fn();
// fn();

// Limit the function call to 4 (call only 4 times not more than that ex: daily password we type 4 only)

// Create a function that takes a callback and executes it after every n seconds infinetely
// function barabar(fn, time){
//     setInterval(fn, time)
// }
//     barabar(function(){
//         console.log("Hello Hi");
//     }, 2000)


// Task: Implements a function that takes a callback and only executes it once      