// Q: Push and Pop method in array (print softcopy and hardcopy)
// let trees=["mango","apple","banana","grapes"];
// let a=trees;
// trees.pop();
// a.push("orange");
// console.log(trees);
// console.log(a);


// Q: Join two array elements with Add method
// let pc=["mumbai, ", "hyd, ", "pune"];
// let fc=["kolkata, ", "kerela, "]

// console.log(pc.join(fc))


// Q: Join two array elements with Add method
// let pc=["mumbai", "hyd", "pune"];
// let fc=["kolkata", "kerela"]

// console.log(pc.concat(fc));


// Q:  Array store in Variable
// let array=[1, 2, 3];
// let arr=array;
// console.log(arr)


// // Q: London is present in the cities array or not
// let cities=['paris', 'belgium', 'london', 'texas'];
// let londonList=cities.includes('london');
// console.log(londonList);

// Q: Write a loop to print sum of 1 to 5 numbers
// let sum=0
// let i=0
// while(i<=5)
// {
//     sum=sum+i;
//     i++
// }
// console.log(sum);

// // Q: Write a while loopcount downs from 5 to 1
// let countdown=[];
// let j=5
// while(j>0)
// {
//     countdown.push(j);
//     // console.log(countdown);
//     j--;
// }
// console.log(countdown);

// // For loop
// // there is an array of numbers multiply them by 2 and give the result in another array

// let a=[2,3,4,5];
// let b=[];
// for (let i=0; i<a.length; i++){
//     b.push(a[i]*2);
// }
// console.log(b);


// // display the item from one array to another array by using loops
// let a=[2,3,4,5];
// let b=[];
// for (let i=0; i<a.length; i++){
//     b.push(a[i]);
// }
// console.log(b);

let flowers = ["rose", "jasmine", "tulip", "lily"];
let oneFlower =[];

for(let i=0; i<flowers.length; i++){
    oneFlower.push(flowers[i])  ``
    if (flowers[i]==='tulip'){
        console.log('tulip');
        break;
    }
    console.log(oneFlower);
}
