import React from 'react'
import styled from 'styled-components'

function Secondnav() {
  return (
    <>
     <Wrapper>
        <div className="links">
            <a href="#" className="link">HTML</a>
            <a href="#" className="link">CSS</a>
            <a href="#" className="link">JAVASCRIPT</a>
            <a href="#" className="link">REACT</a>
            <a href="#" className="link">NODE</a>
        </div>
    </Wrapper> 
    </>
  )
}

const Wrapper = styled.nav`
font-family: 'Poppins', sans-serif;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    .links{
        display:flex;
        gap: 10px;
        min-width: 100%;
        overflow-x: scroll;
        padding: 0 20px;

        .link{
            padding: 6px 10px 3px 10px;
            border: 1px solid rgb(189, 187, 187);
            display:flex;
            align-items: center;
            border-radius: 20px;
            background: rgba(0,0,0,0.1)
        }
    }
`
export default Secondnav
