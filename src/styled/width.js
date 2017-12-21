import { breaks, dec, is, media, merge, num, px } from './util'

const wx = n => (!num(n) || n > 1 ? px(n) : n * 100 + '%')

export default function(props) {
  const n = is(props.width) ? props.width : props.width || props.w

  if (!is(n)) return null

  if (!Array.isArray(n)) {
    return {
      width: wx(n),
    }
  }

  const breakpoints = breaks()

  return n
    .map(wx)
    .map(dec('width'))
    .map(media(breakpoints))
    .reduce(merge, {})
}
