

const clock = document.getElementById('clock');

setInterval(function (){ // ye ek mathod hai jisse tum real world time display krwa skte hoo
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();

}, 1000);


// const clock = document.getElementById('clock');
// // const clock = document.querySelector('#clock')

// setInterval(function () {
//   let date = new Date();
//   // console.log(date.toLocaleTimeString());
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);



























