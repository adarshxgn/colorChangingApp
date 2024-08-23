import React, { useEffect, useState } from 'react'

export const App = () => {
  const [color,setColor] = useState(["#FF8C00"])
  const click =color =>{
    setColor(color)
  }
  useEffect(()=>{
    document.getElementById("canvas").style.backgroundColor=color
  },[color])

  
  return (
    <div className=''>
      <h1 style={{fontFamily:"serif"}} className='text-center'>Color Changing App</h1>
      <div className='d-flex justify-content-center align-items-center m-5'>
        <div id='canvas' className='border rounded' style={{height:"80vh",width:"50rem", transition:"ease-in",transitionDuration:"1s"}}>
        </div>
        <><div className='d-flex flex-column'>
        <img  onClick={()=>(click("#F0E68C"))} style={{width:"80px"}} src="https://basecreative.co.uk/wp-content/uploads/Website%202020%20old%20image%20upload/CircleBase-6-segments-tints-1024x1024.png" className='btn'  alt="" />
      <img  onClick={()=>(click("#98FB98"))} style={{width:"80px"}} src="https://basecreative.co.uk/wp-content/uploads/Website%202020%20old%20image%20upload/CircleBase-6-segments-tints-1024x1024.png" className='btn'  alt="" />
      <img  onClick={()=>(click("#9370DB"))} style={{width:"80px"}} src="https://basecreative.co.uk/wp-content/uploads/Website%202020%20old%20image%20upload/CircleBase-6-segments-tints-1024x1024.png" className='btn'  alt="" />
      <img  onClick={()=>(click("#D8BFD8"))} style={{width:"80px"}} src="https://basecreative.co.uk/wp-content/uploads/Website%202020%20old%20image%20upload/CircleBase-6-segments-tints-1024x1024.png" className='btn'  alt="" />
      <img  onClick={()=>(click("#FF7F50"))} style={{width:"80px"}} src="https://basecreative.co.uk/wp-content/uploads/Website%202020%20old%20image%20upload/CircleBase-6-segments-tints-1024x1024.png" className='btn'  alt="" />
          </div></>
      </div>
    </div>
  )
}
export default App