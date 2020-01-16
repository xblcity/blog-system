import React from 'react'
import { useTestStore } from '@store/index'

const ShowCount = () => {
  const {
    state: { count }
  } = useTestStore()
  return (
    <div>
      <div>{count}</div>
    </div>
  )
}

export default ShowCount
