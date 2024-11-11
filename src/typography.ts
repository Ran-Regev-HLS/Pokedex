import styled, { css } from "styled-components";

const ExtraLarge = css`
  line-height: 37px;
  font-size: 28px;
`;

const Large = css`
  line-height: 34px;
  font-size: 24px;
`;

const Medium = css`
  line-height: 27px;
  font-size: 18px;
`;

const Small = css`
  line-height: 24px;
  font-size: 16px;
`;

const ExtraSmall = css`
  line-height: 22px;
  font-size: 14px;
`;

const Caption = css`
  line-height: 19px;
  font-size: 12px;
`;

const ExtraCaption = css`
  line-height: 16px;
  font-size: 11px;
`;

// Define font weights
export const Regular = styled.p`
  font-weight: 400;
`;

export const MediumWeight = styled.p`
  font-weight: 500;
`;

export const Bold = styled.p`
  font-weight: 700;
`;

// Apply styles to components
export const ExtraLargeHeadingBold = styled(Bold)`
  ${ExtraLarge}
`;

export const ExtraLargeHeadingMedium = styled(MediumWeight)`
  ${ExtraLarge}
`;

export const LargeHeadingBold = styled(Bold)`
  ${Large}
`;

export const LargeHeadingMedium = styled(MediumWeight)`
  ${Large}
`;

export const LargeHeadingRegular = styled(Regular)`
  ${Large}
`;

export const MediumHeadingBold = styled(Bold)`
  ${Medium}
`;

export const MediumHeadingMedium = styled(MediumWeight)`
  ${Medium}
`;

export const MediumHeadingRegular = styled(Regular)`
  ${Medium}
`;

export const SubHeadingBold = styled(Bold)`
  ${Small}
`;

export const SubHeadingMedium = styled(MediumWeight)`
  ${Small}
`;

export const SubHeadingRegular = styled(Regular)`
  ${Small}
`;

export const BodyTextBold = styled(Bold)`
  ${ExtraSmall}
`;

export const BodyTextMedium = styled(MediumWeight)`
  ${ExtraSmall}
`;

export const BodyTextRegular = styled(Regular)`
  ${ExtraSmall}
`;

export const CaptionBold = styled(Bold)`
  ${Caption}
`;

export const CaptionMedium = styled(MediumWeight)`
  ${Caption}
`;

export const CaptionRegular = styled(Regular)`
  ${Caption}
`;

export const ExtraSmallBold = styled(Bold)`
  ${ExtraCaption}
`;

export const ExtraSmallMedium = styled(MediumWeight)`
  ${ExtraCaption}
`;

export const ExtraSmallRegular = styled(Regular)`
  ${ExtraCaption}
`;

// Button Text
export const ButtonTextBig = styled(Regular)`
  ${Small}
`;

export const ButtonTextMedium = styled(Regular)`
  ${Small}
`;

export const ButtonTextSmall = styled(Regular)`
  ${ExtraSmall}
`;
