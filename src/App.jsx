import React, { useState } from "react";

import icon from "./assets/images/icon-arrow.svg";

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [age, setAge] = useState(null);
  const [ageDays, setAgeDays] = useState("");
  const [ageMonths, setAgeMonths] = useState("");
  const [ageYears, setAgeYears] = useState("");

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputDate = new Date(`${year}-${month}-${day}`);
    if (inputDate.toString() === "Invalid Date") {
      setErrorMessage("Must be a valid date");
      setAge(null);
    } else {
      const today = new Date();
      const ageInMilliseconds = today - inputDate;
      const ageInYears = Math.floor(ageInMilliseconds / 31556952000);
      const ageInMonths = Math.floor(
        (ageInMilliseconds % 31556952000) / 2629746000
      );
      const ageInDays = Math.floor(
        ((ageInMilliseconds % 31556952000) % 2629746000) / 86400000
      );
      setAge(
        `${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days`
      );
      setAgeDays(ageInDays);
      setAgeMonths(ageInMonths);
      setAgeYears(ageInYears);
      setErrorMessage("");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white w-[450px] p-12 rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col  justify-between relative"
        >
          <div className="flex">
            <label className="flex flex-col">
              <span>Day</span>
              <input
                className="w-24 border-2 border-gray-200"
                type="text"
                placeholder="DD"
                value={day}
                onChange={handleDayChange}
              />
            </label>
            <label className="flex flex-col">
              <span>Month</span>
              <input
                className="w-24"
                type="text"
                placeholder="MM"
                value={month}
                onChange={handleMonthChange}
              />
            </label>
            <label className="flex flex-col">
              <span>Year</span>
              <input
                className="w-24"
                type="text"
                placeholder="YYYY"
                value={year}
                onChange={handleYearChange}
              />
            </label>
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <button className="right-0 absolute" type="submit">
            <img className="bg-purple-600 rounded-full" src={icon} alt="" />
          </button>
        </form>
        <div>
          <h2 className="text-6xl font-bold italic">
            {ageYears ? ageYears : "--"} years
          </h2>
          <h2 className="text-6xl font-bold italic">
            {ageMonths ? ageMonths : "--"} months
          </h2>
          <h2 className="text-6xl font-bold italic">
            {ageDays ? ageDays : "--"} days
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
