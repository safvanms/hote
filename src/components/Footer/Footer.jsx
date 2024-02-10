import React from 'react'
import './footer.css'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='footer GenFlex'>
      @ {year} hoté intl . All right reserved.
    </div>
  )
}

export default Footer
