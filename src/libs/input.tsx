import React from 'react'
import { generateClassName, Values } from '../utils'
import { InputProps } from './prop-types'

export function input(
  _className: TemplateStringsArray,
  ...values: Values<InputProps>
) {
  return (props: InputProps) => {
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
