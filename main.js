const loadLocal = () => {
  const date = new Date();
  localStorage.setItem('date', date.getDay());
  const count = document.querySelector('.count')
  count.textContent = localStorage.getItem('value');
  
}

loadLocal();


const setDays = () => {
  const count = document.querySelector('.count');
  const userInput = prompt('Set a day');
  const regex = new RegExp('[^0-9]')
  if (regex.test(userInput)) {
    alert('Input a number');
    console.log('Input contains non-numbers');
  } else {
    localStorage.setItem('value', userInput);
    count.textContent = localStorage.getItem('value');
    console.log('Input is all numbers, valid input');
  }
}


const time = setInterval(() => {
  const date = new Date();
  const count = document.querySelector('.count');
localStorage.setItem('value', count.textContent);
localStorage.setItem('dateNow', date.getDay());
  if (localStorage.getItem('date') !== localStorage.getItem('dateNow')) {
    count.textContent = parseInt(count.textContent) + 1;
    localStorage.setItem('date', date.getDay());
  } else {
    console.log('Dates are same');
  }

}, 60000)

const resetTime = () => {
  const count = document.querySelector('.count');
  const button = document.querySelector('.reset');
  button.addEventListener('click', () => {
    count.textContent = 0;
    // set second value to any number to start at a specific number.
    localStorage.setItem('value', 0);
    
  })
}

document.querySelector('.set').addEventListener('click', setDays)
resetTime();


