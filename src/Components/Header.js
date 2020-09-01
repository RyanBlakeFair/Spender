import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Header({ getID }) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <header className="justify-center text-center pt-4">
      <p className="text-4xl font-bold text-white">
        <span role="img" aria-label="dollar">
          CHECK MY DOSH
        </span>
      </p>

      <div className="flex flex-row justify-center text-center h-10 my-2 ml-2 text-white">
        <DatePicker
          className="bg-gray-800 text-white rounded text-center border-2 py-1 text-xl border-purple-500"
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
          }}
          dateFormat="MMMM dd, yyyy"
        />
        <button
          style={{ outline: "none", minHeight: "105%" }}
          className="text-xl mx-2 px-2 border-2 rounded border-yellow-500"
          onClick={() =>
            getID(
              startDate.toString().split(" ").splice(0, 4).join(" "),
              startDate
            )
          }
        >
          <span role="img" aria-label="plus">
            ➕
          </span>
        </button>
      </div>
    </header>
  );
}
export default Header;
