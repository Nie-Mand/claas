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
import { claas } from '@Nie-Mand/claas'

const Button = claas.button`bg-blue-400`

const DangerButton = claas.custom(Button)`bg-red-400`

function App() {
    return (
        <div>
            <Button className="text-white">
                Hello
            </Button>
            <DangerButton>  
                Danger
            </DangerButton>
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
