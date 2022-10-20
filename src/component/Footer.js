import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer data-testid='footer'>
        <p className='header'>Copyright &copy; 2022 <Link href= '/about'>About</Link></p>
        
    </footer>
  )
}

export default Footer