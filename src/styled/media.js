// Modified from https://github.com/morajabi/styled-media-query/

import { queries } from 'theme'
import { css } from 'styled-components'

function getSizeFromBreakpoint(breakpointValue, breakpoints = {}) {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue]
  } else if (parseInt(breakpointValue)) {
    return breakpointValue
  } else {
    console.error(
      'styled-media-query: No valid breakpoint or size specified for media.',
    )
    return '0'
  }
}

/**
 * Media query generator
 * @param {Object} [queries] breakpoints - Map labels to breakpoint sizes
 * @return {Object} - Media generators for each breakpoint
 */
export function generateMedia(breakpoints = queries) {
  const lessThan = breakpoint => (...args) => css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
      ${css(...args)};
    }
  `

  const greaterThan = breakpoint => (...args) => css`
    @media (min-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
      ${css(...args)};
    }
  `

  const between = (firstBreakpoint, secondBreakpoint) => (...args) => css`
    @media (min-width: ${getSizeFromBreakpoint(
        firstBreakpoint,
        breakpoints,
      )}) and (max-width: ${getSizeFromBreakpoint(
        secondBreakpoint,
        breakpoints,
      )}) {
      ${css(...args)};
    }
  `

  const oldStyle = Object.keys(breakpoints).reduce(
    (acc, label) => {
      const size = breakpoints[label]

      acc.to[label] = (...args) => {
        console.warn(
          `styled-media-query: Use media.lessThan('${label}') instead of old media.to.${label} (Probably we'll deprecate it)`,
        )
        return css`
          @media (max-width: ${size}) {
            ${css(...args)};
          }
        `
      }

      acc.from[label] = (...args) => {
        console.warn(
          `styled-media-query: Use media.greaterThan('${label}') instead of old media.from.${label} (Probably we'll deprecate it)`,
        )
        return css`
          @media (min-width: ${size}) {
            ${css(...args)};
          }
        `
      }

      return acc
    },
    { to: {}, from: {} },
  )

  return Object.assign(
    {
      lessThan,
      greaterThan,
      between,
    },
    oldStyle,
  )
}

/**
 * Usage: styled.div` ${media.from.medium`background: #000;`} `;
 * With this code, background for small and medium sizes will be `default` and for more than medium, will be `#000`
 */

/**
 * Converts breakpoint units in px to rem or em
 * @param {Object} breakpoints - an object containing breakpoint names as keys and the width as value
 * @param {number} [16] ratio - size of 1 rem in px. What is your main font-size in px?
 * @param {'rem' | 'em'} unit
 */
function pxToEmOrRem(breakpoints, ratio = 16, unit) {
  const newBreakpoints = {}

  for (let key in breakpoints) {
    const point = breakpoints[key]

    if (String(point).includes('px')) {
      newBreakpoints[key] = +(parseInt(point) / ratio) + unit
      continue
    }

    newBreakpoints[key] = point
  }

  return newBreakpoints
}

/**
 * Converts breakpoint units in px to em
 * @param {Object} breakpoints - an object containing breakpoint names as keys and the width as value
 * @param {number} [16] ratio - size of 1em in px. What is your main font-size in px?
 */
function pxToEm(breakpoints, ratio = 16) {
  return pxToEmOrRem(breakpoints, ratio, 'em')
}

/**
 * Converts breakpoint units in px to rem
 * @param {Object} breakpoints - an object containing breakpoint names as keys and the width as value
 * @param {number} [16] ratio - size of 1rem in px. What is your main font-size in px?
 */
function pxToRem(breakpoints, ratio = 16) {
  return pxToEmOrRem(breakpoints, ratio, 'rem')
}

/**
 * Media object with default breakpoints
 * @return {object} - Media generators for each size
 */
export default generateMedia()
