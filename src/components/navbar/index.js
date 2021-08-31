import React from 'react'
import { useState } from 'react'
import logo from '../../images/logo.png'
import { Nav, MenuLink, NavMenu, Burger} from './NavBar'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <Nav>
                <MenuLink to='/'>
                    <img src={logo} alt='logo' style={{width: 80, height: 80}} />
                </MenuLink>
                <Burger onClick={() => setIsOpen(!isOpen)}>
                        <span />
                        <span />
                        <span />
                </Burger>
                <NavMenu isOpen={isOpen}>
                    <MenuLink to='/about' activeStyle>
                        About
                    </MenuLink>
                    <MenuLink to='/codex' activeStyle>
                        Codex
                    </MenuLink>
                    <MenuLink to='/contact-us' activeStyle>
                        Contact Us
                    </MenuLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar
