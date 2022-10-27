import React, { useEffect, useState } from 'react'
import { getDates, formatDate } from './datepicker_utils'
import DisplayedDates from './DisplayedDates'
import NavMonthButton from './NavMonthButton'
import HomeButton from './HomeButton'
import Select from 'react-ts-controlled-select'
import { IYearOption, IMonthOption, IDateOption } from './interfaces'
import { weekDays, selectMonthOptions } from './datepicker_data'
import ChildrenBlur from './ChildrenBlur'
import './dp_main.css'

export interface IDatepickerProps {
  startYear: number
  stopYear: number
  defaultYear: IMonthOption
  defaultMonth: IYearOption
  selectedDate: IDateOption
  setSelectedDate: React.Dispatch<React.SetStateAction<IDateOption>>
  isExpanded: boolean
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const Datepicker = ({ startYear, stopYear, defaultYear, defaultMonth, selectedDate, setSelectedDate, isExpanded, setIsExpanded }: IDatepickerProps): JSX.Element => {
  function getYearOptions (startYear: number, stopYear: number): IYearOption[] {
    const yearRange = []
    for (let i = startYear; i <= stopYear; i++) yearRange.push({ label: `${i}`, value: `${i}` })
    return yearRange
  }
  const yearOptions = getYearOptions(startYear, stopYear)
  const initialDatesArray = getDates(defaultYear, defaultMonth)
  const [selectedMonthOption, setSelectedMonthOption] = useState<IMonthOption>(defaultMonth)
  const [selectedYearOption, setSelectedYearOption] = useState<IYearOption>(defaultYear)
  const [dateRanges, setDateRanges] = useState(initialDatesArray)
  const yearBoundaries = {
    start: parseInt(selectedYearOption.value) === startYear && parseInt(selectedMonthOption.value) === 0,
    end: parseInt(selectedYearOption.value) === stopYear && parseInt(selectedMonthOption.value) === 11
  }

  useEffect(() => {
    const newRange = getDates(selectedYearOption, selectedMonthOption)
    setDateRanges(newRange)
  }, [selectedMonthOption, selectedYearOption])

  return (
    <ChildrenBlur onBlur={() => setIsExpanded(false)} className={`group${isExpanded ? '--focused' : ''}`}>
      <div className='datepicker'>
        <input className='datepicker-input' type='text' readOnly value={`${formatDate(selectedDate.value)}`} onClick={() => setIsExpanded(true)}></input>
            <div className={`datepicker-panel${isExpanded ? '--focused' : ''}`} tabIndex={0}>
              <div className='datepicker-options'>
                <NavMonthButton
                direction={'previous'}
                boundaries={yearBoundaries}
                selectedMonthOption={selectedMonthOption}
                selectedYearOption={selectedYearOption}
                setSelectedMonthOption={setSelectedMonthOption}
                setSelectedYearOption={setSelectedYearOption}/>
                <HomeButton
                setSelectedMonthOption={setSelectedMonthOption}
                setSelectedYearOption={setSelectedYearOption}/>
                <Select
                options={selectMonthOptions}
                selected={selectedMonthOption}
                setSelected={setSelectedMonthOption}/>
                <Select
                options={yearOptions}
                selected={selectedYearOption}
                setSelected={setSelectedYearOption}/>
                <NavMonthButton
                direction={'next'}
                boundaries={yearBoundaries}
                selectedMonthOption={selectedMonthOption}
                selectedYearOption={selectedYearOption}
                setSelectedMonthOption={setSelectedMonthOption}
                setSelectedYearOption={setSelectedYearOption}/>
              </div>
              <div className='datepicker-weekdays'>
                { weekDays.map(weekDay => <div className='cell week-day' key={weekDay}>{weekDay}</div>) }
              </div>
              <DisplayedDates datesInRange={dateRanges} setSelectedDate={setSelectedDate} setDatePickerOpen={setIsExpanded}/>
            </div>
      </div>
    </ChildrenBlur>
  )
}

export default Datepicker
