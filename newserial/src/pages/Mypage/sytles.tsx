import styled from "@emotion/styled";

const breakpoint = "768px";

const mediaQuery = () => `@media(min-width:${breakpoint})`;

export const Container = styled.div`
  background-color: #ff6f4f;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQuery} {
    background-color: #ffffff;
  }
`;

export const Title = styled.div`
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
  font-family: Bangers;
  color: white;
  font-size: 2rem;
  margin: 20px 0;
`;

export const TabBox = styled.div`
  width: 100%;
  padding: 0 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Tab = styled.div<{ seleted: boolean }>`
  label: tab;
  width: 32%;
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 1.5rem;
  font-family: Noto Sans KR;
  font-weight: ${(props) => (props.seleted ? "700" : "400")};
  opacity: ${(props) => (props.seleted ? "100%" : "50%")};
  position: relative;
`;

export const TabLine = styled.div`
  height: 50px;
  width: 1px;
  background-color: white;
  opacity: 50%;
`;

export const TabUnderline = styled.div`
  width: 50%;
  height: 2px;
  background-color: white;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Main = styled.div`
  width: 100%;
  height: 100vh;
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

  & > img {
    width: 60%;
    height: auto;
    margin: 20px 0;
  }
`;

export const MainTop = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 50px;
`;

export const Info = styled.div`
  width: 15px;
  height: 15px;
  background-color: #939d9e;
  color: white;
  border-radius: 50%;
`;

export const MainTitle = styled.div`
  width: 100%;
  font-size: 2rem;
  span {
    font-size: 3.6rem;
  }
`;

export const MainDetail = styled.div`
  width: 70%;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  position: relative;
  font-size: 1.5rem;

  img {
    width: 70px;
    height: auto;
    position: absolute;
    bottom: -15px;
    right: -30px;
  }
`;
