const slice = (array: TemplateStringsArray) => {
  const finalArray = []
  for (let i = 0; i < array.length - 1; i++) {
    finalArray.push(array[i])
  }
  return finalArray
}

const combineStringLiteral = (
  className: TemplateStringsArray,
  values: string[]
) => {
  return (
    slice(className)
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
