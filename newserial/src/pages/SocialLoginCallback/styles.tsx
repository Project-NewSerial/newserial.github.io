import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const fade = keyframes`
    0%{
        opacity:100;
    }
    50%{
        opacity:0;
    }
    100%{
        opacity:100;
    }
  `;

export const Container = styled.div`
  label: container;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div`
  label: loading;
  font-family: Noto Sans Kr;
  font-size: 2rem;
  animation: ${fade} 2s ease-in-out infinite;
`;
