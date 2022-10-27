import {useState} from 'react'

  // POST request to the json server
  // Use a form to make your post request, specifically a controlled form/component.

function ListForm() {
  const [title, setTitle] = useState("")
  const [task1, setTask1] = useState("")
  const [task2, setTask2] = useState("")
  const [task3, setTask3] = useState("")
  const [task4, setTask4] = useState("")
  
  function handleTitleChange(e){
    // e.preventDefault()
    setTitle(e.target.value)
  }
  
  function handleTask1Change(e){
    setTask1(e.target.value)
  }

  function handleTask2Change(e){
    setTask2(e.target.value)
  }

  function handleTask3Change(e){
    setTask3(e.target.value)
  }

  function handleTask4Change(e){
    setTask4(e.target.value)
  }

  function handleSubmit(e){
    // e.target.preventDefault()
    console.log('Submitted!')
  }

  console.log('Title: ', title)
  console.log('Task 1: ', task1)
  console.log('Task 2: ', task2)
  console.log('Task 3: ', task3)
  console.log('Task 4: ', task4)

  return (
    <>
      <h1>ListForm</h1>
      <p>New Bullet List: </p>
      <form>
        <div>
          <label>Title </label>
          <input 
            onChange={handleTitleChange} 
            // placeholder="Title of your List" // FIX
            // type="text"
            // value="title"
          ></input>
        </div>
        <div>
          <label>1 </label>
          <input 
            onChange={handleTask1Change}
            // placeholder="Task 1" // FIX
            // type="text"
            // value="task1"
          >
          </input>
        </div>
        <div>  
          <label>2 </label>
          <input 
            onChange={handleTask2Change}
            // placeholder="Task 2" // FIX
            // type="text"
            // value="task2"
          >
          </input>
        </div>
        <div>
          <label>3 </label>
          <input 
            onChange={handleTask3Change}
            // placeholder="Task 3" // FIX
            // type="text"
            // value="task3"
          >
          </input>
        </div>
        <div>
          <label>4 </label>
          <input 
            onChange={handleTask4Change}
            // placeholder="Task 4" // FIX
            // type="text"
            // value="task4"  
          >
          </input>
        </div>
        <button onSubmit={handleSubmit} type="submit">Submit</button>
      </form>
    </>
  )
}

export default ListForm