import bot from './assets/bot.svg';

const form = document.querySelector('form')
const chatContainer = document.querySelector('#query')

let loadInterval

function loader(element) {
    element.textContent = ''

    loadInterval = setInterval(() => {
        element.textContent += '.';

        if (element.textContent === '.......') {
            element.textContent = '';
        }
    }, 500);
}

function typeText(element, text) {
    let index = 0

    let interval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.charAt(index)
            index++
        } else {
            clearInterval(interval)
        }
    }, 30)
}
