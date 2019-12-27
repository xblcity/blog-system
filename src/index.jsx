import React from 'react'
import ReactDOM from 'react-dom'

class A {
  s = 1
}
console.log(A)

const render = () => {
  ReactDOM.render(
    <div>123</div>,
    document.querySelector('#app')
  )
}

render()