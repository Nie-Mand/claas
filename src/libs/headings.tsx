import React, { HTMLProps } from 'react'
import { generateClassName, Values } from '../utils'

type Props = HTMLProps<HTMLHeadingElement>

export function h1(_className: TemplateStringsArray, ...values: Values<Props>) {
  return (props: Props) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      props,
      classNameThatsBeenAddedLater
    )

    return <h1 className={finalClassName} {...rest} />
  }
}

export function h2(_className: TemplateStringsArray, ...values: Values<Props>) {
  return (props: Props) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      props,
      classNameThatsBeenAddedLater
    )

    return <h2 className={finalClassName} {...rest} />
  }
}

export function h3(_className: TemplateStringsArray, ...values: Values<Props>) {
  return (props: Props) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      props,
      classNameThatsBeenAddedLater
    )

    return <h3 className={finalClassName} {...rest} />
  }
}

export function h4(_className: TemplateStringsArray, ...values: Values<Props>) {
  return (props: Props) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      props,
      classNameThatsBeenAddedLater
    )

    return <h4 className={finalClassName} {...rest} />
  }
}

export function h5(_className: TemplateStringsArray, ...values: Values<Props>) {
  return (props: Props) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      props,
      classNameThatsBeenAddedLater
    )

    return <h5 className={finalClassName} {...rest} />
  }
}

export function h6(_className: TemplateStringsArray, ...values: Values<Props>) {
  return (props: Props) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      props,
      classNameThatsBeenAddedLater
    )

    return <h6 className={finalClassName} {...rest} />
  }
}
