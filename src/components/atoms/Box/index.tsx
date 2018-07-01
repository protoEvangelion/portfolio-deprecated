import { IBoxProps } from 'interfaces'
import { color, responsiveStyle, space, width } from 'styled-system'
import theme, { styled, styledTypes } from 'theme'

const align = responsiveStyle('text-align', 'align')

export const Box = styledTypes<IBoxProps>(styled.div)`
  ${space} ${width} ${color} ${align};
`

Box.displayName = 'Box'

Box.defaultProps = {
  theme,
}
