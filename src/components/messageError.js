/* eslint-disable react/prop-types */
import React from 'react'

const MessageError = ({ message }) => {
  return (
    <div
      style={{
        justifyContent: 'center',
        display: 'flex'
      }}
    >
      <span
        style={{
          color: 'red'
        }}
      >
        {message}
      </span>
    </div>
  )
}

export default MessageError
