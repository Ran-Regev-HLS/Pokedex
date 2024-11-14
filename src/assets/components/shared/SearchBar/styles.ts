import { borderRadius, colors } from "../../../../colors";

const textFieldBaseStyles = {
    width: "400px",

    "& .MuiInputBase-root.MuiInput-root": {
      borderColor: "none",
    },
    "& .MuiInputBase-root": {
      borderRadius: borderRadius._1,
    },
};

const textFieldStyles = {
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
) => ({
  ...textFieldBaseStyles,
  ...(isDisabled ? textFieldStyles.disabled : {}),
  ...(hasValue && !isDisabled ? textFieldStyles.hasValue : {}),
  ...(!hasValue && !isDisabled ? textFieldStyles.noState : {}),
});

const textfieldIconButtonStyles = {
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
};

export const getIconButtonStyle = (
  isDisabled: boolean,
  hasValue: boolean,
) => ({
  ...textfieldIconButtonStyles.baseStyle,
  ...(isDisabled ? textfieldIconButtonStyles.disabled : textfieldIconButtonStyles.hover),
  ...(hasValue && !isDisabled ? textfieldIconButtonStyles.hasValue : {}),
});
