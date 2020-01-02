import React from 'react'
import { Button } from 'antd'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const PageA = ({ history }: RouteComponentProps) => {
  return (
    <div>
      <div>PageA</div>
      <Button onClick={() => { history.push('/page-b') }}>跳转B</Button>
    </div>
  )
}

export default withRouter(PageA)