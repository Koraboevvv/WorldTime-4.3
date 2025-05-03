const day = document.querySelector(".day")
const time = document.querySelector(".time")
const date = document.querySelector(".date")


function timeFormat() {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    minute = minute < 10 ? `0${minute}`: minute
    second   = second < 10 ? `0${second}`: second
    
    return `${hour}:${minute}:${second}`
}
console.log( timeFormat() );

time.innerHTML = timeFormat()


const dateFormat = function () {
    const date = new Date()
    let dayNUmber = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
    return `${dayNUmber}-${months[date.getMonth()]}. ${year}`
}

const weekFormat = function () {
    const date = new Date()
    const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekNames[date.getDay()]
}
// day.innerHTML = weekFormat()

setInterval(() => {
    day.innerHTML = weekFormat()
     time.innerHTML = timeFormat()
     date.innerHTML = dateFormat ()
}, 1000)


