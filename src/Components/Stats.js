import React from "react";
import ReactApexChart from "react-apexcharts";

function Stats(props) {
  var spendingOptions = {
    series: [
      {
        name: "Spent",
        data: [
          400,
          300,
          100,
          900,
          290,
          190,
          220,
          900,
          120,
          700,
          190,
          500,
          130,
          900,
          170,
          200,
          700,
          600,
        ],
      },
    ],
    chart: {
      height: "100%",
      width: "100%",
      type: "line",
    },
    stroke: {
      width: 7,
      curve: "smooth",
    },
    markers: {
      size: 4,
      colors: ["#FFA41B"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: -10,
      max: 1000,
    },
    xaxis: {
      max: 10,
      title: {
        text: "Average Spending: $...",
        style: {
          color: "#fff",
        },
      },
    },
  };

  var savingOptions = {
    series: [
      {
        name: "Saved",
        data: [
          400,
          300,
          100,
          900,
          290,
          190,
          220,
          900,
          120,
          700,
          190,
          500,
          130,
          900,
          170,
          200,
          700,
          600,
        ],
      },
    ],
    chart: {
      height: "100%",
      width: "100%",
      type: "line",
    },
    stroke: {
      width: 7,
      curve: "smooth",
    },
    markers: {
      size: 4,
      colors: ["#FFA41B"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: -10,
      max: 1000,
    },
    xaxis: {
      max: 10,
      title: {
        text: "Average Saving: $...",
        style: {
          color: "#fff",
        },
      },
    },
  };

  var payOptions = {
    series: [
      {
        name: "Pay",
        data: [
          400,
          300,
          100,
          900,
          290,
          190,
          220,
          900,
          120,
          700,
          190,
          500,
          130,
          900,
          170,
          200,
          700,
          600,
        ],
      },
    ],
    chart: {
      height: "100%",
      width: "100%",
      type: "line",
    },
    stroke: {
      width: 7,
      curve: "smooth",
    },
    markers: {
      size: 4,
      colors: ["#FFA41B"],
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: -10,
      max: 1000,
    },
    xaxis: {
      max: 10,
      title: {
        text: "Average Pay: $...",
        style: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <h1
        style={{ width: "12rem" }}
        className="text-2xl text-center text-white font-bold border-2 border-purple-500 rounded"
      >
        OVERVIEW
      </h1>
      <div className="w-full pt-10 chartGrid">
        <ReactApexChart
          className="mx-10 border-2 rounded pr-8 pt-8 scale-up-center border-red-500"
          options={spendingOptions}
          series={spendingOptions.series}
          type="area"
        />
        <ReactApexChart
          className="mx-10 border-2 rounded pr-8 pt-8 scale-up-center border-green-500"
          options={savingOptions}
          series={savingOptions.series}
          type="area"
        />
        <ReactApexChart
          className="mx-10 border-2 rounded pr-8 pt-8 scale-up-center border-yellow-500"
          options={payOptions}
          series={payOptions.series}
          type="area"
        />
      </div>
    </div>
  );
}

export default Stats;
