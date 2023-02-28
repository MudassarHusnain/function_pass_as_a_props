import React from 'react'

export default function Child(props) {
    const data ="Mudassar Jutt"
  return (
    <button onClick={()=>props.c(data)}> Click Here</button>
  )
}
