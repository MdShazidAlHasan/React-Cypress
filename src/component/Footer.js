import React from 'react'
import {useLocation, Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer data-testid='footer'>
        <p className='header'>
          Copyright &copy; 2022 
          {
          useLocation().pathname!=='/about' && 
            (<Link style={{background:'blue'}}
                  className='btn' 
                  to= '/about'
                >About
            </Link>
          )}
      </p>
        
    </footer>
  )
}

export default Footer