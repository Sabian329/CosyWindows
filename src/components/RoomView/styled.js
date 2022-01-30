import styled from "styled-components";
import { colors } from "theme/colors";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 2rem 0 -2rem 0;
    padding: 0;
    font-size: 1rem;
  }
`;
export const RoomWindowWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: max-content;
`;
export const ScreenShotBtn = styled.button`
  border-radius: 9999px;
  padding: 0.7rem;
  font-size: 1.2rem;
  line-height: 3rem;
  transition: 0.2s;

  :hover {
    color: ${colors.theme};
    font-size: 1rem;
  }
`;
