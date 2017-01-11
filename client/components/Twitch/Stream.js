import React from 'react'

const Stream = (props) => {
  const streams = props.streams.featured.map((stream) => {
    return <div>{stream.title}</div>
  })
  return (
    <div>
      {streams}
    </div>
  )
}

export default Stream
