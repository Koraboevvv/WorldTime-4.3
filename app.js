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


    const phoneNumber = document.querySelector(".phone-number")

    const numbers = [
        '+998 97 606 41 32',
        '+998 90 720 42 15',
        '+998 88 925 01 50',
        '+998 90 924 46 46',
        '+998 99 929 94 9   4',
        '+998 88 818 88 88',
        '+998 95 125 25 25',
        '+998 95 574 74 74',
        '+998 98 996 51 78',
        '+998 90 009 90 00',
        '+998 99 291 69 05',
        '+998 90 743 21 50',
        '+998 90 577 57 55',
        '+998 90 000 01 00',
        '+998 88 716 16 16'
    ]


function randomPhoneNumber () {
    const interval = setInterval(()=>{
        let randomNumber = Math.floor( Math.random() * numbers.length) 
        phoneNumber.innerHTML = numbers[randomNumber]
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
    },2500 )
}
