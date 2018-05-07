import { radii } from 'theme'

export default function borderRadius(props) {
  if (props.borderRadius) {
    if (props.borderRadius < 3) {
      return `border-radius: ${radii[props.borderRadius]};`
    } else {
      return `border-radius: ${props.borderRadius};`
    }
  }
}
