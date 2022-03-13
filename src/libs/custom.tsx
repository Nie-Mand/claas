import React, { ComponentType } from 'react'
import { generateClassName, Values } from '../utils'

type HasClassName = { className?: string }

export function custom<T>(Component: ComponentType<T>) {
  return (_className: TemplateStringsArray, ...values: Values) =>
    ({
      className: classNameThatsBeenAddedLater,
      ...rest
    }: T & HasClassName) => {
      const finalClassName = generateClassName(
        _className,
        values,
        classNameThatsBeenAddedLater
      )
      return <Component className={finalClassName} {...(rest as T)} />
    }
}
