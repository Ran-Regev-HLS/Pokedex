import { Autocomplete, Box, SxProps, TextField, Theme } from "@mui/material";
import {
  dropdownStyles,
  itemContainerStyles,
  logoContainerStyles,
  StyledIcon,
} from "./styles";
import { HTMLAttributes } from "react";

type itemType = {
  id: string;
  label: string;
  icon?: string;
  additionalData?: string;
};

interface DropdownProps {
  isDisabled?: boolean;
  items: itemType[];
  onChange: (value: itemType | null) => void;
  placeholder?: string;
  style?: SxProps<Theme>;
}

function Dropdown({
  onChange,
  isDisabled = false,
  items,
  placeholder = "Select an option",
  style,
}: DropdownProps) {
  function renderItem(props: HTMLAttributes<HTMLLIElement>, option: itemType) {
    return (
      <li {...props} key={option.id}>
        <Box sx={itemContainerStyles}>
          <Box sx={logoContainerStyles}>
            {option.icon && <StyledIcon src={option.icon} alt={option.label} />}
            {option.label}
          </Box>
          {option.additionalData && <div>{option.additionalData}</div>}
        </Box>
      </li>
    );
  }

  return (
    <Autocomplete
      disabled={isDisabled}
      options={items}
      getOptionLabel={(item) => item.label}
      onChange={(_event, value) => onChange(value)}
      sx={{ ...dropdownStyles, ...style }}
      renderInput={(params) => (
        <TextField {...params} label={placeholder} variant="outlined" />
      )}
      renderOption={(props, option) => renderItem(props, option)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
    />
  );
}

export default Dropdown;
