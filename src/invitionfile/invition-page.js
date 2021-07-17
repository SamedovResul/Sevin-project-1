import React from 'react'
import { Link } from 'react-router-dom'

const  Invition = (props) =>{

  const {image, name,description, url } = props.data
  console.log(url)
  return( 
    <>
     <div  className="invition-container-box">
        <div   className="img-box"  >
          <img src={image} alt="img" />
        </div>
        <div className="text-box">  
          <h2>{name}</h2>
          <p>{description}</p>
          
            <button className='btn'
              onClick={() => window.open(url)}
             > Nümunə </button>
          
        </div>
          
      </div>
    </>
  )
} 

export default Invition