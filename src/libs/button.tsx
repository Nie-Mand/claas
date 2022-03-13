import React from 'react'
import { generateClassName, Values } from '../utils'
import { ButtonProps } from './prop-types'

export function button(_className: TemplateStringsArray, ...values: Values) {
  return (props: ButtonProps) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      classNameThatsBeenAddedLater
    )

    return <button className={finalClassName} {...rest} />
  }
}
