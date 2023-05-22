import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCodeCompare} from "@fortawesome/free-solid-svg-icons";
import {Button} from "./Button";
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else {
            setButton(true)
        }
    };
    useEffect(() => {
        showButton();
    }, []);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    window.addEventListener('resize', showButton)
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">

                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    BN <FontAwesomeIcon icon={faCodeCompare} />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/skills' className="nav-links" onClick={closeMobileMenu}>
                            Skills
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/workexp' className="nav-links" onClick={closeMobileMenu}>
                            Work Experience
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/education' className="nav-links" onClick={closeMobileMenu}>
                            Education
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/achievements' className="nav-links" onClick={closeMobileMenu}>
                            Achievements
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/pubsnpats' className="nav-links" onClick={closeMobileMenu}>
                            Publications and Patents
                        </Link>
                    </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>Re</Button>} */}
            </div>
        </nav>
        </>
    );
}

export default Navbar;



