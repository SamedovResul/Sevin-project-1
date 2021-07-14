import React from 'react'
import { Link } from 'react-router-dom'

const  Invition = (props) =>{

  const {image, name,description } = props.data
  console.log(props.data)
  return( 
    <>
     <div  className="invition-container-box">
        <div   className="img-box"  >
          <img src={image} alt="img" />
        </div>
        <div className="text-box">  
          <h2>{name}</h2>
          <p>{description}</p>
          <Link to='/invitation' >
            <button className='btn' > Nümunə </button>
          </Link>
        </div>
          
      </div>
    </>
  )
} 

export default Invition