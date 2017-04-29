import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProjectHeader } from 'components'
import weather from '../../../../public/projectimages/weather.png'

storiesOf('ProjectHeader', module)
  .add('default', () => (
    <ProjectHeader image={weather} header="Hello" link="view my API projects" />
  ))
  .add('theme', () => (
    <ProjectHeader image={weather} header="Hello" background link="view my API projects" />
  ))
  .add('flipped', () => (
    <ProjectHeader image={weather} header="Hello" background flip link="view my API projects" />
  ))
