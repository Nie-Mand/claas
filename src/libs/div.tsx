import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { generateClassName, Values } from '../utils'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function div(_className: TemplateStringsArray, ...values: Values) {
  return (props: Props) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      classNameThatsBeenAddedLater
    )

    return <div className={finalClassName} {...rest} />
  }
}
