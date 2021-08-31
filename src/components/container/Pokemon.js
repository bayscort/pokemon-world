import styled from "styled-components";

export const ThumbContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0 ;
  margin: 0.3rem;
  border: 1px solid #efefef;
  border-radius: 0.2rem;
  min-width: 160px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
`;

export const ThumbNumber = styled.div`
  border-radius: 1rem;
  padding: 0.2rem 0.4rem;
  background-color: rgba(255,255,255,0.3);
`;


export const ThumbImg = styled.img`
  width: 120px;
  height: 120px;
`;

export const DetailThumb = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`;

