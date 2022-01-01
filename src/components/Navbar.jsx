import React from 'react'
import styled from 'styled-components'
import { BiBell, BiChevronDown, BiSearch } from 'react-icons/bi';
import user from '../images/user.png';


// CSS 
import '../index.css';


function Navbar() {
    return (
        <Nav>
            <div className="title">
                <h3>Dashboard</h3>
            </div>

            <div className="search">
                <a href=""><BiSearch /></a>
                <a href=""><BiBell /></a>
                <a href=""><img src={user} alt="" /></a>
                <a href=""> <BiChevronDown /></a>
            </div>

        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
display:flex;
justify-content:space-between;
color:white;
`;
