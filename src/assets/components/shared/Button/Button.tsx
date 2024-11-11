import CircularProgress from '@mui/material/CircularProgress';
import { getCircularSize, sizeDimensions, StyledButton, StyledButtonProps } from "./styles";
import { ButtonSize } from '../../types';



export interface ButtonProps extends StyledButtonProps{
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
}

export default function Button({
  $variant,
  $size,
  isDisabled = false,
  isLoading = false,
  startIcon,
  endIcon,
  onClick,
  children,
}: ButtonProps) {
  

  return (
    <StyledButton
    $variant={$variant}
      $size={$size}
      onClick={onClick}
      disabled={isDisabled}
    >
      {(startIcon && !isLoading) && startIcon}
      {isLoading ? <CircularProgress color="inherit" size={getCircularSize($size)}/> : children}
      {(endIcon && !isLoading) && endIcon}
    </StyledButton>
  );
}

