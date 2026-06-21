export default function CarbonTrendChart() {
  const data = [
    { week: "W1", carbon: 22 },
    { week: "W2", carbon: 18 },
    { week: "W3", carbon: 15 },
    { week: "W4", carbon: 12 },
  ];

  return (
    <div>
      <h2>📈 Carbon Trend</h2>

      {data.map((item) => (
        <div key={item.week}>
          {item.week}: {item.carbon} kg
        </div>
      ))}
    </div>
  );
}
