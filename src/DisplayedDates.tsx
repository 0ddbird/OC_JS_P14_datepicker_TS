import React from 'react'
import DateButton from './DateButton'
import { IDateOption, IDatesInRange } from './interfaces'

interface IDisplayedDatesProps {
  datesInRange: IDatesInRange
  setSelectedDate: React.Dispatch<React.SetStateAction<IDateOption>>
  setDatePickerOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const DisplayedDates = ({ datesInRange, setSelectedDate, setDatePickerOpen }: IDisplayedDatesProps): JSX.Element => {
  function createDateButton (date: Date, month: 'previous' | 'current' | 'next'): JSX.Element {
    const today = new Date()
    const simplifiedTodaysDate = new Date(`${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`)
    const simplifiedCurrentDate = new Date(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
    const isToday = simplifiedCurrentDate.getTime() === simplifiedTodaysDate.getTime()
    return <DateButton date={date} key={date.toString()} month={month} isToday={isToday} setSelectedDate={setSelectedDate} setDatePickerOpen={setDatePickerOpen}/>
  }

  return (
    <div className='date-picker__dates'>
      { datesInRange.previousMonth?.map(date => createDateButton(date, 'previous'))}
      { datesInRange.currentMonth.map(date => createDateButton(date, 'current'))}
      { datesInRange.nextMonth?.map(date => createDateButton(date, 'next'))}
    </div>

  )
}

export default DisplayedDates
