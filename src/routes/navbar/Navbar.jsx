/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './navbar.scss';
import { Link, NavLink } from 'react-router-dom';
import { navbarData } from '../../data/data';
const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [scrollTopMenu, setScrollTopMenu] = useState(true);
 
  const handleNav =()=>{
    setOpenMenu(!openMenu)
  }

  useEffect(() =>{
    window.addEventListener('scroll', () =>{

      if(window.scrollY > 100){
        setScrollTopMenu(false);
   
    }else{
      setScrollTopMenu(true);
    }
    });
  },[])
  return (
    <div className={scrollTopMenu ? "transparentNavContainer":"allNavContainer"}>
          {/* { scrollTopMenu && <div className= "topNavContainer">
              <div className="linkMenu">
                <span>Langenhof 1,
                      26160 Bad Zwischenahn
                </span>
                <span>
                Telefon: +49 4403-9165256 
                </span>
                <span>
                Telefax: +49 4403-9165257
                </span>

                <span>
                E-Mail:info@cib-ol.eu
                </span>
              </div>
              <div className="rightMenu">
                <Link to="datenschutzerklärung">Datenschutzerklärung</Link>
                <Link to="/impressum">Impressum</Link>
              </div>
            </div>} */}
      <div className="navbarContainer"  >
      <Link onClick={()=>setOpenMenu(false)} to='/'>
            <div className="logoNav">
                <h1>CI<b>B</b> </h1>
                <span>
                    Centrum für Integration und Bildung  e.V.
                </span>
            </div>
      </Link>
      <div className= {openMenu ?"navMenu" :"menuNav"} >
            {navbarData.map(navLink=>(
              <NavLink key={navLink.id} onClick={handleNav} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}  to={navLink.link} >{navLink.name} </NavLink>
            ))}

        </div>
        
        

        <div className="hamburgerMenu" onClick={handleNav} >
          <hr className={openMenu ? 'lineOne':""} />
          <hr className={openMenu ? 'lineTwo':""} />
          <hr className={openMenu ?'lineThree':""}/>
        </div>

     
    </div>
    </div>
  )
}

export default Navbar