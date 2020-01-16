import React from 'react'
import { Button } from 'antd'

import { useTestStore } from '@store/index'

const CountOperation = () => {
  const { dispatch } = useTestStore()
  return (
    <div>
      <Button
        onClick={() => dispatch({ type: 'INCREMENT', payload: { num: 5 } })}
      >
        +
      </Button>
      <Button
        onClick={() => dispatch({ type: 'DECREMENT', payload: { num: 1 } })}
      >
        -
      </Button>
    </div>
  )
}

export default CountOperation
