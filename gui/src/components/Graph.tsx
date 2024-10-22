import { ResponsiveLine } from "@nivo/line";
import "../index.css";
import React from "react";

interface ModalInfo {
  weight: string;
  date: string;
}

interface DataSeries {
  id: string;
  color: string;
  data: { x: string; y: number }[];
}
interface MyResponsiveLineProps {
  data: DataSeries[];
  setIsOpen: React.Dispatch<React.SetStateAction<string>>;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalInfo>>;
}

export const MyResponsiveLine = ({
  data,
  setIsOpen,
  setModalInfo,
}: MyResponsiveLineProps) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 20, bottom: 60, left: 45 }}
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
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 6,
      tickRotation: 0,
    }}
    colors={{ scheme: "nivo" }}
    pointSize={11}
    pointColor={{ from: "color", modifiers: [] }}
    pointBorderWidth={2}
    enableCrosshair={false}
    pointBorderColor={{ from: "serieColor" }}
    pointLabel="data.yFormatted"
    pointLabelYOffset={-12}
    onClick={(point) => {
      // Casting x and y to the correct types
      const clickedDate = point.data.x as string;
      const clickedWeight = point.data.y as string;
      setIsOpen("edit");
      setModalInfo({
        weight: clickedWeight,
        date: clickedDate,
      });
    }}
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
