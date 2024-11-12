import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { getIconButtonStyle, getTextFieldStyle } from "./styles";
import { IconButton, TextField } from "@mui/material";
import { useDebounce } from "use-debounce";

interface SearchBarProps {
  onChange: (value: string) => void;
  isDisabled?: boolean;
  isDebounce?: boolean;
}

function SearchBar({
  onChange,
  isDisabled = false,
  isDebounce = true,
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedValue] = useDebounce(searchTerm, 500);
  const [afterSearch, setAfterSearch] = useState(false);
  const isFirstLoad = useRef(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    setAfterSearch(searchValue !== "");
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onChange(searchTerm);
    }
  };

  function checkIfFirstLoad(): boolean {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return true;
    }
    return false;
  }

  useEffect(() => {
    if (isDebounce && !checkIfFirstLoad()) {
      onChange(debouncedValue);
      setAfterSearch(debouncedValue !== "");
    }
  }, [debouncedValue, isDebounce, onChange]);

  useEffect(() => {
    if (!isDebounce && !checkIfFirstLoad()) {
      onChange(searchTerm);
      setAfterSearch(searchTerm !== "");
    }
  }, [searchTerm, isDebounce, onChange]);

  return (
    <TextField
      variant="standard"
      placeholder="Search"
      value={searchTerm}
      onChange={handleChange}
      disabled={isDisabled}
      sx={getTextFieldStyle(isDisabled, !!searchTerm, afterSearch)}
      slotProps={{
        input: 
          {disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <IconButton
                
                onClick={handleSearch}
                sx={getIconButtonStyle(isDisabled, !!searchTerm, afterSearch)}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),}
        }}
    />
  );
}

export default SearchBar;
