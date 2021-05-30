'use strict'; ///// DONE

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'are you honest?';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));


const truthTestHandler = () => {
  let honest = confirm('are you honest?');
  // let isConfirmed = Boolean(confirm);
  if(honest===true){
    alert('thanks!')
    }else {
      alert('thats okay too');
    }
};
buttonEl.addEventListener('click', truthTestHandler);
// ask a user to confirm if they are honest
  // let them know what you think of their answer



// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);


