// 1. Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 second after the page loads.
setTimeout(() => {
    const div1=document.querySelector(`#first`); 
    const p1=document.createElement(`p`);
    p1.innerText=`Hi!`;
    div1.append(p1);
}, 1000);

// 2. Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after the page loads.
setTimeout(() => {
    const div2=document.querySelector(`#timeout-nesting`); 
    const p2=document.createElement(`p`);
    p2.innerText=`One`; 
    div2.append(p2);

    setTimeout(() => {
        const p3=document.createElement(`p`); 
        p3.innerText=`Two`; 
        div2.append(p3); 
    }, 1000);
}, 2000);

// 3a.  Use a setInterval method to display a counter in the console that starts at 1 and continues going up one number at a time every second.
let counter=1
let time = setInterval(() => {
    console.log(counter);
    counter++;
}, 1000);

// 3b. Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop continuously running (HINT: Need to create a variable).
const stop = document.querySelector(`button`); 
stop.addEventListener(`Click`, ()=> {
    clearInterval(time);
});

// 4. Using setInterval, display a countdown clock as a p element/tag inside the div with the id of "countdown". Have the countdown clock start at 2 minutes and count down. The countdown clock should display in the following format (Example: 2:00 to start and 0:00 at end). ALSO, when the countdown timer hits zero have it display a message saying… "TIME IS UP" instead of the clock (AKA 0:00).
const countdown = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
countdown.append(p4);

const startTime = 2;
// let currentTime = startTime * 60;
let currentTime = 5;
function updateCountdown(){
  const minutes = Math.floor(currentTime / 60);
  let seconds = currentTime % 60;
  seconds = (seconds < 10) ? `0` + seconds : seconds;
  p4.innerText = `${minutes} : ${seconds}`;
  currentTime--;
}

setInterval(() => {
  updateCountdown();
  // After currentTime is 0 or less the p4.innerText is immediately changed to `TIME IS UP` every time the code in the anonymous arrow function is run
  if (currentTime <= 0){
    p4.innerText = `TIME IS UP`;
  }
}, 1000);

// OR
/*
const div3 = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
div3.append(p4);
let startingSeconds = 120;

const countdown = setInterval(() => {
  startingSeconds--;
  const minutes = Math.floor(startingSeconds / 60);
  const seconds = startingSeconds % 60;

  p4.innerText = (seconds < 10) ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;

  if (startingSeconds === 0){
    p4.innerText = `TIME IS UP`;
    clearInterval(countdown);
  }
}, 1000);
*/