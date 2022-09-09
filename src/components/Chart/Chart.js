import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
export default function Chart(props) {
    const dataPointValues = props.dataPoints.map(data=>data.value)
    const totalMaximum = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}
