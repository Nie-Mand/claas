import React, { ComponentType, DetailedHTMLProps, HTMLAttributes } from 'react'
import { generateClassName } from './utils'

export function button(_className: TemplateStringsArray, ...values: string[]) {
  return (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  ) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      classNameThatsBeenAddedLater
    )

    return <button className={finalClassName} {...rest} />
  }
}
