import { Aux, MenuButton } from '~/components/atoms'
import React from 'react'

import { Icon, IconLogo, PrimaryNav, SecondaryNav, Wrapper } from './styles'

const Navbar = props => {
  return (
    <Aux>
      <Wrapper opaque reverse {...props}>
        <MenuButton {...props} />
        <IconLogo href="/" icon="whiteLogo" height={100} />
        <PrimaryNav reverse {...props} />
        <Icon href="/allApps" icon="briefcase" height={100} />
      </Wrapper>
      <SecondaryNav reverse {...props} />
    </Aux>
  )
}

export default Navbar
