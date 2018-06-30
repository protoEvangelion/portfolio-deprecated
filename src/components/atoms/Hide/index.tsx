import styled, { theme } from 'theme'
import { Box } from '../Box'

const getMaxWidth = em => em - 0.01

const breakpoints = props => ({
  xs: `@media screen and (max-width: ${getMaxWidth(props.theme.breakpoints[0])}em)`,
  sm: `@media screen and (min-width: ${props.theme.breakpoints[0]}em) and (max-width: ${getMaxWidth(
    props.theme.breakpoints[1],
  )}em)`,
  md: `@media screen and (min-width: ${props.theme.breakpoints[1]}em) and (max-width: ${getMaxWidth(
    props.theme.breakpoints[2],
  )}em)`,
  lg: `@media screen and (min-width: ${props.theme.breakpoints[2]}em) and (max-width: ${getMaxWidth(
    props.theme.breakpoints[3],
  )}em)`,
  xl: `@media screen and (min-width: ${props.theme.breakpoints[3]}em)`,
})

const hidden = key => props =>
  props[key]
    ? {
        [breakpoints(props)[key]]: {
          display: 'none',
        },
      }
    : null

interface IHide {
  xs: boolean
  sm: boolean
  md: boolean
  lg: boolean
  xl: boolean
}

export const Hide = styled<IHide, any>('Box')`
  ${hidden('xs')} ${hidden('sm')} ${hidden('md')} ${hidden('lg')} ${hidden('xl')};
`

Hide.defaultProps = {
  theme,
}

Hide.displayName = 'Hide'
