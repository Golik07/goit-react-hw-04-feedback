import styled from "@emotion/styled"

export const Button = styled.button`
margin-right: 5px;
background-color: transparent;
height: 40px;
cursor: pointer;
font-size: 15px;
    width: 100px;
    color: antiquewhite;
    border-radius: 20px;
text-transform: capitalize;
text-decoration: none;
  border: 2px solid rgb(146, 148, 248);
  position: relative;
  overflow: hidden;
    :hover {
    box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
  }

  
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(146, 148, 248, 0.4),
      transparent
    );
    transition: all 650ms;
  }
  
  :hover:before {
    left: 100%;
  }
` 

export const Section = styled.div`
display: flex;
justify-content: center;
`

