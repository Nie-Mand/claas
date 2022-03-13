import React, { ComponentType } from 'react'
import { generateClassName, Values } from '../utils'

export function custom<T>(Component: ComponentType<T>) {
  return (_className: TemplateStringsArray, ...values: Values<T>) => {
    const ReturnedComponent = (props: T) => {
      const { className, ...rest } = props as T & { className?: string }

      const classNameThatsBeenAddedLater = ''
      const finalClassName = generateClassName(
        _className,
        values,
        props,
        classNameThatsBeenAddedLater
      )

      return <Component className={finalClassName} {...(rest as T)} />
    }
    return ReturnedComponent
  }
}
