import React, { useState } from 'react'

function FuntionalComponent(props) {
    const {firstName, lastName} = props
    const [getFirstName,setFirstName] = useState(firstName)
    const [getLastName,setLastName] = useState(lastName)
    
    const buttonClick = () => {
        setFirstName('Akhila')
        setLastName('Menon')
    }
  return (<>
    <div>Hello I am {getFirstName} {getLastName}</div>
    <button className="buttonColor"onClick={buttonClick}>Click</button>
    </>
  )
}

export default FuntionalComponent 