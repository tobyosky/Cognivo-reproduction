import { ResponsiveHeatMap } from "@nivo/heatmap";

const data = [
  {
    id: "14:00",
    data: [
      { x: "Mon", y: 1 },
      { x: "Tue", y: 1 },
      { x: "Wed", y: 1 },
      { x: "Thu", y: 1 },
      { x: "Fri", y: 0 },
      { x: "Sat", y: 0 },
      { x: "Sun", y: 0 },
    ],
  },

  {
    id: "13:00",
    data: [
      { x: "Mon", y: 0 },
      { x: "Tue", y: 2 },
      { x: "Wed", y: 2 },
      { x: "Thu", y: 1 },
      { x: "Fri", y: 0 },
      { x: "Sat", y: 0 },
      { x: "Sun", y: 0 },
    ],
  },
  {
    id: "12:00",
    data: [
      { x: "Mon", y: 0 },
      { x: "Tue", y: 0 },
      { x: "Wed", y: 2 },
      { x: "Thu", y: 2 },
      { x: "Fri", y: 1 },
      { x: "Sat", y: 1 },
      { x: "Sun", y: 1 },
    ],
  },
  {
    id: "11:00",
    data: [
      { x: "Mon", y: 2 },
      { x: "Tue", y: 0 },
      { x: "Wed", y: 0 },
      { x: "Thu", y: 2 },
      { x: "Fri", y: 2 },
      { x: "Sat", y: 2 },
      { x: "Sun", y: 2 },
    ],
  },
  {
    id: "10:00",
    data: [
      { x: "Mon", y: 2 },
      { x: "Tue", y: 2 },
      { x: "Wed", y: 2 },
      { x: "Thu", y: 2 },
      { x: "Fri", y: 2 },
      { x: "Sat", y: 1 },
      { x: "Sun", y: 1 },
    ],
  },
  {
    id: "09:00",
    data: [
      { x: "Mon", y: 2 },
      { x: "Tue", y: 1 },
      { x: "Wed", y: 1 },
      { x: "Thu", y: 1 },
      { x: "Fri", y: 1 },
      { x: "Sat", y: 1 },
      { x: "Sun", y: 1 },
    ],
  },
];

export default function BrainActivityChart() {
  return (
    <div className="w-full h-full">
      <ResponsiveHeatMap
        data={data}
        colors={{
          type: "quantize",
          colors: ["#e4f6fa", "#86ddfe", "#1ab7ef"],
        }}
        margin={{ left: 50, bottom: 50 }}
        axisBottom={{ tickSize: 0, tickPadding: 20, tickRotation: 0 }}
        axisTop={null}
        axisLeft={{
          tickSize: 0,
          tickPadding: 20,
          tickRotation: 0,
        }}
        enableLabels={false}
      />
    </div>
  );
}
