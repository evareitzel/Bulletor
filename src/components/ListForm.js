import { ThemeContext } from '@emotion/react'
import {useState} from 'react'

  // POST request to the json server
  // Use a form to make your post request, specifically a controlled form/component.

function ListForm({setLists}) {
  const [title, setTitle] = useState("")
  const [item, setItem] = useState("")
  const [item2, setItem2] = useState("")
  const [item3, setItem3] = useState("")
  const [item4, setItem4] = useState("")
  
  function handleTitleChange(e){
    e.preventDefault()
    setTitle(e.target.value)
  }
  
  function handleItemChange(e){
    e.preventDefault()
    setItem(e.target.value)
  }

  function handleItem2Change(e){
    e.preventDefault()
    setItem2(e.target.value)
  }

  function handleItem3Change(e){
    e.preventDefault()
    setItem3(e.target.value)
  }

  function handleItem4Change(e){
    e.preventDefault()
    setItem4(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log('Submitted!')
    const listData = {
      title: title,
      item1: item,
      item2: item2,
      item3: item3,
      item4: item4
    }
    // console.log(listData)
    fetch('http://localhost:3001/lists', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST', 
      body: JSON.stringify(listData)
    })
    .then(r => r.json())
    // .then(data => console.log(data))
    .then(data => setLists(data))
  
  }

  // console.log('Title: ', title)
  // console.log('Item: ', item)
  // console.log('Item 2: ', item2)
  // console.log('Item 3: ', item3)
  // console.log('Item 4: ', item4)

  return (
    <>
      <h1>ListForm</h1>
      <p>New Bullet List: </p>
      <form onSubmit={handleSubmit}>
          <label>Title 
          <input 
            onChange={handleTitleChange} 
            // placeholder="Title of your List" // FIX
            type="text"
            value={title}
          />
          </label>
          <label>1 
          <input 
            onChange={handleItemChange}
            // placeholder="Task 1" // FIX
            type="text"
            value={item}
          />
          </label>
          <label>2 
          <input 
            onChange={handleItem2Change}
            // placeholder="Task 2" // FIX
            type="text"
            value={item2}
          />
          </label>
          <label>3 
          <input 
            onChange={handleItem3Change}
            // placeholder="Task 3" // FIX
            type="text"
            value={item3}
          />
          </label>
          <label>4 
          <input 
            onChange={handleItem4Change}
            // placeholder="Task 4" // FIX
            type="text"
            value={item4}  
          />
</label>
        <input type="submit" value="Submit"/>      </form>
    </>
  )
}

export default ListForm