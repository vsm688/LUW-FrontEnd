import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100vw;
  background-color: white;
  min-height: 50px;
  justify-content: space-between;
  overflow-y: hidden;
  overflow-x: auto;

`;

export const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  padding: 0 30px;
`;

export const StyledLeftHeaderGroup = styled.div`
  display: flex;
`;

export const StyledRightHeaderGroup = styled.div`
  display: flex;
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 1;
`;

export const StyledButton = styled.button`
  width: 180px;
  height: 25px;
  margin-bottom: 5px;
  margin: 0 10px 5px 10px;
  background-color: ${(props) => props.colorSet};
  border-radius: 3px;
  border: none;
  color: white;
  font-weight: 900;
  flex: 1;
  &:hover{
    transform:scale(0.9);
  }
  @media screen and (max-width: 1480px) {
    width: 100px;
    font-size: 9px;
  }
`;

export const StyledFlagGroup = styled.div`
  display: flex;
  * {
    margin: 5px 5px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  align-items: center;

  * {
    margin-top: 10px;
  }
`;

export const LevelsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  img {
    margin-top: 10px;
  }
`;

export const SmallDotImg = styled.img`
  width: 30px;
  margin-top: 10px; ;
`;

export const TextContainer = styled.div`
  font-family: "Courier New", Courier, monospace;
  color: grey;
  font-weight: 900;
`;
