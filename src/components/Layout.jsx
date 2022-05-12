import { useState, useCallback, useMemo } from "react";
import Button from "./Button";
import ShowCounter from "./ShowCounter";
import Title from "./Title";

function Layout() {
  const [counter1, Setcounter1] = useState(0);
  const [counter2, Setcounter2] = useState(0);

  // use call back function cash the function

  const IncrementBy1 = useCallback(() => {
    Setcounter1((PrevState) => PrevState + 1);
  }, []);

  // use callback function cash the function
  const IncrementBy5 = useCallback(() => {
    Setcounter2((PrevState) => PrevState + 5);
  }, []);

  //  useMeno function cash the return type

  const checkEvenOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <div>
      <Title />
      <div className="card">
        <ShowCounter counter={counter1} title="Counter 1" />
        <Button handleclick={IncrementBy1}>Increment By 2</Button>
        <br />
        <p>Check:{checkEvenOdd ? "Even" : "Odd"}</p>
      </div>
      <hr />
      <div className="card">
        <ShowCounter counter={counter2} title="Counter 5" />
        <Button handleclick={IncrementBy5}>Increment By 5</Button>
      </div>
    </div>
  );
}

export default Layout;
