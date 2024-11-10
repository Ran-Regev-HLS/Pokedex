import styled, { css } from "styled-components";
import { colors } from "../../../../colors";
import { ButtonProps } from "./Button";

const variants = {
  primary: css`
    background-color: ${colors.primary300};
    color: #ffffff;

    &:hover {
      background-color: ${colors.primary400};
    }

    & :active {
      background-color: ${colors.primary500};
      box-shadow: 4px 4px 13px 0px #0000000d inset;
    }

    &:disabled {
      background-color: #e3e6e9;
      color: #a8aeb5;
    }
  `,
  secondary: css`
    border: 1px solid ${colors.primary300};
    color: ${colors.primary300};
    background-color: transparent;

    &:hover {
      background-color: ${colors.primary50};
    }

    & :active {
      background-color: ${colors.primary100};
      box-shadow: 4px 4px 13px 0px #0000000d inset;
    }

    &:disabled {
      border: 1px solid #c7cdd3;
      background-color: transparent;
    }
  `,
  secondaryGrey: css`
    border: 1px solid ${colors.neturals400};
    color: ${colors.neturals400};
    background-color: transparent;

    &:hover {
      border: 1px solid ${colors.neturals400};
      background-color: ${colors.neturals100};
      color: ${colors.neturals300};
    }

    & :active {
      border: 1px solid ${colors.neturals400};
      background-color: ${colors.neturals100};
      color: ${colors.neturals400};
      box-shadow: 4px 4px 13px 0px #0000000d inset;
    }

    &:disabled {
      border: 1px solid #c7cdd3;
      background-color: transparent;
      color: #c7cdd3;
    }
  `,

  tertiary: css`
    color: ${colors.primary300};
    background-color: transparent;

    &:hover {
      background-color: ${colors.primary50};
      color: ${colors.primary300};
    }

    & :active {
      background-color: ${colors.primary100};
      color: ${colors.primary300};
      box-shadow: 4px 4px 13px 0px #0000000d inset;
    }

    &:disabled {
      background-color: transparent;
      color: #c7cdd3;
    }
  `,
  tertiaryGrey: css`
    color: ${colors.neturals400};
    background-color: transparent;

    &:hover {
      background-color: transparent;
      color: ${colors.neturals300};
    }

    & :active {
      background-color: ${colors.neturals100};
      box-shadow: 4px 4px 13px 0px #0000000d inset;
      color: ${colors.neturals400};
    }

    &:disabled {
      background-color: transparent;
      color: #c7cdd3;
    }
  `,
};

const sizeStyles = {
  large: css`
    width: Hug (80px) px;
    height: Fixed (40px) px;
    top: 140px;
    left: 20px;
    padding: 12px 16px 12px 16px;
    gap: 4px;
    border-radius: 4px 0px 0px 0px;
    opacity: 0px;
  `,
  medium: css`
    width: Hug (80px) px;
    height: Fixed (36px) px;
    top: 78px;
    left: 20px;
    padding: 10px 16px 10px 16px;
    gap: 4px;
    border-radius: 4px 0px 0px 0px;
    opacity: 0px;
  `,
  small: css`
    width: Hug (74px) px;
    height: Fixed (32px) px;
    top: 20px;
    left: 20px;
    padding: 9px 16px 9px 16px;
    gap: 4px;
    border-radius: 4px 0px 0px 0px;
    opacity: 0px;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  ${({ size }) => size && sizeStyles[size]};
  ${({ variant }) => variant && variants[variant]};

  &:disabled {
    cursor: not-allowed;
  }
`;

