import React from "react";
import { Autocomplete, SxProps, TextField, Theme } from "@mui/material";
import { dropdownStyles } from "./styles";

interface DropdownProps<T> {
  isDisabled?: boolean;
  items: T[];
  onChange: (value: T) => void;
  getItemLabel?: (item: T) => string;
  renderItemContent?: (item: T) => React.ReactNode;
  getItemId?: (item: T) => string;
  placeholder?: string;
  style? : SxProps<Theme>;
}

function Dropdown<T>({
  onChange,
  isDisabled = false,
  items,
  getItemLabel = (item) => String(item),
  renderItemContent,
  getItemId,
  placeholder = "Select an option",
  style,
}: DropdownProps<T>) {
  const handleChange = (value: T | null) => {
    if (value === null) {
      const selectedItem = items.find((item) => getItemLabel(item) === value);
      if (selectedItem) {
        onChange(selectedItem);
      }
    } else {
      onChange(value);
    }
  };

  return (
    <Autocomplete
      disabled={isDisabled}
      options={items}
      getOptionLabel={getItemLabel}
      onChange={(_event, value) => handleChange(value)}
      sx={{...dropdownStyles, ...style }}
      renderInput={(params) => (
        <TextField {...params} label={placeholder} variant="outlined" />
      )}
      renderOption={(props, option, { index }) => (
        <li {...props} key={getItemId ? getItemId(option) : `${index}-${getItemLabel(option)}` }>
          {renderItemContent ? renderItemContent(option) : getItemLabel(option)}
        </li>
      )}
      isOptionEqualToValue={(option, value) =>
        getItemLabel(option) === getItemLabel(value)
      }
    />
  );
}

export default Dropdown;
