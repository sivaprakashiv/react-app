import React from 'react'
type Props = {
    children: string
    onClose: () => void;
    }

const Alert = ({children, onClose}: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
    {children}
    <button type="button" className="btn-close" data-dismiss="alert" aria-label="Close" onClick={onClose}>
      <span aria-hidden="true"></span>
    </button>
    </div>    
  )
}


export default Alert