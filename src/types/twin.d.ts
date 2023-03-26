import 'twin.macro'
import type { CSSProp, css as cssImport } from 'styled-components'
import type styledImport from 'styled-components'

declare module 'twin.macro' {
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp
    tw?: string
  }
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp
    tw?: string
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string | Element
    }
  }
}
