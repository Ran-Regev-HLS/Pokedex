import styled from "styled-components";
import { colors, spacing } from "../../../../colors";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${colors.NETURALS._WHITE};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing._3} ${spacing._10};
  box-sizing: border-box; 
`;

export const AppLogo = styled.img`
  width: 150px;
  height: 55px;
  gap: 0px;
  opacity: 0px;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing._10};
`;
