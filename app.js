const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
let timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
    squares.forEach(s => {
        s.classList.remove('mole')
    })

    let rdSquare = squares[Math.floor(Math.random() * squares.length)]
    rdSquare.classList.add('mole')
    hitPosition=rdSquare.id
}

squares.forEach(s => {
    s.addEventListener('mousedown', () => {
        if (s.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId=setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime == 0) {
        clearInterval(countDownTimer)
        clearInterval(timerId)
        alert('時間到~你點到不啦的次數為：'+result)
    }
}
let countDownTimer = setInterval(countDown,1000)
