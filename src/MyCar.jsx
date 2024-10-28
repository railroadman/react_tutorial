import React, { useState } from 'react'

function MyCar() {
  const [car, setCar] = useState({ year: 2024, make: 'Ford', model: 'Mustang' })
  function handleYearChange() {}
  function handleMakeChange() {}
  function handleModelChange() {}

  return (
    <>
      <div>
        <p>
          Your favourite Car is : {car.year} , {car.make} , {car.model}
        </p>
        <input type='number' value={car.year} onChange={handleYearChange} />
        <br />
        <input type='text' value={car.make} onChange={handleMakeChange} />
        <br />
        <input type='text' value={car.model} onChange={handleModelChange} />
        <br />
      </div>
    </>
  )
}

export default MyCar
