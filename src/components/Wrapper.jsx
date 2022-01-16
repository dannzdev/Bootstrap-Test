import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className="wrapper w-100 vh-100 position-relative">
      {children}
    </div>
  )
}

export default Wrapper
