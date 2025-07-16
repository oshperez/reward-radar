import { useState, useEffect } from "react";
import { Grid, Box, Button, Stack } from "@mui/material";
import StatCard from "./StatCard";
import PlatformSelect from "./PlatformSelect";
import SearchBox from "./SearchBox";
import Pagination from "@mui/material/Pagination";
import GiveawayTable from "./GiveawayTable";

export default function Dashboard() {
  const [giveaways, setGiveaways] = useState([]);
  const [filteredGiveaways, setFilteredGiveaways] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;

  const fetchGiveaways = async () => {
    try {
      const url =
        "https://corsproxy.io/?" +
        encodeURIComponent(
          `https://www.gamerpower.com/api/giveaways${
            selectedPlatform ? `?platform=${selectedPlatform}` : ""
          }`
        );

      const response = await fetch(url);
      const data = await response.json();

      if (!Array.isArray(data)) throw new Error("Invalid response format");

      setGiveaways(data);
      setPage(1);
    } catch (error) {
      console.error("Failed to fetch giveaways:", error);
      setGiveaways([]);
    }
  };

  useEffect(() => {
    fetchGiveaways();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = giveaways.filter((giveaway) =>
        giveaway.title.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
      setFilteredGiveaways(filtered);
    } else {
      setFilteredGiveaways(giveaways);
    }
  }, [searchQuery, giveaways]);

  const totalPages = Math.ceil(filteredGiveaways.length / itemsPerPage);
  const currentItems = filteredGiveaways.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box>
      {/* Stat Cards */}
      <Grid container spacing={2} mb={5}>
        <Grid item xs={12} sm={4}>
          <StatCard stat="Total value" value="$1,000" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard stat="Giveaways Count" value="65" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard stat="Top Prize" value="$120" />
        </Grid>
      </Grid>

      {/* Filters and Table */}
      <Stack spacing={3}>
        <Stack direction="row" spacing={2}>
          <SearchBox value={searchQuery} onChange={setSearchQuery} />
          <PlatformSelect
            value={selectedPlatform}
            setSelectedPlatform={setSelectedPlatform}
          />
          <Button variant="contained" onClick={fetchGiveaways}>
            Find Giveaways
          </Button>
        </Stack>

        <GiveawayTable giveaways={currentItems} />

        {totalPages > 1 && (
          <Stack alignItems="center">
            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
            />
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
