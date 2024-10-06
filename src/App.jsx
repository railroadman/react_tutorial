import Button from './Button/Button'
import ButtonInline from './Button/ButtonInline'
import Card from './Card'
import ColorPicker from './ColorPicker'
import Counter from './Counter'
import Form from './Form'
import List from './List'
import MyComponent from './MyComponent'
import ObjectUpdate from './ObjectUpdate'
import ProfilePicture from './ProfilePicture'
import Student from './Student'
import UserGreeting from './UserGreeting'
function App() {
  const fruits = [
    { id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'orange', calories: 45 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'coconut', calories: 159 },
    { id: 5, name: 'pineapple', calories: 37 },
  ]
  const vegetables = [
    { id: 6, name: 'potatoes', calories: 110 },
    { id: 7, name: 'celery', calories: 15 },
    { id: 8, name: 'carrots', calories: 25 },
    { id: 9, name: 'corn', calories: 63 },
    { id: 10, name: 'broccoli', calories: 50 },
  ]
  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
      <Button />
      <ButtonInline />
      <Student name='SopngeBob' age={30} isStudent={true} />
      <Student name='Terry' age={10} isStudent={false} />
      <Student />
      <UserGreeting isLoggedIn={false} username='Bob' />

      <UserGreeting isLoggedIn={true} />

      {fruits.length > 0 && <List items={fruits} category='Fruits' />}
      {vegetables.length > 0 && (
        <List items={vegetables} category='Vegetables' />
      )}
      <ProfilePicture />
      <MyComponent />
      <Counter />
      <Form></Form>
      <ColorPicker />
      <ObjectUpdate />
    </>
  )
}

export default App
