import React, { InputHTMLAttributes } from 'react'
import { generateClassName, Values } from '../utils'

type Props = InputHTMLAttributes<HTMLInputElement>

export function input(
  _className: TemplateStringsArray,
  ...values: Values<Props>
) {
  return (props: Props) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      props,
      classNameThatsBeenAddedLater
    )

    return <input className={finalClassName} {...rest} />
  }
}
