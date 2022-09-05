import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button/Button';

import './Navbar.styles.css'

function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);

        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        TATA Metaverse 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                SERVICES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                SERVICES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/feedback" 
                                className="nav-links" 
                                onClick={closeMobileMenu}
                            >
                                FEEDBACK
                            </Link>
                        </li>

                        
                        <li className="nav-item">
                            <Link 
                                to="/sign-in" 
                                className="nav-links-mobile" 
                                onClick={closeMobileMenu}
                            >
                                Sign In
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar