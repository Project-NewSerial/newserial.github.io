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
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 40px 25px;
  box-sizing: border-box;
  font-family: Noto Sans KR;
  margin-top: 30px;

  .container--highlight {
    color: #ff6f4f;
    font-weight: 700;
  }

  & > img {
    width: 50%;
    height: 200px;
    margin: 20px 0;
  }

  ${mediaQuery} {
    width: 60%;
    margin-top: 0;
    border-radius: 0;
    padding: 40px 25px;
  }
`;

export const Top = styled.div`
  label: top;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 15px;

  ${mediaQuery} {
    width: 60%;
    margin-bottom: 0;
    background-color: none;
    justify-content: end;
    color: #ff6f4f;
    border-radius: 20px;
    padding: 2px 10px;
  }
`;

export const Info = styled.div`
  label: info;
  width: 15px;
  height: 15px;
  background-color: #939d9e;
  color: white;
  border-radius: 50%;
  cursor: pointer;
`;

export const Title = styled.div`
  label: title;
  width: 100%;
  font-size: 2rem;
  margin-top: 35px;
  span {
    font-size: 3.6rem;
  }

  ${mediaQuery} {
    width: 55%;
    margin-top: 0;
  }
`;

export const Detail = styled.div`
  label: detail;
  width: 70%;
  padding: 10px 20px;
  box-sizing: border-box;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  position: relative;
  font-size: 1.5rem;

  img {
    width: 60px;
    height: auto;
    position: absolute;
    bottom: -15px;
    right: -30px;
  }

  ${mediaQuery} {
    width: 50%;
  }
`;
