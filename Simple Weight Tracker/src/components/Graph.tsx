import { ResponsiveLine } from "@nivo/line";
import "../index.css";
// website examples showcase many properties,
// you'll often use just a few of them.
interface DataSeries {
  id: string;
  color: string;
  data: { x: string; y: number }[];
}
interface MyResponsiveLineProps {
  data: DataSeries[];
}

export const MyResponsiveLine = ({ data }: MyResponsiveLineProps) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 10, bottom: 50, left: 35 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: false,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 10,
      tickRotation: -45,
      format: (value) => (value.length > 5 ? `${value.slice(0, 5)}...` : value),
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="data.yFormatted"
    pointLabelYOffset={-12}
    enableSlices="x"
    enableGridX={false}
    useMesh={true}
    // Apply custom theme
    theme={{
      axis: {
        ticks: {
          line: {
            stroke: "#ffffff", // White tick lines
          },
          text: {
            fill: "#ffffff", // White tick text
          },
        },
        legend: {
          text: {
            fill: "#ffffff", // White axis legend text
          },
        },
      },
      grid: {
        line: {
          stroke: "#555555", // Grey color for grid lines
          strokeWidth: 1,
        },
      },
    }}
  />
);
