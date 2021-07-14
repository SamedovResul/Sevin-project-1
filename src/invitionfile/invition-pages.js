import {React} from 'react'
const Invitions = (props) =>{
  // console.log(props)
  
  const {image, name,} = props.data
  return(
      <>
        <div   className="img-box"  >
          <img src={image} alt="img" />
        </div>
        <div className="text-box">
          <p>{name}</p>
        </div>
      </>
  )
}



export default Invitions
