import { Box } from "@mui/material";
import RadarIcon from "@mui/icons-material/Radar";

function Logo() {
  return (
    <Box
      justifyItems={"center"}
      alignItems={"center"}
      gap={1}
      sx={{ display: "flex" }}
    >
      <p className="potta-one-regular fs-600">Reward Radar</p>
      <RadarIcon />
    </Box>
  );
}

export default Logo;
