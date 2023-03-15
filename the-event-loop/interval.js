/**
 *  Declared a variable countdown to hold our start interval. In our setTimeout function
 *  we attach the interval to the variable launchSequence. Every second we decrement the countdown
 *  and log the value when we reach 0 we clear the interval and log 'Blast off!'
*/
let countdown = 3;

const launchSequence = setInterval(() => {
  console.log('T-minus:', countdown);
  countdown--;
  if (countdown === 0) {
    console.log('Blast off!');
    clearInterval(launchSequence);
  }
}, 1000);
