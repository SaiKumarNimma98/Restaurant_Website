// // Random IPL Teams with Captains and Colors

// var arr=[

//    {
//     team:'MI',
//     captain:'Rohit Sharma',
//     pri:'blue',
//     sec:'gold'
//    },
//    {
//     team:'CSK',
//     captain:'MS Dhoni',
//     pri:'yellow',
//     sec:'black'
//    },
//    {
//     team:'RCB',
//     captain:'Virat Kohli',
//     pri:'red',
//     sec:'gold'
//    },
//    {
//     team:'SRH',
//     captain:'Kane Williamson',
//     pri:'orange',
//     sec:'black'
//    }
// ];

// var btn=document.querySelector('button');
// var h5=document.querySelector('h5');
// var h4=document.querySelector('h4');

// btn.addEventListener('click', function(){
//     var num = Math.floor(Math.random()*arr.length);
//     let winner=arr[num];
//     console.log(winner.team);
//     h5.innerHTML=winner.team;
//     h4.innerHTML=`${winner.captain}`;

//     h5.style.backgroundColor=winner.sec;
//     h5.style.color=winner.pri;
// });
// ===========================================================================================================================
//// Web API's : 1)setTimeOut - Delay  2)setInterval - Controlled loop

// console.log("hello");        //execute 1st
// setTimeout(function(){
//     console.log("hello1");   //execute 4th
// },3000)
// setTimeout(function(){
//     console.log("hello2");   //execute 3rd
// }, 2000)
// setTimeout(function(){
//     console.log("hello3");   ////execute 2st
// }, 1000)

// // =========================================================================================================
// // SetTimeOut Example

// var btn= document.querySelector('button')
// var h2=document.querySelector('h2')
// var h5= document.querySelector('h5')

// btn.addEventListener('click', function(){
//     h5.innerHTML="Request"
//     h5.style.color='orange'
//     setTimeout(function(){

//      h5.innerHTML='Friend'
//      h5.style.color='blue'
//      btn.innerHTML='Remove Friend'
//    }, 2000)
    
// });
// // =========================================================================================================
// Create the image in random position when you click the button

var body = document.querySelector('body')
var btn = document.querySelector('button')

btn.addEventListener('click', function(){

         var x = Math.random()*100
         var y = Math.random()*100

        //  console.log(x);
        //  console.log(y);
    var createNew = document.createElement('img')
    createNew.setAttribute('class', 'image')
    createNew.setAttribute('src', 'https://live.staticflickr.com/65535/53508478930_9db1f82cb0_h.jpg')
    
    createNew.style.height='200px';
    createNew.style.left= x+'%'
    createNew.style.top= y+'%'

    body.appendChild(createNew);
})