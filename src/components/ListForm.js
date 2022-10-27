import {useState} from 'react'

  // POST request to the json server
  // Use a form to make your post request, specifically a controlled form/component.

function ListForm() {
  const [title, setTitle] = useState("")
  const [newTask, setNewTask] = useState("")
  
  function handleTitleChange(e){
    e.preventDefault()
    setTitle(e.target.input)
  }
  function handleNewTaskChange(e){
    setNewTask(e.target.value)
  }

  console.log(title)
  console.log(newTask)

  return (
    <>
      <h1>ListForm</h1>
      <p>Add new tasks: </p>
      <form>
      <label>Title </label><input onChange={handleTitleChange} placeholder="List Title"></input>
        <label onChange={handleNewTaskChange}>Task 1 </label><input></input>
        <label>Task 2 </label><input></input>
        <label>Task 3 </label><input></input>
        <label>Task 4 </label><input></input>
      </form>
    </>
  )
}

export default ListForm