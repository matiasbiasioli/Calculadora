const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const theme = document.querySelector ('.btn_theme');
const calculator = document.querySelector('.calculator_container')


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === 'backSpace') {
      if (display.textContent.length === 1 || display.textContent === 'Error!') {
        display.textContent = '0'
        return;
      } else {
        display.textContent = display.textContent.slice(0, -1)
        return;
      }
    } if (button.id == 'clear') {
      display.textContent = '0';
      return;
    } if (button.id === 'equal') {
      try{
        display.textContent = eval(display.textContent)
      } catch {
        display.textContent = 'Error!'
      }
      return;
    } if (display.textContent === '0' || display.textContent === 'Error!') {
      display.textContent = button.textContent
    } else {
      display.textContent += button.textContent
    }
  })
})

theme.addEventListener ('click', ()=>{
  calculator.classList.toggle ('dark')
})