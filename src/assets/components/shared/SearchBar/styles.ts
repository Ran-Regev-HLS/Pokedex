import { borderRadius, colors } from "../../../../colors";

const textFieldStyles = {
  baseStyle: {
    width: "400px",
    
    "& .MuiInputBase-root.MuiInput-root": {
      borderColor: "none",
    },
    "& .MuiInputBase-root": {
      borderRadius: borderRadius._1,
    },
  },
  noState: {
    "& .MuiInputBase-root": {
      border: `1px solid ${colors.NETURALS._200}`,
    },
    "&:hover .MuiInputBase-root": {
      border: `1px solid ${colors.NETURALS._500}`,
    },
    ".Mui-focused.MuiInputBase-root": {
      border: `1px solid ${colors.NETURALS._500}`,
      color: `${colors.GENERAL.DARKGREYCYAN}`,
    },
  },
  disabled: {
    "& .Mui-disabled.MuiInputBase-root": {
      border: "none",
      color: `${colors.GENERAL.GREYCYANBLUE}`,
      backgroundColor: `${colors.GENERAL.WHITISHGREY}`,
    },
  },
  afterSearch: {
    "& .MuiInputBase-root": {
      border: `1px solid ${colors.GENERAL.GREYISHCYAN}`,
      color: `${colors.GENERAL.BLACKCYAN}`,
    },
  },
  hasValue: {
    "& .MuiInputBase-root": {
      border: `1px solid ${colors.NETURALS._500}`,
      color: `${colors.GENERAL.BLACKCYAN}`,
    },
  },
};

export const getTextFieldStyle = (
  isDisabled: boolean,
  hasValue: boolean,
  afterSearch: boolean
) => ({
  ...textFieldStyles.baseStyle,
  ...(isDisabled ? textFieldStyles.disabled : {}),
  ...(afterSearch && !isDisabled ? textFieldStyles.afterSearch : {}),
  ...(hasValue && !afterSearch && !isDisabled ? textFieldStyles.hasValue : {}),
  ...(!hasValue && !afterSearch && !isDisabled ? textFieldStyles.noState : {}),
});

const iconButtonStyles = {
  baseStyle: {
    color: `${colors.GENERAL.GREYISHCYAN}`,
  },
  hover: {
    "&:hover": {
      color: `#${colors.GENERAL.GREYCYANBLUE}`,
      backgroundColor: `transparent`,
    },
  },
  active: {
    "&.Mui-focused": {
      color: colors.NETURALS._500,
    },
  },
  disabled: {
    color: `${colors.GENERAL.GREYCYANBLUE}`,
  },
  hasValue: {
    color: `${colors.GENERAL.BLACKCYAN}`,
  },
  afterSearch: {
    color: `${colors.GENERAL.BLACKCYAN}`,
  },
};

export const getIconButtonStyle = (
  isDisabled: boolean,
  hasValue: boolean,
  afterSearch: boolean
) => ({
  ...iconButtonStyles.baseStyle,
  ...(isDisabled ? iconButtonStyles.disabled : iconButtonStyles.hover),
  ...(afterSearch && !isDisabled ? iconButtonStyles.afterSearch : {}),
  ...(hasValue && !afterSearch && !isDisabled ? iconButtonStyles.hasValue : {}),
});
