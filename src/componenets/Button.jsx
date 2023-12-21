import React from 'react'

function Button(props) {
  return (
    <>
    <button
placeholder={props.value}
>
    {props.value}
    </button>
    </>
  )
}

export default Button
