import React from 'react'
import logo from '../logo.png'

export default function Header() {
  return (
    <img
      src={logo}
      alt="logo"
      style={{
        width: '100%',
        maxWidth: '200px',
        heigth: 'auto',
        display: 'block',
        margin: 'auto',
        marginTop: '2rem'
      }}
    />
  )
}
