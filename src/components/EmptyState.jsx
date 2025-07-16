import { Box, Typography } from "@mui/material";
import periscopeGif from "../assets/submarine-periscope.gif";

function EmptyState({ message = "No giveaways found." }) {
  return (
    <Box textAlign="center" py={5}>
      <img
        src={periscopeGif}
        alt="Empty State"
        style={{ maxWidth: 200, marginBottom: 16 }}
      />
      <Typography variant="body1">{message}</Typography>
    </Box>
  );
}

export default EmptyState;
