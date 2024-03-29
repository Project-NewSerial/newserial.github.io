import styled from "@emotion/styled";

const breakpoint = "768px";

const mediaQuery = () => `@media(min-width:${breakpoint})`;

export const Container = styled.div`
  label: container;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #ff6f4f;

  ${mediaQuery} {
    background-color: white;
  }
`;

export const Top = styled.div`
  label: top;
  background-color: #ff6f4f;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ${mediaQuery} {
    padding-top: 30px;
  }
`;

export const Title = styled.div`
  label: title;
  width: 100px;
  height: 35px;
  background-color: white;
  color: #ff6f4f;
  font-family: Bangers;
  border-radius: 20px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const User = styled.div`
  label: user;
  font-family: Bangers;
  color: white;
  font-size: 2rem;
  margin: 20px 0 0 0;
`;

export const Underline = styled.div`
  label: underline;
  font-family: Noto Sans Kr;
  text-decoration: underline;
  font-size: 1.2rem;
  color: white;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Main = styled.div`
  label: main;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 40px 25px;
  box-sizing: border-box;
  font-family: Noto Sans KR;
  margin-top: 30px;

  .main--highlight {
    color: #ff6f4f;
    font-weight: 700;
  }

  ${mediaQuery} {
    width: 60%;
    margin-top: 0;
    border-radius: 0;
    padding: 40px 25px;
  }
`;

export const MainTop = styled.div`
  label: main-top;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 15px;

  & > .main-top--small {
    color: #ff6f4f;
    font-size: 1.2rem;
    justify-content: center;
  }

  ${mediaQuery} {
    width: fit-content;
    margin-bottom: 10px;
    background-color: #d9d9d9;
    justify-content: center;
    color: #ff6f4f;
    border-radius: 20px;
    padding: 2px 10px;
  }
`;
