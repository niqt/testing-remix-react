import React from 'react'

type TextFieldProps = {
  text: string
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField = ({
  text,
  handler,
  ...restProp
}: TextFieldProps & React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input value={text} onChange={handler} {...restProp} />
}
