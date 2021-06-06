'use strict'; // DONE

const divEl = document.createElement('div');
divEl.innerHTML = `
  <a href='#toop'>
    <button>back to the top</button>
  </a>
`;
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- write some code ---

// divEl.children[0].setAttribute('href', '#top'); as an option  (second parameter is a value what we want to add to our attribute)
divEl.children[0].href = '#top';
divEl.children[0].children[0].innerHTML = 'to the top';
// divEl.children[0].children[0].setAttribute('id', 'button'); as an option (second parameter is a value what we want to add to our attribute)

// --- --- --- --- --- ---

console.log(divEl.nodeName, divEl.cloneNode(true));

console.assert(divEl.children[0].getAttribute('href') === '#top',
  'Test: href');

console.assert(divEl.children[0].children[0].innerHTML === 'to the top',
  'Test: button innerHTML');

/* const btn = divEl.children[0].children[0];
btn.textContent = 'to the top';

const href = divEl.children[0]; 
console.log(href);
href.removeAttribute('#toop');
*/