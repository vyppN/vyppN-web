import React from 'react'

const Button = ({onClick, children, ...others}) => {
    return <div onClick={onClick} {...others}>{children}</div>
}

export default Button