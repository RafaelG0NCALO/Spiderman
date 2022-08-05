import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../Menu/style.css'
import logo from '../../assets/images/logo.png'
import spiderweb from '../../assets/images/logo2.png'

export default function Navbar() {


    //change nav color
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 80){
            setColor(true)
        } else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
  
const Links =[
    {name:"Home", link:"/"},
    {name:"Sobre", link:"/About"},
    {name:"Projetos", link:"/Projects"},
    {name:"Contato", link:"/Contact"},
]

  return (
    <>
    <header className={color ? 'header header-bg' : 'header'}>
        <nav>

        <div>
            <NavLink end to='/' className="nav-logo">
                <img src={logo}/>
                <div className='social'>
                        <img src={spiderweb}/>
                        <span></span>
                          <i className="fa-brands fa-github"></i>
                          <i className="fa-brands fa-linkedin"></i>
                        <span></span>
                      </div>
            </NavLink>
        </div>
          
        <div className={click ? 'nav-menu active' : 'nav-menu'}>
            {Links.map((Link)=>(
                <NavLink className='link' onClick={()=>handleClick()} key={Link.link} end to={Link.link}>
                    {({ isActive }) => (
                    <span  className={isActive ? 'nav-links active' : 'nav-links'}>
                        {Link.name}
                    </span>
                )}
                </NavLink>     
            ))} 
        </div>

        <div className='content_toggle'>
            <button onClick={()=>handleClick()}
                className={(click) ? 'toggle active'  : 'toggle'} >
            </button>
        </div>

        </nav>
    </header>
    </>
  )
}


