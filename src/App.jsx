import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

function App() {
  const [count, setCount] = useState(1);

  console.log(1);

  useEffect(() => {
    console.log(2);
    return () => {
      console.log(3);
    };
  }, [count]);

  useEffect(() => {
    console.log(4);
    setCount((c) => c + 1);
  }, []);

  return <Child count={count} />;
}

function Child({ count }) {
  useEffect(() => {
    console.log(5);
    return () => {
      console.log(6);
    };
  }, [count]);
  return null;
}

Child.propTypes = {
  count: PropTypes.number,
};

export default App;
