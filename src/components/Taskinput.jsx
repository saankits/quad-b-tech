import React from 'react'

const Taskinput = (props) => {
  return (
    <div className='newtask'>
      <input type="text" placeholder='Enter new task' name="task" value={props.newtodo.task} onChange={props.handlenewtodo}/> <button onClick={props.handleAdd}>Add</button>
    </div>
  )
}

export default Taskinput
