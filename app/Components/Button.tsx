import React from 'react'

type ButtonProps = {
  handler: (e: React.MouseEvent) => void
}

function Button({
  handler,
  children,
  ...restProp
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...restProp} onClick={handler}>
      {children}
    </button>
  )
}

export default Button
