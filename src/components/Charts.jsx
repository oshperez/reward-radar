import { Box, Typography, Paper } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];

function Charts({ giveaways }) {
  const topGiveaways = [...giveaways]
    .map((g) => ({
      title: g.title,
      worth: parseFloat(g.worth?.replace("$", "")) || 0,
    }))
    .sort((a, b) => b.worth - a.worth)
    .slice(0, 5);

  const typeCount = giveaways.reduce((acc, g) => {
    acc[g.type] = (acc[g.type] || 0) + 1;
    return acc;
  }, {});

  const typeData = Object.entries(typeCount).map(([type, count]) => ({
    name: type,
    value: count,
  }));

  return (
    <Box>
      {/* Bar Chart */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Top 5 Giveaways by Value
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topGiveaways}>
            <XAxis dataKey="title" tick={{ fontSize: 10 }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="worth" fill="#536725" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* Pie Chart */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Giveaway Type Distribution
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={typeData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              label
            >
              {typeData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
}

export default Charts;
