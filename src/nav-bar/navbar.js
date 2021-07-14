import {React, useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {useSpring, animated} from 'react-spring'

const Navbar = () =>{

  const [open, setOpen] = useState(false)
  const handlerBurger = function(){
    if(!open){
      setOpen(true)
    }else{
      setOpen(false)
    }
    console.log(open)
  }

  const sideBar = useSpring({
			to: [{right: open ? '0%' : '-50%'}],
      from: {right:  '-50%'},
			config: {
				duration: 500
			}
		})

  useEffect(() => {
    document.getElementsByClassName("sticky")[0].style.display = "block";
  }, [])

  const [style, setStyle] = useState({color: 'white'});
  const [navstyle, setNavstyle] = useState({background: ''});
  const [border, setBorder] = useState({borderLeft: "1px solid white", })
  useEffect(() => {
    const handlerChange = () =>{
      if(window.scrollY > 30){
        setStyle({color: 'black'})
        setNavstyle({background: 'white'})
        setBorder({ borderLeft: "1px solid black" })
      }else if(window.scrollY < 10){
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
            <button className="open-burger" onClick={handlerBurger} >
              <p>&#9776;</p>
            </button>
        </div>
      </div>

      <animated.div style={sideBar} className="side-container" >
          <button className="close-burger" onClick={handlerBurger} >
            <p>&#9776;</p>
          </button>
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
        
      </animated.div>
    </article>
  )
}

export default Navbar