import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";

const dataMood = [
  { mood: "Calm", value: 90 },
  { mood: "Distracted", value: 50 },
  { mood: "Focused", value: 60 },
  { mood: "Neutral", value: 80 },
  { mood: "Tired", value: 80 },
  { mood: "Stressed", value: 95 },
];

export default function MoodDistributionChart() {
  return (
    <RadarChart outerRadius={150} width={500} height={350} data={dataMood}>
      <PolarGrid />
      <PolarAngleAxis dataKey="mood" tick={{ fill: "#000", fontSize: 14 }} />
      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
      <Radar
        name="Mood"
        dataKey="value"
        stroke="#05aae6"
        strokeWidth={2}
        fill="#e6f5f9"
        fillOpacity={0.7}
      />
      <Tooltip />
    </RadarChart>
  );
}
