import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { getIconButtonStyle, getTextFieldStyle } from "./styles";
import { IconButton, TextField } from "@mui/material";
import * as Icons from "@mui/icons-material";

type IconProps = {
  name: keyof typeof Icons;
  color?: string;
  size?: string | number;
  onClick?: (value: string) => void;
};

interface SearchBarProps {
  onChangeDebounce: (value: string) => void;
  isDisabled?: boolean;
  startIcon?: IconProps;
  endIcon?: IconProps;
  placeHolder?: string;
  label?: string;
  required?: boolean;
}

function SearchBar({
  onChangeDebounce,
  isDisabled = false,
  startIcon,
  endIcon,
  placeHolder = "Search",
  label = "",
  required = false,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    onChangeDebounce(searchValue);
  };

  const handleEndIconClick = () => {
    if (endIcon?.onClick) {
      endIcon.onClick(searchTerm);
    } else {
      setSearchTerm(""); 
      onChangeDebounce("");
    }
  };

  const renderIcon = (icon: IconProps | undefined) => {
    if (!icon) return null;
    const IconComponent = Icons[icon.name];
    return <IconComponent style={{ color: icon.color, fontSize: icon.size }} />;
  };

  return (
    <TextField
      variant="standard"
      placeholder={placeHolder}
      value={searchTerm}
      onChange={handleChange}
      disabled={isDisabled}
      sx={getTextFieldStyle(isDisabled, !!searchTerm)}
      label={label}
      required={required}
      slotProps={{
        input: {
          disableUnderline: true,
          startAdornment: startIcon && (
            <InputAdornment position="start">
              <IconButton
                disableRipple
                sx={getIconButtonStyle(isDisabled, !!searchTerm)}
              >
                {renderIcon(startIcon)}
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: endIcon && (
            <InputAdornment position="end">
              <IconButton
                disableRipple = {!searchTerm}
                onClick={handleEndIconClick}
                sx={getIconButtonStyle(isDisabled, !!searchTerm)}
              >
                {renderIcon(endIcon)}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
}

export default SearchBar;
