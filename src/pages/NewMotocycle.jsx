import React, { useState } from 'react'

const NewMotocycle = () => {
  const [model , setModel] = useState('');
  const [description , setDescription] = useState('');
  const [image, setImage ] = useState('');
  const [duration, setDuration ] = useState('');
  const [price, setPrice ] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {model, color, image}
    console.log(data)
  }
  return (
    <div className='sub-container'>
      <h2> Add New Motocycle</h2>
      <div>

    
    <form onSubmit={handleSubmit}>
     <div>
    
       <label>Motocycle model</label>
       <input 
       type='text' 
       value={model}
       onChange={(e)=> setModel(e.target.value)}
       />
        
       </div>
       <div>
    
       <label>MOtocycle duration</label>
       <input type='text'
      value={duration}
      onChange={(e)=> setDuration(e.target.value)}
      />
        
       </div>
       <div>
    
       <label>Motocycle description</label>
       <input type='text'
      value={description}
      onChange={(e)=> setDescription(e.target.value)}
      />
        
       </div>
       <div>
    
       <label>Motocycle price</label>
       <input type='number'
      value={price}
      onChange={(e)=> setPrice(e.target.value)}
      />
        
       </div>
       <div>
    
       <label>avatar</label>
       <input 
       type='url' 
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