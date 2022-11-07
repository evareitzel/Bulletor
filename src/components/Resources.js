import '../stylesheets/Resources.css'

function Resources(){
  return(
    <>
      <h1>Resources</h1>
      <h3 className="h3">Bullet List Key</h3>
      <p><i>Ideas for rapid logging</i></p>
      <ul className="keys">
        <li>• To Do</li>
        <li>◦ In Progress</li>
        <li>x Completed</li>
        <li>♡ Idea</li>
      </ul>

      <h3 className="h3">Reference Websites</h3>
      <ul className="links">
        <li>
          <a href='https://bulletjournal.com/' target="_blank" className="link">Official site</a>
        </li>  
        <li>
        <a href="https://bulletplannerideas.com/bullet-journal-keys/?v=322b26af01d5" target="_blank" className="link">Bullet Planner Ideas</a>
        </li>
      </ul>
    </>
  )
}

export default Resources