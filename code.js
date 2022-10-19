// calculator //////////////////////////////
const result = document.getElementById('result__screen')
const buttons = document.querySelectorAll('.table__btns')
const deletebtn = document.getElementById('del_btn')
const form = document.getElementById('form')
const equal = document.getElementById('equal_button')
const reset = document.getElementById('reset_button')

buttons.forEach((button, i) => {
    button.addEventListener('click', () =>{
        result.textContent += buttons[i].value
    })
})

deletebtn.addEventListener('click', () => {
    result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);
})

equal.addEventListener('click', () => {
    result.innerHTML = eval(result.innerHTML)
})

reset.addEventListener('click', ()=> {
    result.innerHTML = ''
})

// theme //////////////////////////////

const ball1 = document.querySelector('.ball_1')
const ball2 = document.querySelector('.ball_2')
const ball3 = document.querySelector('.ball_3')
const colorTheme = document.getElementById('color-theme')
const theme1 = 'themes/theme-1.css'
const theme2 = 'themes/theme-2.css'
const theme3 = 'themes/theme-3.css'

ball1.addEventListener('click', () => {
    ball1.style.background = 'hsl(6, 63%, 50%)';
    ball3.style.background = 'hsl(223, 31%, 20%)';
    ball2.style.background = 'hsl(223, 31%, 20%)';
    colorTheme.setAttribute('href', theme1)
})

ball2.addEventListener('click', () => {
    ball2.style.background = 'hsl(6, 63%, 50%)';
    ball1.style.background = 'hsl(0, 5%, 81%)';
    ball3.style.background = 'hsl(0, 5%, 81%)';
    colorTheme.setAttribute('href', theme2)
})

ball3.addEventListener('click', () => {
    ball3.style.background = 'hsl(176, 100%, 44%)';
    ball1.style.background = 'hsl(268, 71%, 12%)';
    ball2.style.background = 'hsl(268, 71%, 12%)';
    colorTheme.setAttribute('href', theme3)
})

