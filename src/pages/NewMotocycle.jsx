import React, { useState } from 'react'

const NewMotocycle = () => {
  const [model , setModel] = useState('');
  const [color , setColor] = useState('');
  const [image, setImage ] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {model, color, image}
    console.log(data)
  }
  return (
    <div className='sub-container'>
      <div>

    
    <form onSubmit={handleSubmit}>
     <div>
    
       <label>Bike model</label>
       <input 
       type='text' 
       value={model}
       onChange={(e)=> setModel(e.target.value)}
       />
        
       </div>
       <div>
    
       <label>Bike color</label>
       <input type='text'
      value={color}
      onChange={(e)=> setColor(e.target.value)}
      />
        
       </div>
       <div>
    
       <label>Image</label>
       <input 
       type='text' 
       value={image}
       onChange={(e)=> setImage(e.target.value)}
       />
        </div>
        <input type='submit' value='make reservation' />
   </form> 
   </div>
   </div>
  )
}

export default NewMotocycle