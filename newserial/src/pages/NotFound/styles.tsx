import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-family: Bangers;
  font-size: 6rem;
  color: #ff6f4f;
  margin-bottom: 10px;
`;

export const Detail = styled.div`
  font-family: Noto Sans Kr;
  font-size: 1.5rem;
  color: #d9d9d9;
`;

export const Button = styled.div`
  width: 90px;
  height: 40px;
  background-color: #ff6f4f;
  font-family: Bangers;
  font-size: 2rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  border-radius: 20px;
  cursor: pointer;
`;
