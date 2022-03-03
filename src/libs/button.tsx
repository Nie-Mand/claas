import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { custom } from './custom'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
export const button = custom<Props>(props => <button {...props} />)
