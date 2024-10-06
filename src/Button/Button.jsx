import styles from './Button.module.css'
function Button() {
  let count = 0
  const handleClick = name => {
    if (count < 3) {
      count++
      console.log(`${name} you clicked me ${count} times`)
    } else {
      console.log(`${name} stop clicking me`)
    }
  }
  const handleClick2 = name => {
    console.log(`${name} stop clicking me`)
  }

  const handleClickE = e => {
    e.target.textContent = 'OUCH!!!'
    console.log(e)
  }
  return (
    <>
      <div>
        <button onClick={e => handleClickE(e)} className={styles.button}>
          On click
        </button>
      </div>
    </>
  )
}
export default Button
