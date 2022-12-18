import { TimeOfDay, MessageOfTheDay, monthsOfYear } from "../models/time-of-the-day.js"
import { setBackgroundImage,steClockBoxColor } from "./pageStyle.js"

const currenteDate = document.querySelector('#clock__header')
const timeBox = document.querySelectorAll('.clock__box')
const hourText = document.querySelector('#hour')
const minutesText = document.querySelector('#minutes')
const secondsText = document.querySelector('#seconds')

function configureClockVariables() {
  let currentDate = new Date()
  const currentHour = currentDate.getHours()
  const currentMinute = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes()
  const currentSecond = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds()

  return { currentDate, currentHour, currentMinute, currentSecond }
}

function configureClockTimes() {
  hourText.innerText = configureClockVariables().currentHour
  minutesText.innerText = configureClockVariables().currentMinute
  secondsText.innerText = configureClockVariables().currentSecond
  currenteDate.innerText = formatCurrenDateString()
}

function formatCurrenDateString(){
  const currentDate = configureClockVariables().currentDate
  let formatDate = currentDate.getDate() + " de " + monthsOfYear[(currentDate.getMonth())] + " de " + currentDate.getFullYear()

  return formatDate
}

function checkTimeOfDay() {
  var time = '';
  if (configureClockVariables().currentHour < TimeOfDay.END_OF_THE_DAY) {
    time = MessageOfTheDay.morning
  } else if (configureClockVariables().currentHour < TimeOfDay.NIGHTS_START) {
    time = MessageOfTheDay.afternoon  
  } else {
    time = MessageOfTheDay.night
  }
  
  setStylePage(time)
}

function setStylePage(time){
  document.body.style.backgroundImage = setBackgroundImage(time)
  timeBox.forEach(element => element.style.backgroundColor = steClockBoxColor(time))
}

setInterval(configureClockTimes(), 1000)
setInterval(checkTimeOfDay(), 1000)
