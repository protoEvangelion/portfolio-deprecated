import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProjectHeader } from 'components'

storiesOf('ProjectHeader', module)
  .add('default', () => (
    <ProjectHeader header="Hello" />
  ))
  .add('theme', () => (
    <ProjectHeader header="Hello" background />
  ))
