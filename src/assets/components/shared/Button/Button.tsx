import { StyledButton } from "./styles";

export interface ButtonProps {
  variant:
    | "primary"
    | "secondary"
    | "secondaryGrey"
    | "tertiary"
    | "tertiaryGrey";
  size: "large" | "medium" | "small";
  isDisabled?: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}

export default function Button({
  variant,
  size,
  isDisabled = false,
  onClick,
  children,
}: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </StyledButton>
  );
}
