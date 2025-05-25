import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataChart = [
  { day: "Mon", focus: 80, energy: 40 },
  { day: "Tue", focus: 35, energy: 60 },
  { day: "Wed", focus: 50, energy: 90 },
  { day: "Thu", focus: 40, energy: 55 },
  { day: "Fri", focus: 22, energy: 60 },
  { day: "Sat", focus: 58, energy: 65 },
  { day: "Sun", focus: 79, energy: 40 },
];

export default function FocusEnergyChart() {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={dataChart}>
          <CartesianGrid
            horizontal={true}
            vertical={false}
            stroke="#eeeeee"
            strokeDasharray="8 8" //spaziatura tra le linee
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            padding={{ left: 40 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="focus"
            stroke="#04aae6"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="energy"
            stroke="#9bdff9"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
