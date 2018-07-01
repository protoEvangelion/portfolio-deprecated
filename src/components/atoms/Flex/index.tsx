import { IFlexProps } from 'interfaces'
import {
  alignItems,
  color,
  flexDirection,
  flexWrap,
  justifyContent,
  space,
  styled,
  styledTypes,
  width,
} from 'styled'
import theme from 'theme'

export const Flex = styledTypes<IFlexProps>(styled.div)`
  display: flex;
  ${space} ${width} ${color} ${alignItems} ${justifyContent} ${flexWrap} ${flexDirection};
`

Flex.defaultProps = {
  theme,
}

Flex.displayName = 'Flex'
