import {useState} from 'react'

  // POST request to the json server
  // Use a form to make your post request, specifically a controlled form/component.

function ListForm() {
  const [newTask, setNewTask] = useState("")
  
  function handleChange(e){
    setNewTask(e.target.value)
  }
  return (
    <>
      <h1>ListForm</h1>
      <p>Add new tasks: </p>
      <form>
        <label onChange={handleChange}>Task 1 </label><input></input>
        <label>Task 2 </label><input></input>
        <label>Task 3 </label><input></input>
        <label>Task 4 </label><input></input>
      </form>
    </>
  )
}

export default ListForm