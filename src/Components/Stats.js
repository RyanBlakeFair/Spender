import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";

function refreshPage() {
  window.location.reload(false);
}

function Stats(props) {
  // RETRIVE REDUX STATE
  const tileData = useSelector((state) => state.tiles);

  // const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // useEffect(() => {
  //   wait(1 * 1000).then(() => {
  //     tileData.forEach((weekData) => {
  //       console.log(weekData.pay);
  //       console.log(weekData.week);
  //       console.log(weekData.expenses);
  //     });
  //   });
  // }, []);

  props.tileID.forEach((weekData) => {
    const weekDataObj = JSON.parse(localStorage.getItem(weekData));
    console.log(weekDataObj);
  });

  // LIST DATA
  let [payList, setPayList] = useState([400, 550, 600]);
  let [spendList, setSpendList] = useState([350, 400, 250]);
  let [saveList, setSaveList] = useState([50, 150, 400]);
  let [weekList, setWeekList] = useState(["5th sep", "6th sep", "7th sep"]);

  var payTotal = 0;
  payList.forEach((paycheck) => (payTotal += paycheck));
  payTotal = Math.round((payTotal / payList.length) * 100) / 100;

  var spendTotal = 0;
  spendList.forEach((spent) => (spendTotal += spent));
  spendTotal = Math.round((spendTotal / spendList.length) * 100) / 100;

  var saveTotal = 0;
  saveList.forEach((saved) => (saveTotal += saved));
  saveTotal = Math.round((saveTotal / saveList.length) * 100) / 100;

  // GRAPH DATA
  var spendingOptions = {
    title: {
      text: "Weekly Spending",
      align: "center",
      style: {
        fontSize: "15px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#fff",
      },
    },
    series: [
      {
        name: "Spent",
        data: spendList,
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
      max: Math.max.apply(Math, spendList),
      labels: {
        show: false,
      },
    },
    xaxis: {
      categories: weekList,
      labels: {
        show: false,
      },
      max: spendList.length,
      title: {
        text: "Average Spending: $" + spendTotal,
        style: {
          color: "#fff",
        },
      },
    },
  };

  var savingOptions = {
    title: {
      text: "Weekly Saving",
      align: "center",
      style: {
        fontSize: "15px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#fff",
      },
    },
    series: [
      {
        name: "Saved",
        data: saveList,
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
      max: Math.max.apply(Math, saveList),
      labels: {
        show: false,
      },
    },
    xaxis: {
      categories: weekList,
      labels: {
        show: false,
      },
      max: saveList.length,
      title: {
        text: "Average Saving: $" + saveTotal,
        style: {
          color: "#fff",
        },
      },
    },
  };

  var payOptions = {
    title: {
      text: "Weekly Income",
      align: "center",
      style: {
        fontSize: "15px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#fff",
      },
    },
    series: [
      {
        name: "Pay",
        data: payList,
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
      max: Math.max.apply(Math, payList),
      labels: {
        show: false,
      },
    },
    xaxis: {
      categories: weekList,
      labels: {
        show: false,
      },
      max: payList.length,
      title: {
        text: "Average Income: $" + payTotal,
        style: {
          color: "#fff",
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row">
        <h1
          style={{ width: "12rem" }}
          className="text-2xl text-center text-white font-bold border-2 border-purple-500 rounded"
        >
          OVERVIEW
        </h1>
        <button
          className="text-xl mx-2 px-2 border-2 rounded border-yellow-500 w-10"
          onClick={refreshPage}
        >
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="m437.089844 74.980469c-48.308594-48.351563-112.539063-74.980469-180.855469-74.980469-61.578125 0-120.164063 21.808594-166.527344 61.699219l-49.601562-48.738281-9.9375 168.507812 171.300781-12.667969-48.609375-45.027343c29.421875-23.101563 65.570313-35.667969 103.375-35.667969 92.492187 0 167.742187 75.316406 167.742187 167.894531s-75.25 167.898438-167.742187 167.898438c-42.464844 0-82.976563-15.917969-114.078125-44.816407-30.933594-28.75-49.796875-67.6875-53.109375-109.644531l-1.09375-13.816406h-87.953125l.949219 15.894531c8.066406 134.851563 120.199219 240.484375 255.285156 240.484375 68.316406 0 132.546875-26.628906 180.855469-74.980469 48.304687-48.351562 74.910156-112.640625 74.910156-181.019531s-26.605469-132.667969-74.910156-181.019531zm0 0" />
          </svg>
        </button>
      </div>
      <div className="w-full pt-10 chartGrid">
        <ReactApexChart
          className="mx-10 border-2 rounded pr-2 pt-8 scale-up-center border-red-500"
          options={spendingOptions}
          series={spendingOptions.series}
          type="area"
        />
        <ReactApexChart
          className="mx-10 border-2 rounded pr-2 pt-8 scale-up-center border-green-500"
          options={savingOptions}
          series={savingOptions.series}
          type="area"
        />
        <ReactApexChart
          className="mx-10 border-2 rounded pr-2 pt-8 scale-up-center border-yellow-500"
          options={payOptions}
          series={payOptions.series}
          type="area"
        />
      </div>
    </div>
  );
}

export default Stats;
