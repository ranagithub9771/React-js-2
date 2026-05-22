import React, { useState } from 'react'
import InlineCss from './all-topic/ReactCss/InlineCss'
// import TodoWrap from './all-topic/Todo_Practice/TodoWrap'
// import TodoWrapper from './all-topic/10_todoApp/TodoWrapper'
import UncontrolledForm from './all-topic/UncontrolledForm/UncontrolledForm'
import LifeCycleCBC from './all-topic/12_LifeCycle/LifeCycleCBC'
import UncontrolledFormPra from './all-topic/UncontrolledForm/UncontrolledFormPra';
// import Card from './all-topic/ReactCss/Card'
// import ControlledForm3 from './all-topic/08_ControlledForms/ControlledForm3'
// import ControllerForm from './all-topic/08_ControlledForms/ControllerForm'
// import Parent from './all-topic/topic-props/Parent'
// import Drilling_Parent from "./all-topic/04_Props_Drilling/Drilling_Parent"
// import ControlledForms1 from './all-topic/08_ControlledForms/ControlledForms1'
// import ControllerForm from './all-topic/08_ControlledForms/ControllerForm';
// import ControlledForm4 from "./all-topic/08_ControlledForms/ControlledForm4";


function App() {
const [toggle, setToggle] = useState(false);

const handleToggle = ()=> setToggle((prev) => !prev);

  return (
    <div>
      {/* <Parent/> */}

      {/* <Drilling_Parent/> */}
      {/* <ControlledForms1/> */}
    {/* <ControllerForm/> */}
   {/* <ControlledForm3/> */}
   {/* <ControlledForm4/> */}
   {/* <InlineCss/> */}
   {/* <Card/>
   <Card/> */}

   {/* <TodoWrapper/> */}
   {/* <TodoWrap/> */}
   {/* <UncontrolledForm/> */}
{/* <UncontrolledFormPra/> */}
   <button onClick={handleToggle}> Toggle me</button>
   {toggle && <LifeCycleCBC/>}
    </div>
  )
}

export default App