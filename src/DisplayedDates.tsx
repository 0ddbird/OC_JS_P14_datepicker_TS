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
    if (simplifiedCurrentDate.getTime() === simplifiedTodaysDate.getTime()) {
      return <DateButton date={date} key={date.toString()} month={month} isToday={true} setSelectedDate={setSelectedDate} setDatePickerOpen={setDatePickerOpen}/>
    } else {
      return <DateButton date={date} key={date.toString()} month={month} isToday={false} setSelectedDate={setSelectedDate} setDatePickerOpen={setDatePickerOpen}/>
    }
  }

  return (
    <div className='date-picker__dates'>
      { datesInRange.previousMonth?.map(date => { return createDateButton(date, 'previous') })}
      { datesInRange.currentMonth.map(date => { return createDateButton(date, 'current') })}
      { datesInRange.nextMonth?.map(date => { return createDateButton(date, 'next') })}
    </div>

  )
}

export default DisplayedDates
