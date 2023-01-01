import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./Chart.scss";

const Chart = ({ data = [] }) => {
  const options = {
    chart: {
      zoomType: "x",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
      align: "left",
    },
    xAxis: {
      title: {
        text: "Date",
        style: {
          color: "#ff0000",
        },
      },
      labels: {
        formatter: function () {
          return data[this.pos][0];
        },
      },
    },
    yAxis: [
      {
        labels: {
          format: "",
        },
        title: {
          text: "",
          style: {
            color: "#ff0000",
          },
        },
      },
    ],
    series: [
      {
        showInLegend: false,
        data: data,
        color: "#ff0000",
      },
    ],
  };

  if (data.length === 0) {
    return <></>;
  }

  return (
    <div className="chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default Chart;
