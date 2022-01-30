import { ButtonGroup } from "@chakra-ui/react";
import styled from "styled-components";
import { colors } from "theme/colors";
import { device } from "theme/mediaQueries";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem;
  @media ${device.laptop} {
  }
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
export const SlidersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    text-align: center;
    margin: 1rem;
    font-size: 1.7rem;
  }
  hr {
    margin: 0 0 1rem 0;
  }
`;
export const ButtonGroupStyled = styled(ButtonGroup)`
  margin-top: 1rem;
  justify-content: space-between;
`;

export const HeadingEdit = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  color: ${colors.theme};
  font-weight: 400;
  background: #ffb76b;
  background: -webkit-linear-gradient(
    to right,
    #ffb76b 0%,
    #ffa73d 30%,
    #ff7c00 60%,
    #ff7f04 100%
  );
  background: -moz-linear-gradient(
    to right,
    #ffb76b 0%,
    #ffa73d 30%,
    #ff7c00 60%,
    #ff7f04 100%
  );
  background: linear-gradient(
    to right,
    #ffb76b 0%,
    #ffa73d 30%,
    #ff7c00 60%,
    #ff7f04 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
