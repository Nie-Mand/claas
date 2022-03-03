import React, { ComponentType } from 'react'
import { generateClassName, Values } from '../utils'

export function custom<T>(Component: ComponentType<T>) {
  return (_className: TemplateStringsArray, ...values: Values) =>
    (props: T) => {
      const finalClassName = generateClassName(_className, values)
      return <Component className={finalClassName} {...props} />
    }
}
