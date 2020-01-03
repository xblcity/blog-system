import React from 'react'

import { Provider as TestProvider } from './count'

export { useTestStore } from './count'

const providers = [TestProvider]

const Provider = (props: any) =>
  providers.reduceRight((children, Parent) => <Parent>{children}</Parent>, props.children)

export default Provider