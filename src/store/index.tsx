import React from 'react'

import { Provider as UserProvider } from './user'
import { Provider as TagProvider } from './tag'

export { useUserStore } from './user'
export { useTagStore } from './tag'

const providers = [UserProvider, TagProvider]

const Provider = (props: any) =>
  providers.reduceRight(
    (children, Parent) => <Parent>{children}</Parent>,
    props.children
  )

export default Provider
