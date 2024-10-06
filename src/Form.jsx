import { useState } from 'react'

function Form() {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState()
  const [comment, setComment] = useState('')
  const [payment, setPayment] = useState('')
  const [shipping, setShipping] = useState('')

  function handleQuantityChange(event) {
    setQuantity(event.target.value)
  }
  function handleChangeName(event) {
    setName(event.target.value)
  }
  function handleCommandChange(event) {
    setComment(event.target.value)
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value)
  }
  function handleShippingChanges(event) {
    setShipping(event.target.value)
  }

  return (
    <>
      <div className='form-example'>
        <input value={name} onChange={handleChangeName} type='text' />
        <p>Name: {name}</p>
        <input value={quantity} onChange={handleQuantityChange} type='number' />
        <p>Quantity: {quantity}</p>
        <p>Comment</p>
        <textarea
          cols={50}
          rows={10}
          value={comment}
          onChange={handleCommandChange}
          id=''
          placeholder='Leave comment'
        ></textarea>
        <p>{comment}</p>
        <select value={payment} onChange={handlePaymentChange} name='' id=''>
          <option value=''>Select an option</option>
          <option value='Visa'>Visa</option>
          <option value='MasterCard'>MasterCard</option>
          <option value='GiftCard'>GiftCard</option>
        </select>
        <p>Payment:{payment}</p>
        <hr />
        <label htmlFor=''>
          <input
            className='radioButton'
            type='radio'
            value='Pick Up'
            checked={shipping === 'Pick Up'}
            onChange={handleShippingChanges}
          />
          Pick up
        </label>
        <br />
        <label htmlFor=''>
          <input
            className='radioButton'
            type='radio'
            value='Delivery'
            checked={shipping === 'Delivery'}
            onChange={handleShippingChanges}
          />
          Delivery
        </label>
        <p>Shipping : {shipping}</p>
      </div>
    </>
  )
}
export default Form
