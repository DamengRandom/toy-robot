import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
} from "react-vis";
import PropTypes from 'prop-types';
// constants
import { axisDataSet } from "../../constants";

export default function ResultChart({ result }) {
  const finalDisplay = `Result: [ axis: (${result.split(",")[0]}, ${
    result.split(",")[1]
  }) & direction: `;

  const dataShown = (result) => {
    const formatData = {
      x: Number(result.split(",")[0]),
      y: Number(result.split(",")[1]),
      size: 6,
      color: "green",
    }; // final plot (x,y)

    let finalAxis = [];

    finalAxis = axisDataSet.map((axis) => {
      if (axis.x === formatData.x && axis.y === formatData.y) {
        axis = formatData; // replace original plot with formatted plot
        // eg: {x: 0, y: 1, opacity: 0.1} => {x: 0, y: 1, opacity: 1, size: 6, color: "green"}
      }

      return axis;
    });

    return finalAxis;
  };

  return (
    <div className="flex-center__column mt-4">
      <XYPlot width={300} height={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <MarkSeries
          className="mark-series-example"
          colorType="literal"
          color={"red"}
          strokeWidth={2}
          opacity={1}
          sizeRange={[5, 10]}
          data={dataShown(result)}
        />
        <XAxis />
        <YAxis />
      </XYPlot>
      <div id="result" data-testid="result">
        <p className="pt-2">
          {finalDisplay}
          <u><strong>{result.split(",")[2]}</strong></u>
          {` ]`}
        </p>
      </div>
    </div>
  );
}

ResultChart.propTypes = {
  result: PropTypes.string
};
