import React, { ButtonHTMLAttributes } from 'react'
import { generateClassName, Values } from '../utils'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export function button(
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

    return <button className={finalClassName} {...rest} />
  }
}
