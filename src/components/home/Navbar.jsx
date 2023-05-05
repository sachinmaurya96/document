import React from 'react'
import { FaBars, FaSearch,FaUser, } from 'react-icons/fa';
import styled from 'styled-components';
function Navbar() {
  return (
    <>
    <Wrapper>
        <div className="navbar">
            <div className="left">
            <FaBars/>
            <div className="brand">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Eo_circle_red_letter-m.svg/2048px-Eo_circle_red_letter-m.svg.png" alt="brand" />
            </div>
            </div>
            <div className="medium">
                <div className="searchbar">
                    <FaSearch/>
                    <input type="text" />
                </div>
            </div>
            <div className="right">
                <div className="usericon">
                <FaUser/>
                </div>
            </div>
        </div>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.nav`
padding: 20px;
.navbar{
    display:flex;
    justify-content:space-between;
    align-items: center;

    .left{
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 25px
    }
    .brand{
        display: flex;
        align-items: center;
    }
    .brand img{
        width: 40px;
        height:auto
    }
}
`

export default Navbar
