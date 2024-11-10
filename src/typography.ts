import styled from "styled-components";

export const typographyParametrs = {
    fontFamily: {
      primary: "'Mulish', sans-serif",
    },
    fontSize: {
      xl: "28px",
      lg: "24px",
      md: "18px",
      sm: "16px",
      xs: "14px",
      xxs: "12px",
      xxxs: "11px",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      xl: "37px",
      lg: "34px",
      md: "27px",
      sm: "24px",
      xs: "22px",
      xxs: "19px",
      xxxs: "16px",
    },
  };


interface TypographyProps {
  fontFamily?: keyof typeof typographyParametrs.fontFamily;
  fontSize?: keyof typeof typographyParametrs.fontSize;
  fontWeight?: keyof typeof typographyParametrs.fontWeight;
  lineHeight?: keyof typeof typographyParametrs.lineHeight;
}

export const Typography = styled.p<TypographyProps>`
  font-family: ${({ theme, fontFamily = "primary" }) =>
    theme.typography.fontFamily[fontFamily]};
  font-size: ${({ theme, fontSize = "md" }) =>
    theme.typography.fontSize[fontSize]};
  font-weight: ${({ theme, fontWeight = "regular" }) =>
    theme.typography.fontWeight[fontWeight]};
  line-height: ${({ theme, lineHeight = "md" }) =>
    theme.typography.lineHeight[lineHeight]};
`;


// Headings
export const ExtraLargeHeadingBold = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "xl",
  fontWeight: "bold",
  lineHeight: "xl",
})``;

export const ExtraLargeHeadingMedium = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "xl",
  fontWeight: "medium",
  lineHeight: "xl",
})``;

export const LargeHeadingBold = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "lg",
  fontWeight: "bold",
  lineHeight: "lg",
})``;

export const LargeHeadingMedium = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "lg",
  fontWeight: "medium",
  lineHeight: "lg",
})``;

export const LargeHeadingRegular = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "lg",
  fontWeight: "regular",
  lineHeight: "lg",
})``;

export const MediumHeadingBold = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "md",
  fontWeight: "bold",
  lineHeight: "md",
})``;

export const MediumHeadingMedium = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "md",
  fontWeight: "medium",
  lineHeight: "md",
})``;

export const MediumHeadingRegular = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "md",
  fontWeight: "regular",
  lineHeight: "md",
})``;

// Subheadings
export const SubHeadingBold = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "sm",
  fontWeight: "bold",
  lineHeight: "sm",
})``;

export const SubHeadingMedium = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "sm",
  fontWeight: "medium",
  lineHeight: "sm",
})``;

export const SubHeadingRegular = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "sm",
  fontWeight: "regular",
  lineHeight: "sm",
})``;

// Body Text
export const BodyTextBold = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "xs",
  fontWeight: "bold",
  lineHeight: "xs",
})``;

export const BodyTextMedium = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "xs",
  fontWeight: "medium",
  lineHeight: "xs",
})``;

export const BodyTextRegular = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "xs",
  fontWeight: "regular",
  lineHeight: "xs",
})``;

// Captions
export const CaptionBold = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "xxs",
  fontWeight: "bold",
  lineHeight: "xxs",
})``;

export const CaptionMedium = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "xxs",
  fontWeight: "medium",
  lineHeight: "xxs",
})``;

export const CaptionRegular = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "xxs",
  fontWeight: "regular",
  lineHeight: "xxs",
})``;

// Extra Small Text
export const ExtraSmallBold = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "xxxs",
  fontWeight: "bold",
  lineHeight: "xxxs",
})``;

export const ExtraSmallMedium = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "xxxs",
  fontWeight: "medium",
  lineHeight: "xxxs",
})``;

export const ExtraSmallRegular = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "xxxs",
  fontWeight: "regular",
  lineHeight: "xxxs",
})``;

// Button Text
export const ButtonTextBig = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "sm",
  fontWeight: "regular",
  lineHeight: "sm",
})``;

export const ButtonTextMedium = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "sm",
  fontWeight: "regular",
  lineHeight: "sm",
})``;

export const ButtonTextSmall = styled(Typography).attrs({
  fontFamily: "primary",
  fontSize: "xs",
  fontWeight: "regular",
  lineHeight: "xs",
})``;


  
