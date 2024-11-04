import { useState } from 'react';



/*
  * React Related Technical Task
  * There is an issue in this code below.
  * Identify the issue: <Issue>
  * What causes the issue
  * What is the best practice needs to be implemented/Followed to avoid this issue
  * Best of Luck
*/


const StaticCount: React.FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  console.log("Please stop fix me.")
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment StaticCount</button>
    </div>
  );
};


const ParentComponent: React.FC = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <StaticCount/>
      <div>Parent Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <ParentComponent/>
    </div>
  );
}

export default App;
