import { Flex, Link } from '~/components/atoms'
import React from 'react'

const PrimaryNav = () => {
  return (
    <Flex justify="space-around" width="100%">
      <Link m={0} href="/stack">
        Stack
      </Link>
      <Link href="/allApps">MicroApps</Link>
      <Link href="/apiApps">APIs</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </Flex>
  )
}

export default PrimaryNav
