import { useEffect, useState } from 'react';

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

  return (
    <>
      <h1>Test counter??</h1>
      <Child count={count} />
      <button onClick={() => setCount((c) => (c -= 1))}>dec</button>
      <button onClick={() => setCount((c) => (c += 1))}>inc</button>
    </>
  );
}

function Child({ count }: { count: number }) {
  useEffect(() => {
    console.log(5);
    return () => {
      console.log(6);
    };
  }, [count]);
  return <div>Count {count}</div>;
}

export default App;
