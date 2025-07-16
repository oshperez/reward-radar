import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";

function GiveawayList({ giveaways }) {
  return (
    <Grid container spacing={2}>
      {giveaways.map((giveaway) => (
        <Grid item xs={12} md={6} lg={4} key={giveaway.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={giveaway.thumbnail}
              alt={giveaway.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {giveaway.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Value: {giveaway.worth}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Platforms: {giveaway.platforms}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ends: {new Date(giveaway.end_date).toLocaleDateString()}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Button
                  variant="contained"
                  size="small"
                  href={giveaway.open_giveaway_url}
                  target="_blank"
                >
                  Claim Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default GiveawayList;
