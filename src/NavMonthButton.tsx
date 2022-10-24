import React from 'react'
import arrowRight from './assets/arrowRight.svg'
import arrowLeft from './assets/arrowLeft.svg'
import { IMonthOption, IYearOption } from './interfaces'

interface INavMonthButtonProps {
  direction: 'previous' | 'next'
  boundaries: {
    start: boolean
    end: boolean
  }
  selectedMonthOption: IMonthOption
  selectedYearOption: IYearOption
  setSelectedMonthOption: React.Dispatch<React.SetStateAction<IMonthOption>>
  setSelectedYearOption: React.Dispatch<React.SetStateAction<IYearOption>>

}

const NavMonthButton = ({ direction, boundaries, selectedMonthOption, selectedYearOption, setSelectedMonthOption, setSelectedYearOption }: INavMonthButtonProps): JSX.Element => {
  function handleNavButtonClick (target: string): void {
    const currentMonth = parseInt(selectedMonthOption.value)
    const currentYear = parseInt(selectedYearOption.value)
    let result
    if (target === 'prev') result = new Date(currentYear, currentMonth - 1)
    else result = new Date(currentYear, currentMonth + 1)

    const newMonthOption = {
      label: result.getMonth().toString(),
      value: result.getMonth().toString()
    }
    const newYearOption = {
      label: result.getFullYear().toString(),
      value: result.getFullYear().toString()
    }
    setSelectedMonthOption(newMonthOption)
    setSelectedYearOption(newYearOption)
  }

  if (direction === 'next' && !boundaries.end) return <button type='button' className='datepicker-options date-nav' onClick={() => handleNavButtonClick('next')}><img src={arrowRight} alt='next month'/></button>
  if (direction === 'previous' && !boundaries.start) return <button type='button' className='datepicker-options date-nav' onClick={() => handleNavButtonClick('prev')}><img src={arrowLeft} alt='previous month'/></button>
  else return <></>
}

export default NavMonthButton
