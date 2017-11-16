import PropTypes from 'prop-types'
import styled from 'styled-components'
import { breakpoints } from 'theme'

import Box from '../Box'

const bps = () => ({
  xs: `@media screen and (max-width: ${breakpoints[0]}em)`,
  sm: `@media screen and (min-width: ${breakpoints[0]}em) and (max-width: ${
    breakpoints[1]
  }em)`,
  md: `@media screen and (min-width: ${breakpoints[1]}em) and (max-width: ${
    breakpoints[2]
  }em)`,
  lg: `@media screen and (min-width: ${breakpoints[2]}em) and (max-width: ${
    breakpoints[3]
  }em)`,
  xl: `@media screen and (min-width: ${breakpoints[3]}em)`,
})

const hidden = key => props =>
  props[key]
    ? {
        [bps(props)[key]]: {
          display: 'none',
        },
      }
    : null

const Hide = styled(Box)`
  ${hidden('xs')} ${hidden('sm')} ${hidden('md')} ${hidden('lg')} ${hidden(
      'xl',
    )};
`

Hide.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
}

Hide.displayName = 'Hide'

export default Hide
