import React from 'react'
import home from './assets/home.svg'
import { IYearOption, IMonthOption } from './interfaces'

interface IHomeButtonProps {
  setSelectedMonthOption: React.Dispatch<React.SetStateAction<IMonthOption>>
  setSelectedYearOption: React.Dispatch<React.SetStateAction<IYearOption>>
}

const HomeButton = ({ setSelectedMonthOption, setSelectedYearOption }: IHomeButtonProps): JSX.Element => {
  function handleNavButtonClick (): void {
    const today = new Date()
    const result = new Date(today.getFullYear(), today.getMonth())
    const month = `${result.getMonth()}`
    const year = `${result.getFullYear()}`
    const newMonthOption = {
      label: month,
      value: month
    }
    const newYearOption = {
      label: year,
      value: year
    }
    setSelectedMonthOption(newMonthOption)
    setSelectedYearOption(newYearOption)
  }

  return <button type='button' className='datepicker-options date-nav' onClick={handleNavButtonClick}><img src={home} alt='today'/></button>
}

export default HomeButton
