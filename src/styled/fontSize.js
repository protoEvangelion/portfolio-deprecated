import { fontSizes } from '~/theme'

import { breaks, dec, is, media, merge, num, px } from './util'

export default function(props) {
  const n = is(props.fontSize) ? props.fontSize : props.fontSize || props.f
  if (!is(n)) return null

  if (!Array.isArray(n)) {
    return {
      fontSize: fx(fontSizes)(n),
    }
  }

  const bp = breaks(props)

  return n
    .map(fx(fontSizes))
    .map(dec('fontSize'))
    .map(media(bp))
    .reduce(merge, {})
}

const fx = scale => n => (num(n) ? px(scale[n] || n) : n)
