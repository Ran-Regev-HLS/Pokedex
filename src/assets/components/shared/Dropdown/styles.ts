import styled from "styled-components";
import { borderRadius, colors, spacing } from "../../../../colors";

export const dropdownStyles = {
  margin: `${spacing._6} 0 0 0`,
  width: "100%",
  height: "40px",
  gap: `${spacing._1}`,
  borderRadius: `${borderRadius._2}`,
  "&.MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${colors.NETURALS._200}`,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${colors.NETURALS._500}`,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: `1px solid  ${colors.NETURALS._500}`,
    color: `${colors.GENERAL.DARKGREYCYAN}`,
  },
  "&.Mui-focused label": {
    color: `${colors.GENERAL.DARKGREYCYAN}`,
  },
  "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
    border: `1px solid ${colors.GENERAL.GREYCYANBLUE}`,
  },
};

export const logoContainerStyles = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};
export const itemContainerStyles = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  justifyContent: "space-between",
};

export const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
`;
