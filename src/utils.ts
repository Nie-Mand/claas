import { slice } from 'lodash'

const combineStringLiteral = (
  className: TemplateStringsArray,
  values: string[]
) => {
  return (
    slice(className, 0, -1)
      .map((chunk, idx) => chunk.trim() + ' ' + values[idx].trim())
      .join('') + className[className.length - 1]
  )
}

export const generateClassName = (
  className: TemplateStringsArray,
  values: Values,
  classNameThatsBeenAddedLater?: string
) => {
  const defaultClassName = combineStringLiteral(className, values).trim()

  const finalClassName = classNameThatsBeenAddedLater
    ? `${defaultClassName} ${classNameThatsBeenAddedLater}`
    : defaultClassName

  return finalClassName
}

export type Values = string[]
