# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- !virtual dom -->
browser create - real dom 
react create - virtual dom
react - 1. create virtual dom 2. compare with real dom 3. update real dom

reconciliation - diffing algorithm - compare virtual dom with new virtual dom and update real dom  this process is called reconciliation

useState  - for controlled
useRef - for uncontrolled


<!-- !dynamic key creation -->
=> by []

<!-- !speard operator -->
=> ...obj

<!-- !return - implictly and explictly  -->

<!-- !optimization -->
->useMemo - for memoization of values
->useCallback - for memoization of functions
=> code - splitting
=> Virtualication 
=> Debouncing and Throttling - revise

install - reduce toolkit
and revise - reducer and context 



































<!--! //app.jsx -->
import { useState } from "react";
import ClassBased from "./allTopics/01_Types-of-components/ClassBased";
import FunctionBased from "./allTopics/01_Types-of-components/FunctionBased";
import CounterFBC from "./allTopics/02_States/CounterFBC";
import Heart from "./allTopics/02_States/Heart";
import StatesInCBC from "./allTopics/02_States/StatesInCBC";
import StatesInFBC from "./allTopics/02_States/StatesInFBC";
import ToggleComponent from "./allTopics/02_States/Toggle";
import Parent1 from "./allTopics/03_Props/Parent1";
import DrillingParent from "./allTopics/04_PropsDrilling/DrillingParent";
import CallbackParent from "./allTopics/05_callbacks/CallbackParent";
import UpliftingParent from "./allTopics/06_StateUplifting/UpliftingParent";
import UserLists from "./allTopics/07_Lists/UserLists";
import ControlledForms1 from "./allTopics/08_ControlledForms/ControlledForms1";
import ControlledForms2 from "./allTopics/08_ControlledForms/ControlledForms2";
import Card from "./allTopics/09_ReactCss/Card";
import InlineCss from "./allTopics/09_ReactCss/InlineCss";
import TodoWrapper from "./allTopics/10_todoApp/TodoWrapper";
import UncontrolledForms from "./allTopics/11_UncontrolledForms/UncontrolledForms";
import LifeCycleInCBC from "./allTopics/12_LifeCycle/LifeCycleInCBC";
import LifeCycleInFBC from "./allTopics/12_LifeCycle/LifeCycleInFBC";
import Users from "./allTopics/12_LifeCycle/Users";
import Products from "./allTopics/13_Fetch/Products";
import Reducer from "./allTopics/15_Reducer/Reducer";
import Hero from "./allTopics/16_Context/Hero";
import ContextProvider from "./allTopics/16_Context/ContextExample";
import CounterProvider from "./allTopics/16_Context/CounterProvider";
import Counter from "./allTopics/16_Context/Counter";
import Task from "./allTopics/17_Task/Task";
import { UserContextProvider } from "./allTopics/17_Task/context/UserContextProvider";
import Routing1 from "./allTopics/18_Routing/Routing1";
import Routing2 from "./allTopics/18_Routing/Routing2";
import ProductsPage from "./allTopics/19_CustomHook/Products"

const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <>
      {/* <FunctionBased /> */}
      {/* <ClassBased /> */}
      {/* <StatesInFBC /> */}
      {/* <Heart /> */}
      {/* <ToggleComponent /> */}
      {/* <CounterFBC /> */}
      {/* <StatesInCBC /> */}
      {/* <Parent1 /> */}
      {/* <DrillingParent /> */}
      {/* <CallbackParent /> */}
      {/* <UpliftingParent /> */}
      {/* <UserLists/> */}
      {/* <ControlledForms1/> */}
      {/* <ControlledForms2 /> */}
      {/* <InlineCss /> */}
      {/* <Card /> */}
      {/* <TodoWrapper /> */}
      {/* <UncontrolledForms /> */}

      {/* <button onClick={handleToggle}>toggle me</button>
      {toggle && <LifeCycleInCBC />} */}

      {/* <LifeCycleInFBC /> */}

      {/* <button onClick={handleToggle}>toggle me</button>
      {toggle && <Users />} */}

      {/* <button onClick={handleToggle}>toggle me</button>
      {toggle && <Products />} */}

      {/* <Reducer /> */}

      {/* <ContextProvider>
        <Hero />
      </ContextProvider> */}

      {/* <CounterProvider>
        <Counter />
      </CounterProvider> */}

      {/* <UserContextProvider>
        <Task />
      </UserContextProvider> */}

      {/* <Routing1 /> */}

      {/* <Routing2 /> */}

      <ProductsPage />
    </>
  );
};

export default App;
