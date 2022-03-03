import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { custom } from './custom'

type HProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>
export const h1 = custom<HProps>(props => <h1 {...props} />)
export const h2 = custom<HProps>(props => <h2 {...props} />)
export const h3 = custom<HProps>(props => <h3 {...props} />)
export const h4 = custom<HProps>(props => <h4 {...props} />)
export const h5 = custom<HProps>(props => <h5 {...props} />)
export const h6 = custom<HProps>(props => <h6 {...props} />)
