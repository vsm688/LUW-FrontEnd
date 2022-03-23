import styled from "styled-components";

export const StyledLayout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledMain = styled.main`
  display: flex;
  background-color: #b2e4fa;
  width: 100vw;

  justify-content: center;
  align-items: center;
`;

export const StyledContentPane = styled.div`
  display: flex;
  width: 85%;
  height: 85%;
  background-color: red;
  border-radius: 20px;
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  height: 5vh;
  align-items: center;
  @media (max-width: 768px) {
    position: fixed;
    padding: 10px 10px 0px 10px;
    bottom: 0;
    width: 100%;
    /* Height of the footer*/
    height: 40px;
    background: white;
  }
`;
