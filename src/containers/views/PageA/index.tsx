import React from 'react'
import { Button } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import ShowCount from '@components/ShowCount'
import CountOperation from '@components/CountOperation'

const PageA = ({ history }: RouteComponentProps) => {
  return (
    <div>
      <div>PageA</div>
      <ShowCount />
      <CountOperation />
      <Button onClick={() => { history.push('/page-b') }}>跳转B</Button>
    </div>
  )
}

export default withRouter(PageA)