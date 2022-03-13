import React from 'react'
import { generateClassName, Values } from '../utils'
import { ButtonProps } from './prop-types'

export function button(
  _className: TemplateStringsArray,
  ...values: Values<ButtonProps>
) {
  return (props: ButtonProps) => {
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
