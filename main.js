// function MyBook(author, title) {
//     this.author = author;
//     this.title = title;
// }

// let book = new MyBook('Mark Salve', 'Gor');

// console.log(book);

// function Calculator() {
//     this.read = function(){
//       this.a = +prompt('введите число');
//       this.b = +prompt('введите число');
//     };
//     this.sum = function() {
//       return  this.a + this.b;
//     };
//     this.mult = function() {
//       return  this.a * this.b;
//     };
// }
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mult() );

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function(){
//               this.value += +prompt('введите число');
//             };

// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);
// function positiveSum(arr) {
//   let a = arr.filter((el) => {
//     if (el > 0){
//       return el;
//     }
//   })
//   console.log(a);
//     return a.reduce((prevValue, value) => {
//     return  prevValue + value;
//     }, 0)

// }
// console.log(positiveSum([1,12]));
// function makeNegative(num) {
//   if( num > 0) {
//    return num = -num;
//   }
//   return num;
// }
// console.log(makeNegative(-5))

// function opposite(number) {
//   if(number > 0){
//     return number = -number;
//   } else if (number < 0) {
//     return number = -number;
//   }
// }
// console.log(opposite(-5));
// function solution(str){

//   let a = str.split('');
//   console.log(a);
//   let b = a.reverse();
//   let c = b.join('');
//   return c;
// }
// console.log(solution('hello'));
// function removeChar(str){
//   return str.slice(1,-1);
//  }
//  console.log(removeChar('hellowen'));
// function repeatStr (n, s) {
//   let sum = '';
//   for( let i = 0; i < n; i++){
//     sum += s;
//     console.log(sum);
//   }
//   return sum;
// }
// console.log(repeatStr (5, 'hello'));
// function noSpace(x){
//   return x.split(' ').join('');
//  }
//  console.log(noSpace('asj ajl asd'));

// let a = 'background-color';

// function spl(arg) {
//   let ab = arg.split('-');
//   let bb = ab.map(function(arg, index) {
//     if(index === 0){
//       return arg;
//     } else {
//      return arg[0].toUpperCase() + arg.slice(1);
//     }
//   })
//   return bb.join('');

// }
// console.log(spl(a));

// let a = [1,6,2,63,3];

// function rev(arg) {
//   let s = [];
//   for (let i = 0; i < arg.length; i++){
//     s = arg[i];
//   }
//   return s;

// function bind(pers) {
//   return function(persTwo){
//     console.log(`Person: ${this.name}, ${this.age}`);
//   }
// }

// let person1 = {name: hulio, age: 22};
// let person2 = {name: jull, age: 12};

// let visul = bind('Person');
// visul(person1);

// JQUERY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// for(let i = 0; i < 5; i++) {
//   $('.text').hide(3000);
//   $('.text').show(5000);
// }

// let friends = ["Andry", "Den", "Nikita"];

// for (i = 0; i < friends.length; i++) {
//   $(".friends").append("<p>" + friends[i] + "</p>").fadeIn(3000).hide(3000);
// }
// $("h1").text("My friend");
// $('p').append(' smells');

// for(i =0; i < 5; i++){
  
//   $('h1').fadeTo(2000, 0);
// }

// let sec = 5;

// setInterval(() => {
//   console.log('Hello ' + sec );
// }, 5000);
// let timeutId = setTimeout(led, 3000);
// console.log(timeutId);
// clearTimeout(timeutId);

let headingHed = document.querySelector('.heading_2');

let leftOffset = 0;
let minuts = 0;
let hours = 0;
function moveHeader( event ) {
  // $('.heading').text('Second : ' + ' ' + leftOffset   +  ' Minuts :  ' + minuts +  '' + ' Hours : ' + hours);
  headingHed.innerHTML = (`Second : ${leftOffset} <br> Minuts :  ${minuts} <br> Hours  :  ${hours}`);
  leftOffset ++;

  if(leftOffset > 60){
    leftOffset = 0;
    minuts++;
  }
  if(minuts > 60) {
    hours++;
    minuts = 0;
  }
};
$('.click').click(setInt);
 
 function setInt() {
   return setInterval(moveHeader, 1000);
 };

// ДВИЖЕНИЕ БЛОКА ПО ОСЯМ (НАЧАЛО)
// let direction = 'вправо';
// let offset = 0;
// let clicks = 0;
// $('.coursor').offset({left:offset , top:offset});
// let intervalLength = 120;
// function moveMoong() {
//   if(direction === 'вправо') {
//     $('.coursor').offset({left:offset});
//     offset++;
//     if(offset > 200) {
//       offset = 0;
//       direction = 'вниз';
//     }
//   }
//   if(direction === 'вниз') {
//     $('.coursor').offset({top:offset});
//     offset++;
//     if(offset > 200) {
//       offset = 200;
//       direction = 'влево';
//     }
//   }
//   if(direction === 'влево') {
//     $('.coursor').offset({left:offset});
//     offset--;
//     if(offset < 0) {
//       offset = 200;
//       direction = 'вверх';
//     }
//   }
//   if(direction === 'вверх') {
//     $('.coursor').offset({top:offset});
//     offset--;
//     if(offset < 0) {
//       offset = 0;
//       direction = 'вправо';
//     }
//   }
// };
// setInterval(moveMoong, intervalLength);

// $(".coursor").click(function () {
//   clearInterval(intervalId);
//   intervalLength /= 2;
//   clicks++;

//   if (clicks > 10) {
//     $(".coursor").text("Накликал-таки!");
//   } else {
//     intervalId = setInterval(moveHeading, intervalLength)

//   }
// });
// ДВИЖЕНИЕ БЛОКА ПО ОСЯМ (Конец)

// НАЙТИ КЛАД НА КАРТЕ (НАЧАЛО)
let getRandomNumber = function(size) {
  return Math.floor(Math.random() * size);
}

let getDistance = function (event, target) {
  let diffX = event.offsetX - target.x;
  let diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = function (distance) {
  if( distance < 10) {
    return 'Boiling hot!';
  } else if (distance < 20) {
    return 'Really hot';
  }else if (distance < 40) {
    return 'Hot';
  }else if (distance < 80) {
    return 'Warm';
  }else if (distance < 160) {
    return 'Cold';
  }else if (distance < 320) {
    return 'Really cold';
  } else {
    return 'Freezing';
  }
}
let width = 400;
let height = 400;
let clicks = 0;
let clicksFinish = 20;

let target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
}
$('#map').click(function(event){
  clicks++;
  let distance = getDistance(event, target);
  let distanceHint = getDistanceHint(distance);
  $('#distance').text(distanceHint);
  
  $('#finish').text('Осталось' + (clicksFinish - clicks) + 'попыток');
  if(clicks === clicksFinish){
    alert('GAME OVER');
    return;
  }
  if( distance < 8){
    alert("Found the treasure in " + clicks + " clicks!"); 
  } 
   if (distance > 400){
    alert('GAME OVER');
  }
})

// НАЙТИ КЛАД НА КАРТЕ (КОНЕЦ)