import styled from "styled-components";
import { device } from "theme/mediaQueries";

export const Room = ({ color }) => (
  <RoomSvg
    width="1116"
    height="416"
    viewBox="0 0 1116 416"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <MainWall x="58" y="58" width="1000" height="300" fill={color} />
    <Wall d="M0 1.5L58 58.5V358L0 416V1.5Z" fill={color} />
    <Wall d="M1116 414.5L1058 357.5V58L1116 0V414.5Z" fill={color} />
    <path d="M0 416L58 358L1058.5 358L1122 420.525L0 416Z" fill="#4F4F4F" />
  </RoomSvg>
);

const RoomSvg = styled.svg`
  box-shadow: 57px 54px 62px -35px rgba(8, 8, 8, 0.52);
  @media ${device.laptop} {
    height: unset;
    width: 100vw;
    aspect-ratio: 2.68269231;
  }
`;

const Wall = styled.path`
  transition: 0.5s;
  -webkit-filter: contrast(70%);
  filter: contrast(70%);
`;
const MainWall = styled.rect`
  transition: 0.5s;
`;
