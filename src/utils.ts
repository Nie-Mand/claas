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

export function generateClassName<Props>(
  className: TemplateStringsArray,
  values: Values<Props>,
  props: Props,
  classNameThatsBeenAddedLater: string = ''
) {
  const generated = values.map(value => {
    if (typeof value === 'function') {
      return value(props)
    }
    return value
  })

  const defaultClassName = combineStringLiteral(className, generated).trim()

  const finalClassName = classNameThatsBeenAddedLater
    ? `${defaultClassName} ${classNameThatsBeenAddedLater}`
    : defaultClassName

  return finalClassName
}

export type Values<Props> = (string | ((props: Props) => string))[]
