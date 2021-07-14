import {React, useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () =>{

  useEffect(() => {
    document.getElementsByClassName("sticky")[0].style.display = "block";
  }, [])

  const [style, setStyle] = useState({color: 'white'});
  const [navstyle, setNavstyle] = useState({background: ''});
  const [border, setBorder] = useState({borderLeft: "1px solid white", })
  const hover = {
    borderBottom: "1px solid black"
  }
  useEffect(() => {
    const handlerChange = () =>{
      if(window.scrollY > 380){
        setStyle({color: 'black'})
        setNavstyle({background: 'white'})
        setBorder({ borderLeft: "1px solid black" })
      }else if(window.scrollY < 380){
        setStyle({color: 'white'})
        setNavstyle({background: ''})
        setBorder({ borderLeft: "1px solid white" })
      }
    }
    document.addEventListener('scroll', handlerChange)
  }, [])

  
    
  return(
    <article className='sticky'>
      <div style={navstyle} className="nav-container">
        <div className="logo">
          <p style={style} >Sevin</p>
        </div>
        <div className="nav-box">
          <ul>
            
              <Link  to='/'>
                <li style={style}  >
                  Home
                </li>
              </Link>
            
            
              <Link style={border} to='/about'>
                <li style={style} >
                  About
                </li>
              </Link>

              <Link style={border} to='/'>
                <li style={style} >
                  Invitions
                </li>
              </Link>
            
          </ul>
        </div>
      </div>
    </article>
  )
}

export default Navbar