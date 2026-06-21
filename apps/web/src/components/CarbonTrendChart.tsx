"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  { week: "W1", carbon: 22 },
  { week: "W2", carbon: 18 },
  { week: "W3", carbon: 15 },
  { week: "W4", carbon: 12 }
];

export default function CarbonTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="carbon"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
