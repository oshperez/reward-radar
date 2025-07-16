import { FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import platforms from "../data/platforms.json";

function PlatformSelect({ value, onChange }) {
  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="platform-select-label">Platform</InputLabel>
        <Select
          labelId="platform-select-label"
          id="platform-select"
          value={value}
          label="Platform"
          onChange={onChange}
        >
          {platforms.map((platform) => (
            <MenuItem key={platform} value={platform}>
              {platform}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default PlatformSelect;
