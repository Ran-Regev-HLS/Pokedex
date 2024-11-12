import styled, { css } from "styled-components";
import { borderRadius, colors, spacing } from "../../../../colors";
import { ReactNode } from "react";
import { ButtonSize, ButtonVariant } from "../../types";

export type StyledButtonProps = {
  $variant: ButtonVariant;
  $size: ButtonSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  children?: ReactNode | string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${borderRadius._1};
  cursor: pointer;
  ${({ $size }) =>  buttonSizeMap[$size]};
  ${({ $variant }) => variants[$variant]};

  &:disabled {
    cursor: not-allowed;
  }
`;


const variants = {
  primary: css`
    background-color: ${colors.PRIMARY._300};
    color: #ffffff;

    &:hover {
      background-color: ${colors.PRIMARY._400};
    }

    & :active {
      background-color: ${colors.PRIMARY._500};
      box-shadow: 4px 4px 13px 0px #0000000d inset;
    }

    &:disabled {
      background-color: #e3e6e9;
      color: #a8aeb5;
    }
  `,
  secondary: css`
    border: 1px solid ${colors.PRIMARY._300};
    color: ${colors.PRIMARY._300};
    background-color: transparent;

    &:hover {
      background-color: ${colors.PRIMARY._50};
    }

    & :active {
      background-color: ${colors.PRIMARY._100};
      box-shadow: 4px 4px 13px 0px #0000000d inset;
    }

    &:disabled {
      border: 1px solid #c7cdd3;
      background-color: transparent;
    }
  `,
  secondaryGrey: css`
    border: 1px solid ${colors.NETURALS._400};
    color: ${colors.NETURALS._400};
    background-color: transparent;

    &:hover {
      border: 1px solid ${colors.NETURALS._400};
      background-color: ${colors.NETURALS._100};
      color: ${colors.NETURALS._300};
    }

    & :active {
      border: 1px solid ${colors.NETURALS._400};
      background-color: ${colors.NETURALS._100};
      color: ${colors.NETURALS._400};
      box-shadow: 4px 4px 13px 0px #0000000d inset;
    }

    &:disabled {
      border: 1px solid #c7cdd3;
      background-color: transparent;
      color: #c7cdd3;
    }
  `,

  tertiary: css`
    color: ${colors.PRIMARY._300};
    background-color: transparent;

    &:hover {
      background-color: ${colors.PRIMARY._50};
      color: ${colors.PRIMARY._300};
    }

    & :active {
      background-color: ${colors.PRIMARY._100};
      color: ${colors.PRIMARY._300};
      box-shadow: 4px 4px 13px 0px #0000000d inset;
    }

    &:disabled {
      background-color: transparent;
      color: #c7cdd3;
    }
  `,
  tertiaryGrey: css`
    color: ${colors.NETURALS._400};
    background-color: transparent;

    &:hover {
      background-color: transparent;
      color: ${colors.NETURALS._300};
    }

    & :active {
      background-color: ${colors.NETURALS._100};
      box-shadow: 4px 4px 13px 0px #0000000d inset;
      color: ${colors.NETURALS._400};
    }

    &:disabled {
      background-color: transparent;
      color: #c7cdd3;
    }
  `,
};


export function getCircularSize($size: ButtonSize):number {
  return 0.8 * sizeDimensions[$size].height;
}

export const sizeDimensions = {
  large: { width: 80, height: 40 },
  medium: { width: 80, height: 36 },
  small: { width: 74, height: 32 },
};


const buttonSizeMap = {
  large: css`
    width: ${sizeDimensions.large.width}px;
    height: ${sizeDimensions.large.height}px;
    padding: ${spacing._3} ${spacing._4} ${spacing._3} ${spacing._4};
    gap: ${spacing._1};
    border-radius: ${borderRadius._1};
  `,
  medium: css`
    width: ${sizeDimensions.medium.width}px;
    height: ${sizeDimensions.medium.height}px;
    padding: ${spacing._3} ${spacing._4} ${spacing._3} ${spacing._4};
    gap: ${spacing._1};
    border-radius: ${borderRadius._1};
  `,
  small: css`
     width: ${sizeDimensions.small.width}px;
     height: ${sizeDimensions.small.height}px;
    padding: ${spacing._3} ${spacing._4} ${spacing._3} ${spacing._4};
    gap: ${spacing._1};
    border-radius: ${borderRadius._1};
  `,
};
