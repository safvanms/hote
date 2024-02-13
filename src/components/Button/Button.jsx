import React from 'react'
import './button.css'

const Button = ({content , bg}) => {
  return (
    <div className='learnMore GenFlex' style={{backgroundColor:bg}}>
      {content}
    </div>
  )
}

export default Button
