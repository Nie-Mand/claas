import React, { ComponentType, DetailedHTMLProps, HTMLAttributes } from 'react'
import { generateClassName } from '../utils'

export function custom<T>(Component: ComponentType<T>) {
  return (_className: TemplateStringsArray, ...values: string[]) =>
    (props: T) => {
      const finalClassName = generateClassName(_className, values)

      return <Component className={finalClassName} {...props} />
    }
}
