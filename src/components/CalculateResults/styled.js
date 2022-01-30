import styled from "styled-components";

export const Wrapper = styled.div`
  width: 17rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 300;
    margin: 1rem;
 

    strong {
 
      font-size: 2.5rem;
      background: #FFB76B;
      background: linear-gradient(to right, #FFB76B 0%, #FFA73D 30%, #FF7C00 60%, #FF7F04 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  }
`;
