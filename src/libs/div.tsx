import React, { HTMLProps } from 'react'
import { generateClassName, Values } from '../utils'

type Props = HTMLProps<HTMLDivElement>
export function div(
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

    return <div className={finalClassName} {...rest} />
  }
}
