import React from 'react'

function SquareComponent(props) {
   
    const classes =('square')
    return (
        <span className={
            classes + (
                props.value ==='X'?
                ' fc-red':
                ' fc-green'
            )
        } onClick={() => props.onClick()}>
            {props.value}
        </span>
    )
}

export default SquareComponent
