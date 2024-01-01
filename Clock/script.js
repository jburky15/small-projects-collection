const hourElement = document.querySelector('.hour')
const minElement = document.querySelector('.min')
const secElement = document.querySelector('.sec')
const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light Mode'
    }
})

function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const mins = time.getMinutes()
    const seconds = time.getSeconds()
    const period = hours >= 12 ? 'PM' : 'AM'

    hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minElement.style.transform = `translate(-50%, -100%) rotate(${scale(mins, 0, 59, 0, 360)}deg)`
    secElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeElement.innerHTML = `${hoursForClock}:${mins < 10 ? `0${mins}` : mins}:${seconds < 10 ? `0${seconds}` : seconds} ${period}`
    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)