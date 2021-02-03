const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];



const giveaway = document.querySelector('.giveaway');
const dealine = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let futureDate = new Date(2021,5,12,11,30,0);


const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;


// future time in miliseconds

const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const timeRemaining = futureTime - today

  //1s = 1000ms
  //1m = 60s
  //1hr = 60mins
  //1d = 24hr

  //values in ms 
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  //calculate values
  let days = timeRemaining/oneDay;
  days = Math.floor(days);

  let hours = (timeRemaining % oneDay) / oneHour;
  hours = Math.floor(hours);

  let minutes = Math.floor((timeRemaining % oneHour) / oneMinute);

  let seconds = Math.floor((timeRemaining % oneMinute) / 1000);

  //set values array
  const values = [days,hours,minutes,seconds];

  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }

  items.forEach(function(item,index){
    item.innerHTML = values[index]
  });
  if(timeRemaining < 0){
    clearInterval(countdown)
    dealine.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }
}

//countdown
let countdown = setInterval(getRemainingTime,1000);


getRemainingTime()