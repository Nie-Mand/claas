import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import { custom } from './custom'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export const div = custom<Props>(props => <div {...props} />)
