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
    const todaysYear = today.getFullYear()
    const todaysMonth = today.getMonth()
    const result = new Date(todaysYear, todaysMonth)

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

  return <button type='button' className='datepicker-options date-nav' onClick={handleNavButtonClick}><img src={home} alt='today'/></button>
}

export default HomeButton
