import { Button } from "@chakra-ui/react";
import { colors } from "theme/colors";
import { device } from "theme/mediaQueries";
import styled from "styled-components";

export const CollapseWrapper = styled.div`
  height: 7rem;
  @media ${device.mobileL} {
    height: unset;
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 0 0 10px 10px;
  padding-bottom: 1rem;
`;

export const ColorButton = styled.button`
  width: 70%;
  padding: 0.4rem;
  font-weight: 500;
  border-bottom: solid 1px ${colors.theme};

  :hover {
    color: ${(props) => props.color};
  }
`;
export const Trigger = styled(Button)`
  background-color: black;
`;
export const ColorInput = styled.input`
  position: absolute;
  width: 100%;
  padding: 0;
  margin: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  cursor: pointer;
  pointer-events: auto;
`;

export const OtherWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 2rem;
  position: relative;
  :hover {
    color: #fff;
  }
`;
export const ColorLabel = styled.p`
  font-weight: 600;
  display: block;
  position: absolute;
  z-index: 10;
  pointer-events: none;
  :hover {
    color: #fff;
    cursor: pointer;
  }
`;
