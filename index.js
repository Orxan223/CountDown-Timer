const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const birthday = "22 April 2023";

function countDown() {
    const birthdayDate = new Date(birthday)
    const currentDate = new Date()

    const totalSecond = (birthdayDate - currentDate) / 1000

    const days = Math.floor(totalSecond / 3600 / 24)
    const hours = Math.floor(totalSecond / 3600) % 24
    const mins = Math.floor(totalSecond / 60) % 60
    const seconds = Math.floor(totalSecond % 60)



    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`
    } else {
        return time
    }
}



countDown();

setInterval(countDown, 1000);