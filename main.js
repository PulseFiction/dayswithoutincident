const loadLocal = () => {
  const count = document.querySelector('.count')
  count.textContent = localStorage.getItem('value');
  
  
  
}

loadLocal();

const time = setInterval(() => {
  const count = document.querySelector('.count');
  count.textContent = parseInt(count.textContent) + 1;
localStorage.setItem('value', count.textContent);
}, 86400000)

const resetTime = () => {
  const count = document.querySelector('.count');
  const button = document.querySelector('.reset');
  button.addEventListener('click', () => {
    count.textContent = 0;
    // set second value to any number to start at a specific number.
    localStorage.setItem('value', 0);
    
  })
}

resetTime();


