import React from 'react'
import { generateClassName, Values } from '../utils'
import { DivProps } from './prop-types'

export function div(
  _className: TemplateStringsArray,
  ...values: Values<DivProps>
) {
  return (props: DivProps) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      props,
      classNameThatsBeenAddedLater
    )

    return <div className={finalClassName} {...rest} />
  }
}
