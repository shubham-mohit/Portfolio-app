import Main from '../../pages/Main'
import React , {useState} from 'react'
import {AiOutlineCaretRight,AiOutlineCaretLeft} from 'react-icons/ai'
import '../../styles/Layout.css'
import Menus from '../Menus'

const Layout = () => {
  const [toggle,setToggle] = useState(true)

  const handleClick = (()=>{
    setToggle(!toggle)
  })
  return (
    <div className='sidebar-section'>
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
            <div className='sidebar-toggle-icons'>
               <p onClick={handleClick}>
                {toggle ? <AiOutlineCaretLeft size={30}/> : <AiOutlineCaretRight size={30}/>}
               </p>
            </div>
            <Menus toggle={toggle}/>
        </div>
        <div className='container'>
                <Main/>
            </div>
    </div>
  )
}

export default Layout