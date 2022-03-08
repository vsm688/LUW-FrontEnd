import React from "react";
import ContentPanelContainer from "../ContentPanelContainer/ContentPanelContainer";
import {
  StyledHeaderDiv,
  StyledBlockDivContainer,
  StyledBlockDiv,
  StyledLeftBlockDiv,
  ChildBlockDiv,
  BlockChildContainer,
  BlockParent,
} from "./Instructions.styled";
import { ReactComponent as CBlockSVG } from "../../images/ControlBlocks.svg";
import { ReactComponent as LBlockSVG } from "../../images/LookBlocks.svg";
import { ReactComponent as LBlockChild1SVG } from "../../images/LBlockChild1.svg";
import { ReactComponent as LBlockChild2SVG } from "../../images/LBlockChild2.svg";
import { ReactComponent as MBlockSVG } from "../../images/MotionBlocks.svg";
import { ReactComponent as CBlockChild1SVG } from "../../images/CBlockChild1.svg";
import { ReactComponent as MBlockChildSVG } from "../../images/MBlockChild1.svg";
import PurpleBlock from "../../images/purpleblock.png";
import PurpleBlockChild from "../../images/purpleblockchild.png";
const Instructions = () => {
  return (
    <ContentPanelContainer>
      <StyledHeaderDiv>
        <h1>Explore Scratch blocks</h1>
        <p>
          Learn the basic function of some basic scratch block as as "say",
          "wait", "go to" and "hide."
        </p>
      </StyledHeaderDiv>

      <StyledBlockDivContainer>
        <StyledBlockDiv>
          <img src={PurpleBlock} width={"50%"} height={"85%"}></img>
          <img src={PurpleBlockChild} width={"25%"} height={"20%"}></img>
        </StyledBlockDiv>
        <StyledBlockDiv>
          <img src={PurpleBlock} width={"50%"} height={"85%"}></img>
          <img src={PurpleBlockChild} width={"25%"} height={"20%"}></img>
        </StyledBlockDiv>
        <StyledBlockDiv>
          <img src={PurpleBlock} width={"50%"} height={"85%"}></img>
          <img src={PurpleBlockChild} width={"25%"} height={"20%"}></img>
        </StyledBlockDiv>
      </StyledBlockDivContainer>
    </ContentPanelContainer>
  );
};

export default Instructions;
