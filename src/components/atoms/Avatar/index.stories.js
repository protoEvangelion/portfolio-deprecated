import { storiesOf } from '@kadira/storybook'
import { Avatar } from 'components'
import React from 'react'

storiesOf('Avatar', module)
  .add('default', () => <Avatar />)
  .add('small', () => <Avatar size="100" />)
  .add('large', () => <Avatar size="400" />)
