import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./CustomSelect.scss";

const CustomSelect = ({ items = [], handleChange, label, value }) => {
  return (
    <div className="custom-select">
      <FormControl fullWidth>
        <InputLabel id="custom-select-label">{label}</InputLabel>
        <Select
          labelId="custom-select-label"
          id="custom-select"
          value={value}
          label={label}
          onChange={handleChange}
          disabled={items.length === 0}
        >
          {items.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
export default CustomSelect;
