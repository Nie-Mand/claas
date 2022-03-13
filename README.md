# Claas
A React Higher Order Component library to assign **classNames** to components, looks like styled-components

## Why
I always liked to use Tailwind and wanted to extend it to use it to build as a Design System for simple and small projects. I know there is the `@apply` feature and there's `Twin`, but just wanted something simpler.

### Installation 
```bash
npm install claas
```

### Usage
```tsx
import { claas } from 'claas'

const Input = claas.input`
  bg-blue-400
  ${props => {
    if (props.type === 'password') {
      return 'border-red-400'
    }
    return ''
  }}
`

const Button = claas.button`
  text-blue-500 font-bold
`

function App() {
  return (
    <div>
      <Input type="text" />
      <Input type="password" />
      <Button>Submit</Button>
    </div>
  )
}

```


### API
- `claas.custom`
- `claas.button`
- `claas.div`
- `claas.h1`
- `claas.h2`
- `claas.h3`
- `claas.h4`
- `claas.h5`
- `claas.h6`
- `claas.input`


### Types
- `DivProps`
- `ButtonProps`
- `HeadingProps`
- `InputProps`