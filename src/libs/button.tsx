import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { generateClassName, Values } from '../utils'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function button(_className: TemplateStringsArray, ...values: Values) {
  return (props: Props) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      classNameThatsBeenAddedLater
    )

    return <button className={finalClassName} {...rest} />
  }
}
