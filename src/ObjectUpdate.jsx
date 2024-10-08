import { useState } from 'react'
function ObjectUpdate() {
  const [car, setCar] = useState({
    year: 2024,
    make: 'Ford',
    model: 'Mustang',
  })

  function handleYearChange(event) {
    setCar(c => ({ ...c, year: event.target.value }))
  }
  function handleMakeChange(event) {
    setCar(c => ({ ...c, make: event.target.value }))
  }
  function handleModelChange(event) {
    setCar(c => ({ ...c, model: event.target.value }))
  }
  return (
    <>
      <div>
        <p>
          Your favorite car is: {car.year} {car.make} {car.model}
        </p>
        <p>
          <input type='number' onChange={handleYearChange} value={car.year} />
        </p>
        <p>
          <input type='text' onChange={handleMakeChange} value={car.make} />
        </p>
        <p>
          <input type='text' onChange={handleModelChange} value={car.model} />
        </p>
      </div>
    </>
  )
}
export default ObjectUpdate
