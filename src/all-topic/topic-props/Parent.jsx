import React from "react";
import Child_1 from "./Child-1";
import Child_2 from "./Child_2";

import Child3 from "./Child3";
function Parent() {
  let data1 = "hii";
  let data2 = [10, 39, 48];
  let data3 = { name: "sachin", age: 34, city: "pune" };
  return (
    <>
      <h1> Parent Comopoent</h1>
      <Child_1 prop1={data1} prop2={data2} prop3={data3} />

      <Child_2 data={{ data1, data2, data3 }} />
      
      <Child3 prop1={data1} prop2={data2} prop3={data3} />
    </>
  );
}

export default Parent;
