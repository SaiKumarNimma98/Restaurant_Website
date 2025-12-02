// // // DOM has 4 Points : 1.Selecting the element 2. changing HTML 3. Changing CSS 4. EventListner

// var h=document.querySelector('h1');
// h.innerHTML='NSK';
// h.style.color='RED';
// h.style.backgroundColor='BLACK';
// h.style.padding='100px';
// h.style.textAlign='center';
// h.style.border='5px solid orange';
// h.style.borderRadius='50px';
// h.style.fontFamily='Georgia, serif';
// h.style.boxShadow='10px 10px 5px grey';
// h.style.cursor='pointer';
// h.style.userSelect='none';
// h.style.transition='all 0.3s ease';
// h,addEventListener('click', function(){
//     console.log('WELCOME')
// });
// console.log(h);

// var btn=document.querySelector('#btn');
// btn.addEventListener('click', function(){
//     box.style.backgroundColor='red';
// });
// console.log(btn);

// var box=document.getElementById("box");
// box.addEventListener("click",function(){
//     box.style.backgroundColor="red";
// });
// console.log(box);

// var btn=document.getElementById('btn');
// btn.addEventListener('click', function(){
//     box.style.backgroundColor='black';
// });
// console.log(btn);
// ============================================================================================================================
// Generating random number

// var num = Math.random()*100;
// var num2 = Math.floor(num)
// console.log(num2);

// var ipl=['CSK', 'MI', 'RCB', 'KKR', 'SRH', 'DC', 'RR', 'PBKS', 'GT', 'LSG'];

// var btn=document.getElementById('team');
// btn.addEventListener('click', function(){
//     var randomNum = Math.floor(Math.random()*10);
//     document.querySelector('h1').innerHTML=ipl[randomNum];
// });
// ============================================================================================================================
// var btn= document.querySelector('button')
// var h5= document.querySelector('h5')

// var check =0;
// btn.addEventListener('click', function(){
//     if(check==0){
//     h5.innerHTML='Friend Added'
//     h5.style.color='blue'
//     btn.innerHTML='Remove Friend'
//     check=1
//     }else{
//         h5.innerHTML='Stranger'
//         h5.style.color='red'
//         btn.innerHTML='Add Friend'
//         check=0
//     }
// });

// ===========================================================================================================================
// //Random Numbers

// var num = Math.random()*100
// var num1 = Math.floor(num)
// console.log(num1);

// var num = Math.floor(Math.random()*100)
// console.log(num);

// =============================================================================================================================
// //Random Colors

// var btn=document.querySelector("button")
// var box=document.querySelector("#box")

// btn.addEventListener('click', function(){
//     var change1=Math.floor(Math.random()*256);
//     var change2=Math.floor(Math.random()*256);
//     var change3=Math.floor(Math.random()*256);
    
//     console.log(change1, change2, change3); 

//     box.style.backgroundColor=`rgb(${change1},${change2},${change3})`
// });
// ===========================================================================================================================
// // Random Names

// var names=["sai", "jai", "kumar", "vidharth", "reddy", "nimma"]

// var random = Math.floor(Math.random()*names.length);
// console.log(names[random]);
// ===========================================================================================================================
// // Random IPL Teams

// var teams=["MI", "CSK", "RCB", "PUNJAB","SRH", "RR", "DC", "LSG"];

// var btn=document.querySelector('button');
// var h5=document.querySelector('h5')

// btn.addEventListener('click', function(){
//     var num = Math.floor(Math.random()*teams.length)
//     let winner=teams[num];
//     console.log(winner);
//     h5.innerHTML=winner;
// })
// ===========================================================================================================================
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
//// Web API's : 1)setTimeOut - delay  2)setInterval - controlled loop

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
////==========================================================================================================
// SetTimeOut Example

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
////==========================================================================================================
// // SetInterval Example:

// var a=0;
// console.log(a)
// setInterval(function(){
//   a++;
//   console.log(a)
// }, 500)
// ==========================================================================================================
// Set Interval Clock Example:

// var h3=document.querySelector('h3')

// setInterval(function(){
//     var d=new Date();
//     var hrs=d.getHours();
//     var min=d.getMinutes();
//     var sec=d.getSeconds();
//     h3.innerHTML=`${hrs} : ${min} : ${sec}`
// }, 1000)
// //=========================================================================================================
// Pratice Random DOM examples:

// var h1=document.querySelector('h1')

// // console.log(h1)

// h1.addEventListener('click', function(){
//   h1.innerHTML='PAN INDIA NO.1'
//   h1.style.color='red'
//   h1.style.textShadow='2px 2px 5px black'
//   console.log("PraBOSS")
// })
// //==========================================================================================================
// GetAttribute and SetAttribute Example:

// Examples:
// var h1=document.querySelector('h1')

// // var get = h1.getAttribute("id")
// // var getclass = h1.getAttribute('class')
// // console.log(get)
// // console.log(getclass)

// // var set=h1.setAttribute('id', 'heroine')
// var setclass=h1.setAttribute('class', 'sai')

// Get and Set Images 
// var img1=document.querySelector('img')

// var get=img1.getAttribute('src')
// console.log(get);

// var set=img1.setAttribute('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4InJkHzgS-9Zsdv7Oc3W-iZCor1ubQN0s_g&s")
// console.log(set)

// Tasks : SWAP Images on button click

// var btn = document.querySelector('button')
// var img1 = document.querySelector('#img1')
// var img2 = document.querySelector('#img2')

// btn.addEventListener('click', function(){
//   var img1src = img1.getAttribute('src')
//   var img2src = img2.getAttribute('src')
//   console.log(img1src)
//   console.log(img2src)

//   // var setimg1to2 = img1.setAttribute('src', img2src)
//   // var setimg2to1 = img2.setAttribute('src', img1src)
//   // console.log(setimg1to2)
//   // console.log(setimg2to1)
//                         //  (or) we can do simply this below 
//   img1.setAttribute('src', img2src)
//   img2.setAttribute('src', img1src)

// })

// //=======================================================================================================
// Creating  New Elements

// var create = document.createElement('h1')
// console.log(create)
// create.innerHTML = 'Created new element' 
// //=========================================================================================================
// var body = document.querySelector('body')
// var btn = document.querySelector('button')

// btn.addEventListener('click', function(){
//   var addImage = document.createElement('img')
//  addImage.setAttribute('src', 'https://live.staticflickr.com/65535/53508478930_9db1f82cb0_h.jpg')
//  addImage.style.height='200px';
//  body.appendChild(addImage);
// })