import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { dropdownStyles } from "./styles";

interface DropdownProps<T> {
  isDisabled?: boolean;
  items: T[];
  onChange: (value: T ) => void;
  getItemLabel?: (item: T) => string;
  renderItemContent?: (item: T) => React.ReactNode;
  placeholder?: string;
}



function Dropdown<T>({
  onChange,
  isDisabled = false,
  items,
  getItemLabel = (item) => String(item),
  renderItemContent,
  placeholder = "Select an option",
}: DropdownProps<T>) {

  const handleChange = (value: T | null) => {
    if (!value) {
      const setlectedItem = items.find((item) => getItemLabel(item) === value);
      if (setlectedItem) {
        onChange(setlectedItem);
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
      sx = {dropdownStyles}
      renderInput={(params) => (
        <TextField {...params} label={placeholder} variant="outlined" />
      )}
      renderOption={(props, option) => (
        <li {...props} key = {getItemLabel(option)}>
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
