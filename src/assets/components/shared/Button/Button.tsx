import CircularProgress from '@mui/material/CircularProgress';
import { getCircularSize, StyledButton } from "./styles";
import { ButtonSize, ButtonVariant } from '../../types';
import { ReactNode } from 'react';



export type ButtonProps = {
  variant: ButtonVariant;
  size: ButtonSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  children?: ReactNode | string;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
}

export default function Button({
  variant,
  size,
  isDisabled = false,
  isLoading = false,
  startIcon,
  endIcon,
  onClick,
  children,
}: ButtonProps) {
  

  return (
    <StyledButton
    $variant={variant}
      $size={size}
      onClick={onClick}
      disabled={isDisabled}
    >
      {(startIcon && !isLoading) && startIcon}
      {isLoading ? <CircularProgress color="inherit" size={getCircularSize(size)}/> : children}
      {(endIcon && !isLoading) && endIcon}
    </StyledButton>
  );
}

