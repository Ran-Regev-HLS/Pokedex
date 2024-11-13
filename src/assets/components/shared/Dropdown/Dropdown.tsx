import React, { useState } from "react";
import {
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { getDropdownSize } from "./styles";

interface DropdownProps<T> {
  isDisabled?: boolean;
  items: T[];
  onChange: (value: T) => void;
  getItemLabel?: (item: T) => string;
  renderItemContent?: (item: T) => React.ReactNode;
}

function Dropdown<T>({
  onChange,
  isDisabled = false,
  items,
  getItemLabel = (item) => String(item),
  renderItemContent,
}: DropdownProps<T>) {
  const [selectedValue, setSelectedValue] = useState<T | string>("");

  const handleChange = (value: T | string) => {
    setSelectedValue(value);
    if (typeof value === "string") {
      const setlectedItem = items.find((item) => getItemLabel(item) === value);
      if (setlectedItem) {
        onChange(setlectedItem);
      }
    } else {
      onChange(value);
    }
  };


  return (
    <FormControl fullWidth  disabled={isDisabled} >
      <Select
        value={selectedValue}
        onChange={(event) => handleChange(event.target.value)}
        sx={ getDropdownSize() }
      >
        {items.map((item) => (
          <MenuItem key={getItemLabel(item)} value={getItemLabel(item)} >
            {renderItemContent ? renderItemContent(item) : getItemLabel(item)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
