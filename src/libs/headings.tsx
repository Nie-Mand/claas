import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { generateClassName, Values } from '../utils'
import { HeadingProps } from './prop-types'

export function h1(_className: TemplateStringsArray, ...values: Values) {
  return (props: HeadingProps) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      classNameThatsBeenAddedLater
    )

    return <h1 className={finalClassName} {...rest} />
  }
}

export function h2(_className: TemplateStringsArray, ...values: Values) {
  return (props: HeadingProps) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      classNameThatsBeenAddedLater
    )

    return <h2 className={finalClassName} {...rest} />
  }
}

export function h3(_className: TemplateStringsArray, ...values: Values) {
  return (props: HeadingProps) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      classNameThatsBeenAddedLater
    )

    return <h3 className={finalClassName} {...rest} />
  }
}

export function h4(_className: TemplateStringsArray, ...values: Values) {
  return (props: HeadingProps) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      classNameThatsBeenAddedLater
    )

    return <h4 className={finalClassName} {...rest} />
  }
}

export function h5(_className: TemplateStringsArray, ...values: Values) {
  return (props: HeadingProps) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      classNameThatsBeenAddedLater
    )

    return <h5 className={finalClassName} {...rest} />
  }
}

export function h6(_className: TemplateStringsArray, ...values: Values) {
  return (props: HeadingProps) => {
    const { className: classNameThatsBeenAddedLater, ...rest } = props

    const finalClassName = generateClassName(
      _className,
      values,
      classNameThatsBeenAddedLater
    )

    return <h6 className={finalClassName} {...rest} />
  }
}
