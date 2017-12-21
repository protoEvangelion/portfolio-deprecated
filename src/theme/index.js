// This theme file is based on the styled-components styled system
// https://github.com/jxnblk/styled-system

import palx from 'palx' // Color palette library

// https://github.com/jxnblk/styled-system#breakpoints
// Units are in ems below
export const breakpoints = [32, 48, 64, 80]

const units = 'em'

export const queries = {
  xs: `${breakpoints[0]}${units}`,
  sm: `${breakpoints[1]}${units}`,
  md: `${breakpoints[2]}${units}`,
  lg: `${breakpoints[3]}${units}`,
}

export const space = [0, 4, 8, 16, 32, 64, 128]

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72, 96]

export const regular = 400
export const bold = 600

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  regular,
  bold,
}

export const radii = [0, 2, 5]
export const radius = '5px'

export const font = `-apple-system, BlinkMacSystemFont, sans-serif`

export const monospace = '"SF Mono", "Roboto Mono", Menlo, monospace'

const palette = palx('#07c')

const flattened = Object.keys(palette).reduce((a, key) => {
  const value = palette[key]
  if (Array.isArray(value)) {
    a[key] = value[5]
    value.forEach((val, i) => {
      a[key + i] = val
    })
  } else {
    a[key] = value
  }
  return a
}, {})

export const colors = Object.assign({}, flattened, {
  primary: 'rgb(23, 195, 169)',
  active: 'rgb(23, 195, 169)',
  secondary: 'rgb(0, 125, 125)',
  accent1: 'rgb(155, 155, 155)',
  accent2: 'rgb(250, 175, 0)',
  accent3: 'rgb(176, 69, 69)',
  black: 'rgb(33, 33, 33)',
  white: 'rgb(255, 255, 255)',
  linkedin: 'rgb(0, 119, 181)',
  facebook: 'rgb(59, 89, 152)',
  github: 'rgb(0, 0, 0)',
  google: 'rgb(221, 75, 57)',
  twitter: 'rgb(85, 172, 238)',
  transparent0: 'rgba(0, 0, 0, 0)',
  transparent1: 'rgba(0, 0, 0, 0.1)',
  transparent2: 'rgba(0, 0, 0, 0.2)',
  transparent4: 'rgba(0, 0, 0, 0.4)',
  transparent6: 'rgba(0, 0, 0, 0.6)',
  transparent8: 'rgba(0, 0, 0, 0.8)',
})

const theme = {
  bold,
  breakpoints,
  colors,
  font,
  fontSizes,
  fontWeights,
  monospace,
  radii,
  radius,
  regular,
  space,
}

export default theme
