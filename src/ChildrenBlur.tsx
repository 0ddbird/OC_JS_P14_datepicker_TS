import React, { ReactNode, useCallback } from 'react'

interface IChildrenBlur {
  children: ReactNode
  onBlur: () => void
  className: string
}

const ChildrenBlur = ({ children, onBlur, className }: IChildrenBlur): JSX.Element => {
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLDivElement, Element>) => {
      const currentTarget = e.currentTarget
      requestAnimationFrame(() => {
        if (!currentTarget.contains(document.activeElement)) onBlur()
      })
    },
    [onBlur]
  )

  return (
    <div onBlur={(e) => handleBlur(e)} className={className}>
      {children}
    </div>
  )
}

export default ChildrenBlur
