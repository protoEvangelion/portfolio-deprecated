import { IColorProps, ISpaceProps, IWidthProps } from 'interfaces'
import { alignItems, color, flexDirection, flexWrap, justifyContent, space, width } from 'styled-system'
import styled, { theme, styledType } from 'theme'

import * as React from 'react'

interface IFlexProps extends IColorProps, ISpaceProps, IWidthProps {
  alignItems?: string | string[]
  justifyContent?: string | string[]
  flexDirection?: string | string[]
  flexWrap?: string | string[]
}

export const Flex = styledType<IFlexProps>(styled.div)`
  display: flex;
  ${space} ${width} ${color} ${alignItems} ${justifyContent} ${flexWrap} ${flexDirection};
`

export const Thing = styled.div<{ go: string }>`
  display: flex;
`

export const t = () => <Flex go="hello" alk="space-around" width={1} />

Flex.defaultProps = {
  theme,
}

Flex.displayName = 'Flex'
