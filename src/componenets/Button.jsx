import React from 'react'

function Button(props) {
  return (
    <button  className="btn text-gray-900 bg-white border border-gray-300 focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-800 dark:text-white dark:border-gray-60" onClick={props.onClick}
    >   
      {props.value}
    </button>

  )
}

export default Button
