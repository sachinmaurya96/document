import React from "react";
import Sidebar from "./Sidebar";
import Article from "../Article";
import styled from "styled-components";

function Main() {
  return (
    <>
      <Wrapper>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="article">
          <Article />
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.main`
position:fixed;
top:120;
height:81vh;
  width: 100%;
  display: grid;
  grid-template-columns: 25% 75%;
.article{
    padding:0 20px
  }

`;
export default Main;
