import React from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const CounterPage = ({ initialCount }) => {
  const [count, setCount] = React.useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Counter: {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button type="submit">Add it</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
