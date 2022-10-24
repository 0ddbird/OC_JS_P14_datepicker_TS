import React, { useState } from 'react'
import Datepicker from './Datepicker'
import { IDateOption } from './interfaces'

function App (): JSX.Element {
  const datepickerOptions = {
    startYear: 1950,
    stopYear: 2050,
    defaultYear: { label: '1980', value: '1980' },
    defaultMonth: { label: 'January', value: '0' }
  }

  const defaultDate = (): IDateOption => {
    const date = new Date()
    const dateName = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    return {
      label: dateName,
      value: date
    }
  }

  const [selectedDate, setSelectedDate] = useState(defaultDate())

  return (
    <>
      <Datepicker
      startYear={datepickerOptions.startYear}
      stopYear={datepickerOptions.stopYear}
      defaultYear={datepickerOptions.defaultYear}
      defaultMonth={datepickerOptions.defaultMonth}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}/>
    </>
  )
}

export default App
