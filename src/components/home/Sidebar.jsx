import React from 'react'
import styled from 'styled-components'
import {FaSearch,} from 'react-icons/fa';

function Sidebar() {
  return (
    <>
      <Wrapper>
            <div className="sidebar">
                <div className="title">
                    <h2>Javascript</h2>
                </div>
                <div className="searchbar">
                <FaSearch/>
                    <input type="text" />
                </div>
                <div className="links">
                    <ul>
                        <li>Introduction</li>
                    </ul>
                </div>
            </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
    border-right:1px solid rgba(0,0,0,0.2);
    height:100%;
`

export default Sidebar
