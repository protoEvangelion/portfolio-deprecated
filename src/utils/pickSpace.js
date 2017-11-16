import { pick } from 'lodash'

const pickSpace = props => {
  return pick(props, [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
  ])
}

export default pickSpace
