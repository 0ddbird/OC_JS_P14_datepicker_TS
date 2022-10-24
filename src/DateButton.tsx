import React from 'react'
import { IDateOption } from './interfaces'

interface IDateButtonProps {
  date: Date
  month: 'previous' | 'current' | 'next'
  setSelectedDate: React.Dispatch<React.SetStateAction<IDateOption>>
  setDatePickerOpen: React.Dispatch<React.SetStateAction<boolean>>
  isToday: Boolean
}

const DateButton = ({ date, month, setSelectedDate, setDatePickerOpen, isToday }: IDateButtonProps): JSX.Element => {
  function formatDateValue (dateString: string): IDateOption {
    const date = new Date(dateString)
    return {
      label: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      value: new Date(date.getFullYear(), date.getMonth(), date.getDate())
    }
  }
  function handleDatePick (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    const pickedDate = formatDateValue(e.currentTarget.value)
    setSelectedDate(pickedDate)
    setDatePickerOpen(false)
  }

  const className = isToday === true ? `cell date ${month}-month-date today` : `cell date ${month}-month-date`
  return <button
  type='button'
  className= {className}
  value={date.toString()}
  onClick={(e) => handleDatePick(e)}>
  {date.getDate()}
  </button>
}

export default DateButton
