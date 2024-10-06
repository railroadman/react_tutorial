import propTypes from 'prop-types'
function List(props) {
  const category = props.category
  const itemList = props.items
  itemList.sort((a, b) => a.name.localeCompare(b.name)) // ALPAH
  itemList.sort((a, b) => b.name.localeCompare(a.name)) // ALPAH
  itemList.sort((a, b) => a.calories - b.calories)
  itemList.sort((a, b) => b.calories - a.calories)

  const listItems = itemList.map(fruit => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ))
  return (
    <>
      <h3 className='list-category'>{category}</h3>
      <ul className='list-items'>{listItems}</ul>
    </>
  )
}

List.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      calories: propTypes.number,
    })
  ),
  category: propTypes.string,
}

export default List
