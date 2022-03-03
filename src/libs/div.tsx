import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { generateClassName } from '../utils'

export function div(_className: TemplateStringsArray, ...values: string[]) {
  return (
    props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  ) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      classNameThatsBeenAddedLater
    )

    return <div className={finalClassName} {...rest} />
  }
}
