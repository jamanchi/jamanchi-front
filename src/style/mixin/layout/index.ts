import { css } from '@emotion/react';

export const layoutContainer = css`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 97vh;
`;

export const pageContainer = css`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 790px;
  & > div {
    margin-left: 20px;
    margin-right: 20px;
  }
`;
