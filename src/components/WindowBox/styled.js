import styled from "styled-components";
import { device } from "theme/mediaQueries";

export const Wrapper = styled.div`
  width: ${(props) => props.sliderRangeW.toString()}%;
  height: ${(props) => props.sliderRangeH.toString()}%;
  max-width: 900px;
  max-height: 200px;
  background-color: #575757;
  position: absolute;
  border: solid 4px #878787;
  border-style: inset;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 20px -8px rgba(66, 68, 90, 1);
  transition: 0.2s;
  @media ${device.laptop} {
    max-width: 80.6%;
    max-height: 48%;
  }
`;

export const Landscape = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backround});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 900px;
  z-index: 10;
  @media ${device.laptop} {
    background-size: 100vw;
  }
`;
export const SizeText = styled.p`
  text-align: center;
  position: static;
  color: #fff;
  font-weight: 300;
  margin: 2rem;
  top: 0;
  right: 50%;
  left: 50%;
  z-index: 1;
  margin: 0 auto;
  @media ${device.mobileL} {
    font-size: 1.5vw;
  }
`;
