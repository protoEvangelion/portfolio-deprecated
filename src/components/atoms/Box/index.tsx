import { ISpaceProps, IWidthProps } from 'interfaces'
import { color, responsiveStyle, space, width } from 'styled-system'
import styled, { theme } from 'theme'

const align = responsiveStyle('text-align', 'align')

interface IBoxProps extends ISpaceProps, IWidthProps {
  color: string
  bg: string
}

export const Box = styled<IBoxProps, any>('div')`
  ${space} ${width} ${color} ${align};
`

Box.displayName = 'Box'

Box.defaultProps = {
  theme,
}
