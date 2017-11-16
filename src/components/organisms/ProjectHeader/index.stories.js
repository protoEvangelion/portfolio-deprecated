import { storiesOf } from '@storybook/react'
import React from 'react'

import ProjectHeader from '.'

storiesOf('ProjectHeader', module)
  .add('default', () => (
    <ProjectHeader
      image="/static/weather.png"
      header="Hello"
      link="view my API projects"
    />
  ))
  .add('theme', () => (
    <ProjectHeader
      image="/static/weather.png"
      header="Hello"
      background
      link="view my API projects"
    />
  ))
  .add('flipped', () => (
    <ProjectHeader
      image="/static/weather.png"
      header="Hello"
      background
      flip
      link="view my API projects"
    />
  ))
