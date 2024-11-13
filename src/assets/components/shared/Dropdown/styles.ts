import { borderRadius, colors, spacing } from "../../../../colors";

const dropdownStyles = {
  baseStyle: {
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
      border: `1px solid ${colors.NETURALS._500}`,
      color: `${colors.GENERAL.DARKGREYCYAN}`,
    },
    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${colors.GENERAL.GREYCYANBLUE}`,
    },
  },
};

export const getDropdownSize = () => ({
  ...dropdownStyles.baseStyle,
});
