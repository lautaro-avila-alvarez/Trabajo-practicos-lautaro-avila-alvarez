let btn1 = document.querySelector ("#btn1")
let btn2 = document.querySelector ("#btn2")
let btn3 = document.querySelector ("#btn3")
let btn4 = document.querySelector ("#btn4")
let btn5 = document.querySelector ("#btn5")
let btn6 = document.querySelector ("#btn6")
let text = document.querySelector ("#text")



btn1.onclick = function () {
text.textContent="hola"
}
btn2.onclick = function () {
    text.style.backgroundColor = 'red'
    }
 btn3.onclick = function () {
    text.style.color = 'green'
 }
 btn4.onclick = function () {
    text.style.fontFamily = 'IMPACT'
    }
btn5.onclick = function () {
        text.style.fontSize = '30px'
        }
btn6.onclick = function () {
            text.textContent="67"
            text.style.fontSize = '10px'
            text.style.fontFamily = 'Cambria'
            text.style.color = 'black'
            text.style.backgroundColor = 'purple'
            }

    