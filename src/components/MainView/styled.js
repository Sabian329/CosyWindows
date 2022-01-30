import { device, size } from "theme/mediaQueries";

import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${size.laptop};
  margin: 0 auto;
  padding-bottom: 10rem;
  h2 {
    padding: 1rem;
    text-align: center;
    margin-top: 4rem;
    font-size: 4rem;
    background: #ffb76b;
    background: linear-gradient(
      to right,
      #ffb76b 0%,
      #ffa73d 30%,
      #ff7c00 60%,
      #ff7f04 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media ${device.mobileL} {
      font-size: 1rem;
    }
  }
`;
export const ButtonStyled = styled.button`
  color: white;
  width: 14rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  padding: 1rem;
  background: rgb(255, 167, 61);
  background: linear-gradient(
    0deg,
    rgba(255, 167, 61, 1) 0%,
    rgba(255, 124, 0, 1) 100%
  );
  box-shadow: 5px 5px 20px -8px rgba(66, 68, 90, 1);
  transition: 0.3s;
  margin-bottom: 5rem;
  :hover {
    transform: scale(0.95);
  }
  @media ${device.mobileL} {
  }
`;

export const Overview = styled.p`
  font-size: 1rem;
  margin-top: 2rem;
`;
