import { space } from '~/theme'

import { arr, breaks, dec, media, merge, neg, num, px } from './util'

const REG = /^[mp][trblxy]?$/

export default function(props) {
  const keys = Object.keys(props)
    .filter(key => REG.test(key))
    .sort()

  const mediaQueries = breaks()

  return keys
    .map(key => {
      const val = props[key]
      const properties = getProperties(key)

      if (!Array.isArray(val)) {
        return properties.reduce(
          (a, b) =>
            Object.assign(a, {
              [b]: mx(space)(val),
            }),
          {},
        )
      }

      return arr(val)
        .map(mx(space))
        .map(dec(properties))
        .map(media(mediaQueries))
        .reduce(merge, {})
    })
    .reduce(merge, {})
}

const mx = scale => n => {
  if (!num(n)) {
    return n
  }

  const value = scale[Math.abs(n)] || Math.abs(n)
  if (!num(value)) {
    return value
  }

  return px(value * (neg(n) ? -1 : 1))
}

const getProperties = key => {
  const [a, b] = key.split('')
  const prop = properties[a]
  const dirs = directions[b] || ['']
  return dirs.map(dir => prop + dir)
}

const properties = {
  m: 'margin',
  p: 'padding',
}

const directions = {
  t: ['Top'],
  r: ['Right'],
  b: ['Bottom'],
  l: ['Left'],
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom'],
}
