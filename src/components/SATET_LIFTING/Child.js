import React from 'react'

function Child(props) {
    const data = "i am from paren (app)";
    props.onData(data)
  return (
    <div>
        <p>I am child component</p>
        <p>{props.data}</p>
    </div>
  )
}

export default Child