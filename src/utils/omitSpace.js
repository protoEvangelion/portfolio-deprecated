import { omit } from 'lodash'

// Omit space prevents the spacing props from margin and padding
//   from bleeding into the components below it

const omitSpace = (props, blacklist) => {
  return omit(props, [
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
    ...blacklist,
  ])
}

export default omitSpace
