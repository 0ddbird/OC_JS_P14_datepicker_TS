import { IDatesInRange, IMonthOption, IYearOption } from './interfaces'

function addDays (date: Date, days: number): Date {
  date.setDate(date.getDate() + days)
  return date
}

function substractDays (date: Date, days: number): Date {
  date.setDate(date.getDate() - days)
  return date
}

function getCurrentMonthDays (startDate: Date, stopDate: Date): Date[] {
  const dateArray = []
  let currentStartDate = new Date(startDate.valueOf())
  while (currentStartDate <= stopDate) {
    dateArray.push(new Date(currentStartDate))
    currentStartDate = addDays(currentStartDate, 1)
  }
  return dateArray
}

function getPreviousMonthDays (startDate: Date): Date[] {
  const dateArray = []

  const currentStartDate = new Date(startDate.valueOf())
  let previousMonthLastDate = substractDays(currentStartDate, 1)

  for (let i = previousMonthLastDate.getDay(); i >= 0; i--) {
    dateArray.push(new Date(previousMonthLastDate))
    if (new Date(previousMonthLastDate).getDay() === 0) {
      dateArray.reverse()
      break
    }
    previousMonthLastDate = substractDays(previousMonthLastDate, 1)
  }
  return dateArray
}

function getNextMonthDays (stopDate: Date): Date[] {
  const dateArray = []
  let currentStopDate = addDays(stopDate, 1)

  for (let i = currentStopDate.getDay(); i <= 6; i++) {
    dateArray.push(new Date(currentStopDate))
    currentStopDate = addDays(currentStopDate, 1)
  }
  return dateArray
}

function getDates (year: IYearOption, month: IMonthOption): IDatesInRange {
  const intYear = parseInt(year.value)
  const intMonth = parseInt(month.value)
  // Months are indexed from 0
  let previousMonthDays, nextMonthDays
  const startDate = new Date(intYear, intMonth, 1)
  const stopDate = new Date(intYear, intMonth + 1, 0)
  if (startDate.getDay() !== 0) previousMonthDays = getPreviousMonthDays(startDate)
  const currentMonthDays = getCurrentMonthDays(startDate, stopDate)
  if (stopDate.getDay() !== 6) nextMonthDays = getNextMonthDays(stopDate)

  const result = {
    previousMonth: previousMonthDays,
    currentMonth: currentMonthDays,
    nextMonth: nextMonthDays
  }
  return result
}

const formatDate = (date: Date): string => {
  const formatedDate = `${date.getDate()}`.length < 2 ? `0${date.getDate()}` : `${date.getDate()}`
  const formatedYear = `${date.getFullYear()}`
  const formatedMonth = `${date.getMonth() + 1}`.length < 2 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`
  return `${formatedDate}/${formatedMonth}/${formatedYear}`
}

function getYearOptions (startYear: number, stopYear: number): IYearOption[] {
  const yearRange = []
  for (let i = startYear; i <= stopYear; i++) yearRange.push({ label: `${i}`, value: `${i}` })
  return yearRange
}

export { getDates, formatDate, getYearOptions }
