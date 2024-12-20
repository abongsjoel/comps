import React from "react";

function* dateGenerator(startDate) {
  let input = yield startDate;

  let date = new Date(startDate);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format. Please use YYYY-MM-DD");
  }

  /* Add this section if startDate is not gauranteed to be a Friday */

  //   const daysUntilFriday = (5 - date.getDay() + 7) % 7;

  //   if (daysUntilFriday === 0) {
  //     yield date.toISOString().split("T")[0];
  //   }

  while (true) {
    const nextFriday = date;
    nextFriday.setDate(date.getDate() + 7);
    if (input === "start") {
      input = yield startDate;
      date = new Date(startDate);
    } else if (input === "end") {
      return nextFriday.toISOString().split("T")[0];
    } else {
      input = yield nextFriday.toISOString().split("T")[0];
    }
  }
}

const Generator = () => {
  const val = dateGenerator("2024-12-14");
  //   console.log({ val: val.next() });
  //   console.log({ val: val.next() });
  //   console.log({ val: val.next() });
  //   console.log({ val: val.next("end") });
  //   console.log({ val: val.next() });
  //   console.log({ val: val.next() });

  return (
    <div>
      <h1>Generator Component</h1>
      <p>{val.next().value}</p>
      <p>{val.next().value}</p>
      <p>{val.next().value}</p>
      <p>{val.next().value}</p>
      <p>{val.next("start").value}</p>
      <p>{val.next().value}</p>
      <p>{val.next().value}</p>
      <p>{val.next().value}</p>
      <p>{val.next("end").value}</p>
      <p>{val.next().value}</p>
      <p>{val.next().value}</p>
    </div>
  );
};

export default Generator;
