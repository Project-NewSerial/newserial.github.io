import styled from "@emotion/styled";

const breakpoint = "768px";

const mediaQuery = () => `@media(min-width:${breakpoint})`;

export const Container = styled.div`
  label: tab-box;
  width: 100%;
  padding: 0 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  ${mediaQuery} {
    width: 60%;
    height: 80px;
    background-color: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    margin-bottom: 0;
    justify-content: center;
  }
`;

export const Underline = styled.div`
  label: tab-box-underline;
  display: none;

  ${mediaQuery} {
    display: block;
    width: 50%;
    height: 1px;
    background-color: #d9d9d9;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const Tab = styled.div<{ selected: boolean }>`
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
  font-weight: ${(props) => (props.selected ? "700" : "400")};
  opacity: ${(props) => (props.selected ? "100%" : "50%")};
  position: relative;
  cursor: pointer;

  ${mediaQuery} {
    width: 20%;
    height: 100%;
    justify-content: center;
    color: ${(props) => (props.selected ? "#ff6f4f" : "#7f8386")};

    .tab__text {
      margin: 5px 0;
    }
  }
`;

export const TabLine = styled.div`
  height: 50px;
  width: 1px;
  background-color: white;
  opacity: 50%;
`;

export const TabUnderline = styled.div`
  label: tab-underline;
  width: 50%;
  height: 2px;
  background-color: white;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translate(-50%, 0);

  ${mediaQuery} {
    background-color: #ff6f4f;
    bottom: 0;
    z-index: 999;
  }
`;