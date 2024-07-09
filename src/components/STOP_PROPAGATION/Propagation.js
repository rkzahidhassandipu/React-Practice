import React from 'react'

const Propagation = () => {

  const handleParentClick = (event) => {
    console.log("prent event", event)
  }
  const handleChildClink = (event) => {
    event.stopPropagation();
    console.log("child event", event)
  }

  return (
    <div className='parent' onClick={handleParentClick}>
      <h1>Welcome everyone</h1>
        <button onClick={handleChildClink}>Click Child</button>
    </div>
  )
}

export default Propagation