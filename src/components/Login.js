import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'

function Login() {
  const dispatch = useDispatch()

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: 'Dass', age: 24, email: 'dassbosch50@gmail.com' })
          )
        }}
      >
        Login
      </button>

      <button
        onClick={() => {
          dispatch(logout())
        }}
      >
        LOGOUT
      </button>
    </div>
  )
}

export default Login
