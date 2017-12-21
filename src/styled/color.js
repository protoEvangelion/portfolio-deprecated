import { colors } from '~/theme'

import { breaks, dec, get, media, merge } from './util'

const REG = /^color|bg$/

export default function(props) {
  const keys = Object.keys(props).filter(key => REG.test(key))
  const mediaQueries = breaks()

  return keys
    .map(key => {
      const val = props[key]
      const prop = properties[key] || key

      if (!Array.isArray(val)) {
        return {
          [prop]: cx(colors)(val),
        }
      }

      return val
        .map(cx(colors))
        .map(dec(prop))
        .map(media(mediaQueries))
        .reduce(merge, {})
    })
    .reduce(merge, {})
}

const cx = obj => n => get(obj, n + '', n)

const properties = {
  bg: 'backgroundColor',
}
