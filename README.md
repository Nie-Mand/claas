# Claas
A React Higher Order Component library to assign **classNames** to components, looks like styled-components

## Motivation
I always liked to use Tailwind and wanted to extend it to use it to build as a Design System for simple and small projects. I know there is the `@apply` feature and there's `Twin`, but just wanted something simpler.

## Introduction
Simply, **Claas** is just a HOC that adds the provided className to the component. just like `styled-components`. There is also default components to be used like `claas.div` and `claas.button`. to be added more in the future. and of course there is `claas.custom` that will accept a component and continue the process.

### Usage
```tsx
import claas from 'claas'

const Button = claas.button`bg-blue-400 text-white`

function App() {
    return (
        <div>
            <Button>Hello</Button>
        </div>
    )
}

```

### Progress
currently, there is `div`, `button` and `custom`, to add more in the future.