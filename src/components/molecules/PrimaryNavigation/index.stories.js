import { storiesOf } from '@storybook/react'
import React from 'react'

import PrimaryNavigation from '.'

storiesOf('PrimaryNavigation', module)
  .add('default', () => <PrimaryNavigation />)
  .add('reverse', () => <PrimaryNavigation reverse />)
