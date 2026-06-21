"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  { month: "Jan", carbon: 90 },
  { month: "Feb", carbon: 80 },
  { month: "Mar", carbon: 70 },
  { month: "Apr", carbon: 60 },
  { month: "May", carbon: 55 },
  { month: "Jun", carbon: 50 }
];

export default function MonthlyChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="carbon" />
      </BarChart>
    </ResponsiveContainer>
  );
}
