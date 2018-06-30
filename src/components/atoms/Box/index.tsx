import { color, space, width } from 'styled-system'
import styled, { theme } from 'theme'

interface IBox {
  color: string
  bg: string
  width: number | string[]
  w: number | string[]
  /** Margin */
  m: number | string[]
  mt: number | string[]
  mr: number | string[]
  mb: number | string[]
  ml: number | string[]
  mx: number | string[]
  my: number | string[]
  /** Padding */
  p: number | string[]
  pt: number | string[]
  pr: number | string[]
  pb: number | string[]
  pl: number | string[]
  px: number | string[]
  py: number | string[]
}

export const Box = styled<IBox, any>('div')`
  ${space} ${width} ${color};
`

Box.displayName = 'Box'

Box.defaultProps = {
  theme,
}
