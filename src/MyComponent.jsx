import React, { useState } from 'react'
function MyComponent() {
  const [name, setName] = useState('Guest')
  const [age, setAge] = useState(0)
  const [isEmployed, setISsEmployed] = useState(false)
  const updateName = () => {
    setName('SpommgeBob')
  }
  const incrementAge = () => {
    setAge(age + 1)
  }
  const toggleEmployeeStatus = () => {
    setISsEmployed(!isEmployed)
  }
  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>SetName</button>
      </div>
      <div>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>incrementAge</button>
      </div>

      <div>
        <p>is Employes: {isEmployed ? 'Yes' : 'No'}</p>
        <button onClick={toggleEmployeeStatus}>toggle Status</button>
      </div>
    </>
  )
}

export default MyComponent
