import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Avatar } from 'components'

storiesOf('Avatar', module)
  .add('default', () => (
    <Avatar />
  ))
  .add('small', () => (
    <Avatar size="100" />
  ))
  .add('large', () => (
    <Avatar size="400" />
  ))
