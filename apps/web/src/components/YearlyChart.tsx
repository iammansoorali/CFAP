"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip
} from "recharts";

const data = [
  { name: "Saved", value: 320 },
  { name: "Emitted", value: 180 }
];

export default function YearlyChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
