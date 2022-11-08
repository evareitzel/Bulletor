import {useState} from "react"

export default function ClickMe(){
  const [string, setString] = useState('')
  const [count, setCount] = useState(0)

console.log(string)
  function handleSubmit(e){
    e.preventDefault()
    // setFormInput(string)
    setCount(count+string.length)
    setString('')
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={e => setString(e.target.value)} type='text' value={string}/>
        <button type="submit" value="Submit">Click me!</button>
      </form>
    {/* show count */}
    <h1>{count}</h1>
    </div>  
  )
}

// input - ctrolled 
// click me btn
// show str.length total below(0)