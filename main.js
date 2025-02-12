
// SHOW LIVE TIME FOR USER
const currentTime = document.getElementById("current-time")
const showCurrentTime = () => {

    dayjs.extend(dayjs_plugin_localizedFormat);
    currentTime.innerText = `${dayjs().format('LTS')}` 
}

setInterval(showCurrentTime, 1000)

showCurrentTime()

// SHOW USER TIMEZONE LOCATION
const userLocation = document.getElementById("location")
const showLocation = () => {

    dayjs.extend(dayjs_plugin_timezone)
    userLocation.innerText = `Current time in ${dayjs.tz.guess()}`
}
showLocation();

// SHOW USER DATE
const fullDate = document.getElementById("full-date")
const showFullDate = () => {
    
    dayjs.extend(dayjs_plugin_localizedFormat);
    fullDate.innerText = `${dayjs().format('dddd, MMMM D, YYYY')}`
}
showFullDate()



